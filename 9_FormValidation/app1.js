const name = document.getElementById('name')
const zip = document.getElementById('zip')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

const submitButton = document.querySelector('input[type=submit]')

// Form Blur Event Listeners
name.addEventListener('blur', validateName)
zip.addEventListener('blur', validateZip)
email.addEventListener('blur', validateEmail)
phone.addEventListener('blur', validatePhone)

name.addEventListener('blur', validateForm)
zip.addEventListener('blur', validateForm)
email.addEventListener('blur', validateForm)
phone.addEventListener('blur', validateForm)

const isValid = {
  name: false,
  zip: false,
  email: false,
  phone: false
}

function validateName() {
  const re = /^[a-zA-Z]{2,10}$/

  if (!re.test(name.value)) {
    name.classList.add('is-invalid')
    isValid.name = false
  } else {
    name.classList.remove('is-invalid')
    isValid.name = true
  }
}

function validateZip() {
  const re = /^[0-9]{5}(-[0-9]{4})?$/

  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid')
    isValid.zip = false
  } else {
    zip.classList.remove('is-invalid')
    isValid.zip = true
  }
}

function validateEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

  if (!re.test(email.value)) {
    email.classList.add('is-invalid')
    isValid.email = false
  } else {
    email.classList.remove('is-invalid')
    isValid.email = true
  }
}

function validatePhone() {
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid')
    isValid.phone = false
  } else {
    phone.classList.remove('is-invalid')
    isValid.phone = true
  }
}

function validateForm() {
  // check if all the values in the isValid state are true
  const canSubmit = Object.values(isValid).every((val) => val)

  // if all fields are valid then enable the submit
  if (canSubmit) submitButton.disabled = false
  else submitButton.disabled = true
}
