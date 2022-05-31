export const renderBurgerMenu = () => {
	let menuBtn = document.querySelector('.burgerMenu');
	let menu = document.querySelector('.navbar__ul');
	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
		document.body.style.overflow = 'hidden'
	})
}
export let renderLink = () => {
	const getlink = async () => {
		const got = await fetch("../../config.json");
		const config = await got.json();
		let link = config.appStoreLink
		let link__config = document.querySelectorAll(".link__config")
		link__config.forEach((a_link) => a_link.onclick = () => {
			a_link.setAttribute("href", link);
		})
	};
	getlink();
}
export const renderModalLink = () => {
	let menuBtn = document.querySelector('.burgerMenu');
	let menu = document.querySelector('.navbar__ul');
	const links = document.querySelectorAll('.navbar__li')
	links.forEach(link => link.addEventListener('click', () => {
		menuBtn.classList.remove('active');
		menu.classList.remove('active');
		document.body.style.overflow = 'auto'
	}))
}