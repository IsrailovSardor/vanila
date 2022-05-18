export let modal = () => {
    const open = document.getElementById('open');
    const modal_container = document.getElementById('modal-container');
    const close = document.getElementById('close');
    open.addEventListener('click', () => {
        modal_container.classList.add('show');
        document.body.style.overflow = "hidden"
    })
    close.addEventListener('click', () => {
        modal_container.classList.remove('show');
        document.body.style.overflow = ""; 
    })
};


