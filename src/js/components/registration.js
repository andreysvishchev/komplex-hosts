const registrationSteps = document.querySelectorAll('.registration__tab')
const btnStep = document.querySelectorAll('.login-form__btn')
const prevStep = document.getElementById('prevBtn')
const nextStep = document.getElementById('nextBtn')

let currentStep = 0

function showStep() {
  if (currentStep == registrationSteps.length - 1) {
    nextStep.innerText = 'Заверите регистрацию'
  } else {
    nextStep.innerText = 'Далее'
  }

  registrationSteps.forEach(el => {
    el.classList.remove('registration__tab--active')
  })
  registrationSteps[currentStep].classList.add('registration__tab--active')
}

btnStep.forEach(el => {
  el.addEventListener('click', (e) => {
    const self = e.currentTarget
    if (el.classList.contains('prevBtn')) {
      currentStep--
    }
    if (el.classList.contains('nextBtn')) {
      currentStep++
    }
    showStep()
  })
})

// nextStep.addEventListener('click', () => {
//   currentStep++
//   showStep()
// })

// prevStep.addEventListener('click', () => {
//   currentStep--
//   showStep()
// })
