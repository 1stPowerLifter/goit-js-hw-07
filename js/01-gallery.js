import { galleryItems } from './gallery-items.js';
// Change code below this line

function htmlImg({ preview, original, description }) {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original} onclick="return false;">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
}
    
const htmlImgs = (Imgs) => Imgs.reduce((acc, img) => acc + htmlImg(img), "")

const gallery = document.querySelector(".gallery")

gallery.innerHTML += htmlImgs(galleryItems)

gallery.addEventListener("click", (e) => {
    const img = e.target

    const instance = basicLightbox.create(`<img src=${img.dataset.source}>`)

    instance.show()
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const modal = document.querySelector(".basicLightbox")
        modal.remove()
    }
}
)