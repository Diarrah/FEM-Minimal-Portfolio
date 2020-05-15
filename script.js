//Form Validation
let form = document.querySelector('.form'),
    email = form.querySelector('.email'),
    formControl = form.querySelectorAll('div');

form.addEventListener('submit', checkInputs);

function checkInputs(e) {
    e.preventDefault();
 
    function isEmpty() {
        formControl.forEach(input => {
            if (input.children[1].value.trim() === '') {
                input.classList.add('invalid')
                input.children[2].innerText = `This field is required`
            } else {
                input.classList.remove('invalid')
            }
        })
    }

    if (!validateEmail(email.children[1].value.trim()) && email.children[1].value !== '') {
            email.classList.add('invalid')
            email.children[2].innerText = `Please provide a valid email`
        } else {
            isEmpty(email.children[1].value.trim())
        }

    function validateEmail(email) {
        let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validEmail.test(String(email).toLowerCase());
    } 
}