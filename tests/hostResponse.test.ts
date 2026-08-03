/**
 * `context.app.generateHtml` returns `unknown` since gui-chat-protocol 2.0.0,
 * so the plugin narrows it here instead of trusting the host's shape.
 *
 * Run with: yarn test
 */

import { test, describe } from "node:test";
import assert from "node:assert";
import { isGenerateHtmlResponse } from "../src/core/hostResponse.js";

describe("isGenerateHtmlResponse", () => {
  test("accepts a successful response carrying html", () => {
    assert.equal(
      isGenerateHtmlResponse({ success: true, html: "<p>hi</p>" }),
      true,
    );
  });

  test("accepts a failure response carrying an error string", () => {
    assert.equal(isGenerateHtmlResponse({ success: false, error: "boom" }), true);
  });

  test("rejects a response without a boolean success flag", () => {
    assert.equal(isGenerateHtmlResponse({ html: "<p>hi</p>" }), false);
  });

  test("rejects a response whose html is not a string", () => {
    assert.equal(isGenerateHtmlResponse({ success: true, html: 42 }), false);
  });

  test("rejects values that are not a response object", () => {
    [null, undefined, "ok", 7].forEach((value) => {
      assert.equal(
        isGenerateHtmlResponse(value),
        false,
        `should reject ${JSON.stringify(value)}`,
      );
    });
  });
});
