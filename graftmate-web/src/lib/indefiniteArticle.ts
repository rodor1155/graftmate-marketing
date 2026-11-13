/** "a" or "an" before a noun phrase (uses the first alphabetic character). */
export function indefiniteArticle(nounPhrase: string): "a" | "an" {
  const first = nounPhrase.trim().match(/[a-z]/i)?.[0]?.toLowerCase();
  if (!first) {
    return "a";
  }
  if ("aeiou".includes(first)) {
    return "an";
  }
  return "a";
}
