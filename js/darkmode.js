const white = document.getElementById('white')
const dark = document.getElementById('dark')
const dark_mode = document.getElementById('block-dark__mode');
white.addEventListener('click', () => {
    document.getElementById("block-dark__mode").style.backgroundColor = "white"
    document.getElementById("block-dark__mode").style.color = "black"
    document.getElementById("white").style.color = "#FF9209"
    document.getElementById("dark").style.color = "black"
    document.getElementById("sun__white").style.fill = "#FF9209"
    document.getElementById("moon__white").style.fill = "#222222"
    document.getElementById("text-limon").style.color = "red"
})
dark.addEventListener('click', () => {
    document.getElementById("block-dark__mode").style.backgroundColor = "#222222"
    document.getElementById("block-dark__mode").style.color = "white"
    document.getElementById("white").style.color = "white"
    document.getElementById("dark").style.color = "#FF9209"
    document.getElementById("sun__white").style.fill = "white"
    document.getElementById("moon__white").style.fill = "#FF9209" 
})