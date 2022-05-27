export const renderBurgerMenu = () => {
	let menuBtn = document.querySelector('.burgerMenu');
	let menu = document.querySelector('.navbar__ul');
	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	})
}
export let renderLink = () => {
	const getlink = async () => {
		const got = await fetch("../../config.json");
		const config = await got.json();
		let link = config.appStoreLink
		let a = document.getElementById("bb")
		a.setAttribute("href", link);
	};
	getlink();
}