export let getModal = () => {
    var modal = document.getElementById('myModal');
    var btns = document.querySelectorAll(".open__modal");
    btns.forEach(btn => btn.onclick = () => {
        modal.style.display = "flex";
    })
    // btn.onclick = function () {
    //     modal.style.display = "flex";
    // }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let modal_time = document.getElementById('modal_time')
    let open = document.getElementById('time-open')
    open.onclick = function () {
        modal_time.style.display = "flex";
    }
};