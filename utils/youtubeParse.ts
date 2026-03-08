export function extractYoutubeId(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1);
    }

    const id = parsed.searchParams.get("v");
    if (id) return id;

    return null;
  } catch {
    return null;
  }
}