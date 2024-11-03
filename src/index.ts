import "./index.css";
import images from "./modules/imagesData";
import icons from "./modules/iconsData";
import sounds from "./modules/soundsData";
import createList from "./modules/createList";
import getKeyWordFromUrl from "./modules/getKeyWordFromUrl";
import createAudioElement from "./modules/createAudioElement";
import createInputElement from "./modules/createInputElement";

const root = document.querySelector("#app");
root.style.backgroundImage = `url(${images[1]})`;

const ul = document.createElement("ul");
ul.classList.add("button-list");
root.append(ul);

images.forEach((image) => {
  createList(image, ul, handleClick, icons);
});

function handleClick(e) {
  const audioTag = document.getElementById("audio");
  const inputTag = document.getElementById("volume-bar");
  if (
    e.currentTarget.style.backgroundImage === root.style.backgroundImage &&
    audioTag
  ) {
    audioTag.classList.contains("active") ? audioTag.pause() : audioTag.play();
    audioTag.classList.toggle("active");
  } else {
    if (audioTag) {
      audioTag.remove();
      inputTag.remove();
    }
    const imgUrlArray = e.currentTarget.style.backgroundImage.match(/".+"/);
    const imgUrl = imgUrlArray[0].replaceAll('"', "");
    root.style.backgroundImage = `url(${imgUrl})`;
    const keyWord = getKeyWordFromUrl(imgUrl);
    const soundFilePath = sounds[keyWord];

    const audio = createAudioElement(soundFilePath, keyWord);
    const input = createInputElement(audio);

    root.appendChild(audio);
    root.appendChild(input);
  }
}
