export default function getKeyWordFromUrl(url: string): string {
  const urlParts = url.match(/\/[a-z]+-/i);

  if (urlParts) {
    return urlParts[0].replace("/", "").replace("-", "");
  }

  return "summer";
}
