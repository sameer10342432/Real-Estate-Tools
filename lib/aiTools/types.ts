import { z } from 'zod';

export interface AIToolDefinition {
  slug: string;
  name: string;
  systemPrompt: string;
  buildUserPrompt: (input: any) => string;
  inputSchema: z.ZodSchema;
  responseFormat: 'json_object' | 'text';
  maxTokens?: number;
}

export interface AIToolResponse {
  success: boolean;
  data?: any;
  error?: string;
}
