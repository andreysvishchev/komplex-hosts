const registrationSteps = document.querySelectorAll('.registration__tab')
const btnStep = document.querySelectorAll('.login-form__btn')
const prevStep = document.getElementById('prevBtn')
const nextStep = document.getElementById('nextBtn')

let currentStep = 0


function showPage(n) {


  registrationSteps[n].style.display = 'block'

  if (n == (registrationSteps.length - 1)) {
    console.log(123);

  }
}

btnStep.forEach(el => {
  el.addEventListener('click', (e) => {
    self = e.currentTarget
    registrationSteps[currentStep].style.display = 'none'
    currentStep = currentStep++
    self.showPage(currentStep)
  })
})
