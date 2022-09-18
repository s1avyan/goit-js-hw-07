import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  divForInsert: document.querySelector(".gallery"),
};
const galleryForInsert = createImages(galleryItems);

function createImages(galleryItems) {
  return galleryItems
    .map((element) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${element.original}">
            <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
            />
          </a>
        </div>
          `;
    })
    .join("");
}

refs.divForInsert.insertAdjacentHTML("beforeend", galleryForInsert);

refs.divForInsert.addEventListener("click", onImageClick);

function onImageClick(event) {
  blocksStandartAction(event);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  refs.divForInsert.addEventListener(
    "keydown",
    (event) => {
      if (event.code === "Escape") {
        console.log(event.code);
        instance.close();
      }
    },
    { once: true }
  );
}

function blocksStandartAction(event) {
  event.preventDefault();
}
