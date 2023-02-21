const formInput = document.querySelector("#validation-input");
formInput.addEventListener('blur', handleBlur)

const lengthData = formInput.getAttribute('data-length')

function handleBlur(event) {
    console.log(formInput.value.length);
    console.log(lengthData);
    if (formInput.value.length == lengthData) {
        formInput.classList.add('valid');
        formInput.classList.remove('invalid');
    }
    else {
        formInput.classList.add('invalid');
        formInput.classList.remove('valid');
    }
}

