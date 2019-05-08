const setCssProps = (left, width, container) => {
	container.style.setProperty('--barLeft', `${left}px`)
	container.style.setProperty('--barWidth', `${width}px`)
}

let currentLeft
let currentWidth

[...document.querySelector('nav').children].forEach(item => {
	
	if (item.classList.contains("current")) {
		currentLeft = item.offsetLeft
		currentWidth = item.offsetWidth
		setCssProps(currentLeft, currentWidth, item.parentNode)
	}
	
	item.addEventListener('mouseenter', event => {
		setCssProps(event.target.offsetLeft, event.target.offsetWidth, item.parentNode)
	})
	
	item.addEventListener('mouseleave', event => {
		setCssProps(currentLeft, currentWidth, item.parentNode)
	})
	
})