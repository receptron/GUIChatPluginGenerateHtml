/**
 * GenerateHtml Plugin Core (Framework-agnostic)
 */

import type { ToolPluginCore, ToolContext, ToolResult } from "gui-chat-protocol";
import type { GenerateHtmlArgs, HtmlToolData } from "./types";
import { TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

// Re-export for convenience
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

/**
 * Execute the generateHtml function
 */
export const executeGenerateHtml = async (
  context: ToolContext,
  args: GenerateHtmlArgs,
): Promise<ToolResult<HtmlToolData>> => {
  const { prompt } = args;

  if (!context.app?.generateHtml) {
    return {
      message: "generateHtml function not available",
      instructions: "Acknowledge that the HTML generation failed.",
    };
  }

  try {
    const data = await context.app.generateHtml({ prompt });

    if (data.success && data.html) {
      return {
        data: {
          html: data.html,
          type: "tailwind",
        },
        title: prompt.slice(0, 50),
        message: "HTML generation succeeded",
        instructions:
          "Acknowledge that the HTML was generated and has been already presented to the user.",
      };
    } else {
      console.error("ERR:1\n no HTML data", data);
      return {
        message: data.error || "HTML generation failed",
        instructions: "Acknowledge that the HTML generation failed.",
      };
    }
  } catch (error) {
    console.error("ERR: exception\n HTML generation failed", error);
    return {
      message: "HTML generation failed",
      jsonData: error,
      instructions: "Acknowledge that the HTML generation failed.",
    };
  }
};

// Core Plugin (without UI components)
export const pluginCore: ToolPluginCore<HtmlToolData, unknown, GenerateHtmlArgs> = {
  toolDefinition: TOOL_DEFINITION,
  execute: executeGenerateHtml,
  generatingMessage: "Generating HTML...",
  isEnabled: (startResponse) =>
    !!startResponse?.hasAnthropicApiKey || !!startResponse?.hasGoogleApiKey,
  systemPrompt: SYSTEM_PROMPT,
  backends: ["textLLM"],
};
