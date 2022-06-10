export function drawGalleryItem(item) {
    const itemEl = document.createElement('div')
    itemEl.classList = "gallery-item"

    const resourceWrapEl = document.createElement('div')
    resourceWrapEl.classList = "gallery-item__resource"

    if (item.type === "image") {
      const imgEl = document.createElement('img')
      imgEl.classList = "gallery-item__img"
      imgEl.src = item.resource
      resourceWrapEl.appendChild(imgEl)
    } else if (item.type === "audio") {
      const audioEl = document.createElement('audio')
      audioEl.classList = "gallery-item__audio"
      audioEl.src = item.resource
      audioEl.controls = true
      resourceWrapEl.appendChild(audioEl)
    } else if (item.type === "video") {
      const videoEl = document.createElement('video')
      videoEl.classList = "gallery-item__vid"
      videoEl.src = item.resource
      videoEl.controls = true
      resourceWrapEl.appendChild(videoEl)
    }
    const titleEl = document.createElement('span')
    titleEl.classList = "gallery-item-title"
    titleEl.textContent = item.title

    itemEl.appendChild(resourceWrapEl)
    itemEl.appendChild(titleEl)

    return itemEl
}