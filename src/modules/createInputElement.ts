export default function createInputElement(
  audioEl: HTMLAudioElement
): HTMLInputElement {
  const input: HTMLInputElement = document.createElement("input");
  input.setAttribute("type", "range");
  input.setAttribute("class", "volume-bar");
  input.setAttribute("id", "volume-bar");
  input.setAttribute("min", "0");
  input.setAttribute("max", "1");
  input.setAttribute("step", "0.1");
  input.setAttribute("value", "0.5");

  input.addEventListener("change", () => {
    audioEl.volume = +input.value;
  });

  return input;
}
