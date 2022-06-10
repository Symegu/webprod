import("./style.scss")
import { drawGalleryItem } from './item.js'
import items from './items'

const galleryRootEl = document.getElementById('gallery')
items.map(item => galleryRootEl.appendChild(drawGalleryItem(item)))
const galleryAudioEl = document.getElementById('gallery')
audios.map(audio => galleryAudioEl.appendChild(drawGalleryItemAudio(audio)))