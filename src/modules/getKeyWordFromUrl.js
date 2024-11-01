export default function getKeyWordFromUrl(url) {
  const urlParts = url.match(/\/[a-z]+-/i);

  return urlParts[0].replace("/", "").replace("-", "");
}
