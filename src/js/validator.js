export const renderValidator = () => {
    let form = document.querySelector('.js-form')
    let formInputs = document.querySelectorAll('.modal__input-text')
    let inputEmail = document.querySelector('.js-input-email')
    let inputName = document.querySelector('.js-input-name')
    var radio = document.querySelectorAll('input[type="radio"]');
    var check = document.querySelectorAll('input[type="checkbox"]');

    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateName(text) {
        let req = /^[a-zA-Z]+$/;
        return req.test(String(text).toLowerCase());
    }

    form.onsubmit =async function  (e) {
        await e.preventDefault()
        let emailVal = inputEmail.value
        let nameVal = inputName.value
        let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
        let activeRadio;
        let activeCheck = [];
        let modal = document.getElementById('myModal');

        if (emptyInputs.length !== 0) {
            document.getElementById("span__email").textContent = "this field is reqiured*"
            return false;
        } else {
            document.getElementById("span__email").textContent = ""
        }

        if (emailVal.length < 3) {
            document.getElementById("span__email").textContent = "should be more then 3 symbols"
            return false
        } else {
            document.getElementById("span__email").textContent = ""

        }
        if (!validateEmail(emailVal)) {
            document.getElementById("span__email").textContent = "email not valid"
            return false;
        } else {
            document.getElementById("span__email").textContent = ""
        }

        if (nameVal.length < 3) {
            document.getElementById("span__name").textContent = "should be more then 3 symbols"
            return false
        } else {
            document.getElementById("span__name").textContent = ""
        }
        if (!validateName(nameVal)) {
            document.getElementById("span__name").textContent = "name not valid"
            return false;
        } else {
            document.getElementById("span__name").textContent = ""
        }
        for (var i = 0; i < radio.length; i++) {
            radio[i].checked === true ? activeRadio = radio[i].value : null
        }
        for (var i = 0; i < check.length; i++) {
            check[i].checked === true ? activeCheck.push(check[i].id) : null
        }
        function closeModal() {
            modal.style.display = "none"
            document.querySelector('.js-input-email').value = "";
            document.querySelector('.js-input-name').value = "";
            document.getElementById('modal_time').style.display = "none";
            document.getElementById('modal-content').style.height = "815px"; 
            console.log("name" + ":" + nameVal, "email" + ":" + emailVal, "radio" + ":" + activeRadio, "check" + ":" + activeCheck)
        }
        if (
            activeRadio !== null &&
            activeCheck.length > 0 &&
            emailVal.length > 3 &&
            nameVal.length > 3
        ) {
            document.getElementById('modal_time').style.display = "flex";
            document.getElementById('modal-content').style.height = "860px"; 
            setTimeout(closeModal, 3000);
        }
    }
}