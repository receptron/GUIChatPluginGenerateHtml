/**
 * GenerateHtml Plugin Tool Definition
 */

export const TOOL_NAME = "generateHtml";

export const TOOL_DEFINITION = {
  type: "function" as const,
  name: TOOL_NAME,
  description:
    "Generate a complete, standalone HTML page by sending a detailed prompt to another LLM (Claude). This tool uses AI to write HTML, CSS, and JavaScript based on your description. The generated HTML will be self-contained with all styles and scripts inline, requiring no external dependencies.",
  parameters: {
    type: "object" as const,
    properties: {
      prompt: {
        type: "string",
        description:
          "Detailed description of the desired HTML page. Be specific about layout, styling, interactivity, colors, animations, and functionality. The more detailed your prompt, the better the generated HTML will match your requirements. This prompt will be sent to another AI model (Claude) that specializes in HTML generation.",
      },
    },
    required: ["prompt"],
  },
};

export const SYSTEM_PROMPT = "";
