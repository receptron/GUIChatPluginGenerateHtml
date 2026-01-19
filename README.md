# @gui-chat-plugin/generate-html

[![npm version](https://badge.fury.io/js/%40gui-chat-plugin%2Fgenerate-html.svg)](https://www.npmjs.com/package/@gui-chat-plugin/generate-html)

A generate HTML plugin for [MulmoChat](https://github.com/receptron/MulmoChat).

## Overview

This plugin generates complete, standalone HTML pages by sending a detailed prompt to an LLM (Claude or Gemini). The generated HTML is self-contained with all styles and scripts inline.

## Installation

```bash
yarn add @gui-chat-plugin/generate-html
```

## Usage

### Vue Implementation (for MulmoChat)

```typescript
// In src/tools/index.ts
import GenerateHtmlPlugin from "@gui-chat-plugin/generate-html/vue";

const pluginList = [
  // ... other plugins
  GenerateHtmlPlugin,
];

// In src/main.ts
import "@gui-chat-plugin/generate-html/style.css";
```

### Core Only (Framework-agnostic)

```typescript
import { pluginCore, TOOL_NAME } from "@gui-chat-plugin/generate-html";
```

## Package Exports

| Export | Description |
|--------|-------------|
| `@gui-chat-plugin/generate-html` | Core (framework-agnostic) |
| `@gui-chat-plugin/generate-html/vue` | Vue implementation |
| `@gui-chat-plugin/generate-html/style.css` | Tailwind CSS styles |

## Requirements

This plugin requires an Anthropic API key or Google API key configured in MulmoChat.

## Test Prompts

1. "Create an HTML page with a login form"
2. "Generate a landing page for a coffee shop"
3. "Make an interactive calculator in HTML"
4. "Create a portfolio page with a dark theme"

## Development

```bash
yarn install
yarn dev        # Start dev server
yarn build      # Build
yarn typecheck  # Type check
yarn lint       # Lint
```

## License

MIT
