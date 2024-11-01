import getKeyWordFromUrl from "./getKeyWordFromUrl";

export default function createList(item, node, handleClick, iconsObj) {
  const keyWord = getKeyWordFromUrl(item);

  const li = document.createElement("li");
  li.classList.add("button");
  li.style.backgroundImage = `url(${item})`;
  li.addEventListener("click", handleClick);

  const img = document.createElement("img");
  img.src = iconsObj[keyWord];
  li.appendChild(img);
  node.append(li);
}
