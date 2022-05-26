export let getModal = () => {
    var modal = document.getElementById('myModal');
    var btns = document.querySelectorAll(".open__modal");
    btns.forEach(btn => btn.onclick = () => {
        modal.style.display = "flex";
    })

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};