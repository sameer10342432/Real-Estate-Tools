import OpenAI from 'openai';

let openaiClient: OpenAI | null = null;

export function getOpenAIClient(): OpenAI {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error(
      'OPENAI_API_KEY is not configured. Please add your OpenAI API key to environment variables.'
    );
  }

  if (!openaiClient) {
    openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  return openaiClient;
}

export async function generateAIResponse(
  systemPrompt: string,
  userPrompt: string,
  options: {
    model?: string;
    responseFormat?: 'json_object' | 'text';
    maxTokens?: number;
  } = {}
): Promise<string> {
  const client = getOpenAIClient();
  
  const {
    model = 'gpt-4o',
    responseFormat = 'text',
    maxTokens = 4096,
  } = options;

  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];

  const completion = await client.chat.completions.create({
    model,
    messages,
    max_tokens: maxTokens,
    ...(responseFormat === 'json_object' && { response_format: { type: 'json_object' } }),
  });

  return completion.choices[0]?.message?.content || '';
}
