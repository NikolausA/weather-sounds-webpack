import "./index.css";
import images from "./modules/imagesData";
import { icons } from "./modules/iconsData";
import { sounds } from "./modules/soundsData";
import createList from "./modules/createList";
import getKeyWordFromUrl from "./modules/getKeyWordFromUrl";
import createAudioElement from "./modules/createAudioElement";
import createInputElement from "./modules/createInputElement";

const root = document.querySelector("#app") as HTMLDivElement;
if (root) {
  root.style.backgroundImage = `url(${images[1]})`;
}

const ul: HTMLUListElement = document.createElement("ul");
ul.classList.add("button-list");
root.append(ul);

images.forEach((image) => {
  return createList(image, ul, handleClick, icons);
});

function handleClick(e: Event) {
  const audioTag = document.getElementById("audio") as HTMLAudioElement;
  const inputTag = document.getElementById("volume-bar") as HTMLInputElement;

  const ulElement = e.currentTarget as HTMLElement;
  if (ulElement) {
    if (
      ulElement.style.backgroundImage === root.style.backgroundImage &&
      audioTag
    ) {
      audioTag.classList.contains("active")
        ? audioTag.pause()
        : audioTag.play();
      audioTag.classList.toggle("active");
    } else {
      if (audioTag) {
        audioTag.remove();
        inputTag.remove();
      }
      const imgUrlArray = ulElement.style.backgroundImage.match(/".+"/);
      if (imgUrlArray) {
        const imgUrl = imgUrlArray[0].split('"').join("");
        root.style.backgroundImage = `url(${imgUrl})`;
        const keyWord = getKeyWordFromUrl(imgUrl);
        const soundFilePath = sounds[keyWord as keyof typeof sounds];

        const audio = createAudioElement(soundFilePath, keyWord);
        const input = createInputElement(audio);

        root.appendChild(audio);
        root.appendChild(input);
      }
    }
  }
}
