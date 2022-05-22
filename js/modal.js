export let modal = () => {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("open__modal");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    let modal_time = document.getElementById('modal_time')
    let open = document.getElementById('time-open')
    open.onclick = function () {
        modal_time.style.display = "block";
    }
};