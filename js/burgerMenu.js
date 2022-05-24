export let getBurgerMenu = () => {
	let menuBtn = document.querySelector('.burgerMenu');
	let menu = document.querySelector('.navbar__ul');
	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	})
}
export let getLink = () => {
	const link = async () => {
		const got = await fetch("../config.json");
		const config = await got.json();
		let link = config.appStoreLink
		window.onload = function () {
			var url = `${link}`;
			document.querySelector('a[name="href"]').setAttribute('href', url);
		}
	};
	link();
}