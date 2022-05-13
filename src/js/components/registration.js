const registrationSteps = document.querySelectorAll('.registration__tab')
const btnStep = document.querySelectorAll('.registration__button')
const prevStep = document.querySelector('.prev-btn')
const nextStep = document.querySelector('.next-btn')
const progressItem = document.querySelectorAll('.registration__progress-item')

let currentStep = 0

function showStep() {

  if (currentStep == registrationSteps.length - 1) {
    nextStep.innerText = 'Завершить регистрацию'
    nextStep.classList.add('end')
    nextStep.classList.add('disabled')
  } else {
    nextStep.innerText = 'Далее'
    nextStep.classList.remove('end')
    nextStep.classList.remove('disabled')
    agreementCheckbox.checked = false
  }

  progressItem.forEach(el => {
    el.classList.remove('active')
  })
  progressItem[currentStep].classList.add('active')
  registrationSteps.forEach(el => {
    el.classList.remove('active')
  })
  registrationSteps[currentStep].classList.add('active')
}

btnStep.forEach(el => {
  el.addEventListener('click', () => {

    if (el.classList.contains('prev-btn')) {
      if (currentStep == 0) {
        return
      }
      currentStep--
    }
    if (el.classList.contains('next-btn')) {
      if (currentStep == registrationSteps.length - 1) {
        return
      }
      currentStep++
    }
    showStep()
  })
})

const regError = document.querySelector('.registration__error')
const errorCloseBtn = document.querySelector('.registration__error-close')
errorCloseBtn.addEventListener('click', () => {
  regError.classList.remove('is-open')
})

const radioTrue = document.querySelector(`[data-add-address="true"]`)
const radioFalse = document.querySelector(`[data-add-address="false"]`)
const additionalAddress = document.querySelector('.login-form__additional-address')

if (radioTrue) {
  radioTrue.addEventListener('click', () => {
    additionalAddress.style.display = 'none'
  })
}
if (radioFalse) {
  radioFalse.addEventListener('click', () => {
    additionalAddress.style.display = 'block'
  })
}

const agreementCheckbox = document.querySelector(`[data-inpt="check"]`)

agreementCheckbox.addEventListener('click', () => {
  const endBtn = document.querySelector('.end')
  endBtn.classList.toggle('disabled')
})
