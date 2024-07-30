const initSlider = () => {
	const imageList = document.querySelectorAll('.slider-media-list');
	const slideButtons = document.querySelectorAll('.slider-nav-button');
	const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
	
	slideButtons.forEach(button => {
		button.addEventListener('click', () => {
			const direction = button.id === "slider-nav-button--prev" ? -1 : 1;
			const scrollAmount = imageList.clientWidth * direction;
			imageList.scrollBy({
				left: scrollAmount,
				behavior: "smooth"
			});
		});
		const handleSlideButtons = () => {
			slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
			slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
		}
		
		const updateScrollThumbPosition = () => {
			const scrollPosition = imageList.scrollLeft;
			const thumbPosition = (scrollPosition / maxScrollLeft) *
		}
		imageList.addEventListener("scroll", () => {
			handleSlideButton();
			updateScrollThumbPosition();
		})
	})
}
window.addEventListener('load', initSlider);