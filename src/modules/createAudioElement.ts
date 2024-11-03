export default function createAudioElement(
  filePath: string,
  className: string
): HTMLAudioElement {
  const audio = document.createElement("audio");
  audio.src = filePath;
  audio.classList.add(className, "active");
  audio.setAttribute("id", "audio");
  audio.setAttribute("autoplay", "true");
  audio.setAttribute("loop", "true");

  return audio;
}
