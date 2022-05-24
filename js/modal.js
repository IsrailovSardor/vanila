export let getModal = () => {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("open__modal");
    btn.onclick = function () {
        modal.style.display = "flex";
    }

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