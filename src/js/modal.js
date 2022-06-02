export const renderModal = () => {
    const modal = document.getElementById('myModal');
    const btns = document.querySelectorAll(".open__modal");
    const inputRadio = document.querySelectorAll('input[type="radio"]');
    const close_modal = document.querySelector(".close__modal")
    btns.forEach((btn) => btn.onclick = () => {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
        inputRadio.forEach(input => {
            if (btn.dataset.btn == input.id) {
                input.checked = true
            }
        })

    })
    close_modal.onclick = () =>{
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
};