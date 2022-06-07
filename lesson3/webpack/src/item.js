export function drawGalleryItem(item) {
    const itemEl = document.createElement('div')
    itemEl.classList = "gallery-item"

    const imgEl = document.createElement('div')
    imgEl.classList = "gallery-item-img"
    imgEl.innerHTML = `<img src="${item.resource}" alt="img" class="img"></img>`

    const titleEl = document.createElement('span')
    titleEl.classList = "gallery-item-title"
    titleEl.textContent = item.title

    itemEl.appendChild(imgEl)
    itemEl.appendChild(titleEl)

    return itemEl
}