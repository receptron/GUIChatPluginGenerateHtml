/**
 * GenerateHtml Plugin - Core (Framework-agnostic)
 */

// Export plugin-specific types
export type { GenerateHtmlArgs, HtmlToolData, HtmlLibraryType } from "./types";
export { HTML_LIBRARIES, LIBRARY_DESCRIPTIONS } from "./types";

// Export plugin definition
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

// Export plugin utilities
export { executeGenerateHtml, pluginCore } from "./plugin";
