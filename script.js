// Mobile Nav
let menu = document.querySelector('.navbar__mobile'),
    { body } = document;

menu.addEventListener('click', function() {
    this.classList.toggle('active')
    this.parentElement.children[1].classList.toggle('active') // This is the navbar__links ul

    this.classList.contains('active') ? body.style.overflow = 'hidden' : body.style.overflow = 'visible';
})

//Form Validation
let form = document.querySelector('.form'),
    formControl = form.querySelectorAll('div'),
    email = form.querySelector('.email');

form.addEventListener('submit', isEmpty);
form.addEventListener('submit', isValid);
 
function isEmpty(e) {
    e.preventDefault();
    formControl.forEach(input => {
        if (input.children[1].value.trim() === '') {
            input.classList.add('invalid')
            input.children[2].innerText = `This field is required`
        } else {
            input.classList.remove('invalid')
        }
    })
}

function isValid(e) {
    e.preventDefault();
    if (!validateEmail(email.children[1].value.trim()) && email.children[1].value !== '') {
        email.classList.add('invalid')
        email.children[2].innerText = `Please provide a valid email`
    } else {
        isEmpty(email.children[1].value.trim())
    }

    // Helper Regex function for email validation:
    function validateEmail(email) {
        let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validEmail.test(String(email).toLowerCase());
    }
}