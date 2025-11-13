import { NextRequest, NextResponse } from 'next/server';
import { aiToolDefinitions } from '@/lib/aiTools/definitions';
import { generateAIResponse } from '@/lib/openai';
import { ZodError } from 'zod';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const toolDefinition = aiToolDefinitions[slug];

    if (!toolDefinition) {
      return NextResponse.json(
        { success: false, error: 'Tool not found' },
        { status: 404 }
      );
    }

    const body = await request.json();

    let validatedInput;
    try {
      validatedInput = toolDefinition.inputSchema.parse(body);
    } catch (error) {
      if (error instanceof ZodError) {
        return NextResponse.json(
          {
            success: false,
            error: 'Invalid input',
            details: error.errors,
          },
          { status: 400 }
        );
      }
      throw error;
    }

    const userPrompt = toolDefinition.buildUserPrompt(validatedInput);

    const responseText = await generateAIResponse(
      toolDefinition.systemPrompt,
      userPrompt,
      {
        responseFormat: toolDefinition.responseFormat,
        maxTokens: toolDefinition.maxTokens,
      }
    );

    let data;
    if (toolDefinition.responseFormat === 'json_object') {
      try {
        data = JSON.parse(responseText);
      } catch {
        return NextResponse.json(
          { success: false, error: 'Failed to parse AI response as JSON' },
          { status: 500 }
        );
      }
    } else {
      data = { text: responseText };
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('AI Tool API Error:', error);

    if (error.message?.includes('OPENAI_API_KEY')) {
      return NextResponse.json(
        {
          success: false,
          error: 'OpenAI API is not configured. Please add your API key to environment variables.',
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
