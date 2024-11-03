import getKeyWordFromUrl from "./getKeyWordFromUrl";
import { MediaFiles } from "../../types/mediaFiles";

export default function createList(
  item: string,
  node: HTMLDivElement,
  handleClick: () => void,
  iconsObj: MediaFiles
) {
  const keyWord = getKeyWordFromUrl(item);

  const li = document.createElement("li");
  li.classList.add("button");
  li.style.backgroundImage = `url(${item})`;
  li.addEventListener("click", handleClick);

  const img = document.createElement("img");
  img.src = iconsObj[keyWord as keyof typeof iconsObj];
  li.appendChild(img);
  node.append(li);
}
