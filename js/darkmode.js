export let getDarkMode = () => {
    const white = document.getElementById('white__button')
    const dark = document.getElementById('dark_btn')
    
    white.addEventListener('click', () => {
        document.getElementById("dark").style.backgroundColor = "white"
        document.getElementById("dark").style.transition = ".55s"
        document.getElementById("dark").style.color = "black"
        document.getElementById("white__sun").style.fill = "#FF9209"
        document.getElementById("white__moon").style.fill = "#222222"
        document.getElementById("light__text_darkMode").style.color = "#FF9209"
        document.getElementById('dark__text-darkMode').style.color = "#222222"
        document.getElementById('text__mode-header').textContent = "light mode"
        document.getElementById('span__mode-main').textContent = "light"
    })
    dark.addEventListener('click', () => {
        document.getElementById("dark").style.backgroundColor = "#222222"
        document.getElementById("dark").style.color = "white"
        document.getElementById("white__sun").style.fill = "#ffffff"
        document.getElementById("white__moon").style.fill = "#FF9209"
        document.getElementById("light__text_darkMode").style.color = "#ffffff"
        document.getElementById('dark__text-darkMode').style.color = "#FF9209"
        document.getElementById('text__mode-header').textContent = "dark mode"
        document.getElementById('span__mode-main').textContent = "dark"
    })
}