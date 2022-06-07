import("./style.scss")
import { drawGalleryItem } from './item.js'
import items from './items'

const galleryRootEl = document.getElementById('gallery')

items.map(item => galleryRootEl.appendChild(drawGalleryItem(item)))