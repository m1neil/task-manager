export const bodyUtile = {
	bodyLock: function () {
		document.documentElement.classList.add('--scroll-lock')
		if (document.documentElement.scrollHeight > window.innerHeight) {
			document.documentElement.style.paddingRight = `${
				this.getWidthScroll() / 16
			}rem`
			this.addPaddingFixedElements()
		}
	},

	bodyUnLock: function (delay) {
		setTimeout(() => {
			document.documentElement.classList.remove('--scroll-lock')
			if (document.documentElement.scrollHeight > window.innerHeight) {
				document.documentElement.style.removeProperty('padding-right')
				this.removePaddingFixedElements()
			}
		}, delay)
	},

	addPaddingFixedElements: function () {
		const elements = document.querySelectorAll('[data-fixed-scroll]')
		if (!elements.length) return
		const widthScroll = this.getWidthScroll() / 16
		elements.forEach(item => (item.style.paddingRight = `${widthScroll}rem`))
	},

	removePaddingFixedElements: function () {
		const elements = document.querySelectorAll('[data-fixed-scroll]')
		if (!elements.length) return
		elements.forEach(item => item.style.removeProperty('padding-right'))
	},

	getWidthScroll: function () {
		const element = document.createElement('div')
		element.style.cssText = `
		position: fixed;
		left: -50%;
		width: 100px;
		height; 100px;
		opacity: 0;
		visibility: hidden;
		overflow: scroll;
	`
		document.body.append(element)
		const widthScroll = element.offsetWidth - element.clientWidth
		element.remove()
		return widthScroll
	},
}
