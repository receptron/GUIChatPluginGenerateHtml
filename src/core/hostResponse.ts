export interface GenerateHtmlResponse {
  success: boolean;
  html?: string;
  error?: string;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isOptionalString = (value: unknown): value is string | undefined =>
  value === undefined || typeof value === "string";

export const isGenerateHtmlResponse = (
  value: unknown,
): value is GenerateHtmlResponse =>
  isRecord(value) &&
  typeof value.success === "boolean" &&
  isOptionalString(value.html) &&
  isOptionalString(value.error);
