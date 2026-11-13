/** Removes the first markdown H1 so it can be shown in the page hero instead. */
export function stripLeadingMarkdownH1(body: string): string {
  return body.replace(/^#\s+.+(?:\r?\n)+/, "");
}
