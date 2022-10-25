import ("./stile.scss")
import { getItemHtml } from './item.js'
import gallItems from './items.js'

console.log(gallItems[1].img)
const gallWrap = document.querySelector('.gallItems')

gallItems.forEach(item => {
    gallWrap.insertAdjacentHTML('beforeend', getItemHtml(item))
})
