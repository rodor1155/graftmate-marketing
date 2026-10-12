export type ParsedGuideMarkdown = {
  titleTag: string;
  metaDescription: string;
  body: string;
};

export function parseGuideMarkdown(raw: string): ParsedGuideMarkdown {
  const lines = raw.replace(/^\uFEFF/, "").split(/\r?\n/);
  let titleTag = "";
  let metaDescription = "";
  let bodyStartIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("Title tag:")) {
      titleTag = line.slice("Title tag:".length).trim();
      continue;
    }
    if (line.startsWith("Meta description:")) {
      metaDescription = line.slice("Meta description:".length).trim();
      bodyStartIndex = i + 1;
      continue;
    }
    if (titleTag && metaDescription) {
      break;
    }
  }

  while (bodyStartIndex < lines.length && lines[bodyStartIndex].trim() === "") {
    bodyStartIndex++;
  }

  const body = lines.slice(bodyStartIndex).join("\n");

  if (!titleTag || !metaDescription || !body.trim()) {
    throw new Error("Guide markdown must include Title tag, Meta description, and body content.");
  }

  return { titleTag, metaDescription, body };
}
