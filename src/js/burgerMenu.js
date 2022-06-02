export const renderBurgerMenu = () => {
	const menuBtn = document.querySelector('.burgerMenu');
	const menu = document.querySelector('.navbar__ul');
	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
		document.body.style.overflow = 'hidden'
	})
}
export const renderLink = () => {
	const getlink = async () => {
		const got = await fetch("../../config.json");
		const config = await got.json();
		const link = config.appStoreLink
		const link__config = document.querySelectorAll(".link__config")
		link__config.forEach((a_link) => a_link.onclick = () => {
			a_link.setAttribute("href", link);
		})
	};
	getlink();
}
export const renderModalLink = () => {
	const menuBtn = document.querySelector('.burgerMenu');
	const menu = document.querySelector('.navbar__ul');
	const links = document.querySelectorAll('.navbar__li')
	links.forEach(link => link.addEventListener('click', () => {
		menuBtn.classList.remove('active');
		menu.classList.remove('active');
		document.body.style.overflow = 'auto'
	}))
}