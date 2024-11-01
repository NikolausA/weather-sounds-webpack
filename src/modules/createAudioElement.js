export default function createAudioElement(filePath, className) {
  const audio = document.createElement("audio");
  audio.src = filePath;
  audio.classList.add(className, "active");
  audio.setAttribute("id", "audio");
  audio.setAttribute("autoplay", true);
  audio.setAttribute("loop", true);

  return audio;
}
