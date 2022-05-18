const registartionTabs = document.querySelector('.registration__tabs')
const countepartyItem = document.querySelectorAll('.registration__tab')
const countepartyContent = document.querySelectorAll('.registration__content')

if (countepartyItem) {
  countepartyItem.forEach(el => {
    el.addEventListener('click', (e) => {
      const counterpartyPath = e.currentTarget.dataset.counterpartyPath
      registartionTabs.style.display = "none"
      document.querySelector(`[data-counterparty-target="${counterpartyPath}"]`).classList.add('active')
    })
  })
}

const init = (parentSelector) => {

  const parent = document.querySelector(parentSelector)

  if (parent !== null) {

    const registrationSteps = parent.querySelectorAll('.registration__step')
    const prevStep = parent.querySelector('.prev-btn')
    const nextStep = parent.querySelector('.next-btn')
    const progressItems = parent.querySelectorAll('.registration__progress-item')

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

      progressItems.forEach((el, i) => {
        if (i < currentStep) {
          el.classList.add('passed')
        }
        if (i > currentStep) {
          el.classList.remove('passed')
        }
        el.classList.remove('active')
      })
      progressItems[currentStep].classList.add('active')

      registrationSteps.forEach(el => {
        el.classList.remove('active')
      })
      registrationSteps[currentStep].classList.add('active')
    }

    prevStep.addEventListener('click', () => {
      if (currentStep == 0) {
        registartionTabs.style.display = "block"
        countepartyContent.forEach(el => {
          el.classList.remove('active')
        })
        return
      }
      currentStep--
      showStep()
    })

    nextStep.addEventListener('click', () => {
      if (currentStep == registrationSteps.length - 1) {
        new GraphModal().open('registration-complete');
        return
      }
      currentStep++
      showStep()
    })

    const agreementCheckbox = parent.querySelector(`[data-inpt="check"]`)

    if (agreementCheckbox) {
      agreementCheckbox.addEventListener('click', () => {
        const endBtn = parent.querySelector('.end')
        endBtn.classList.toggle('disabled')
      })
    }

    const regError = parent.querySelector('.registration__error')
    const errorCloseBtn = parent.querySelector('.registration__error-close')
    if (errorCloseBtn) {
      errorCloseBtn.addEventListener('click', () => {
        regError.classList.remove('is-open')
      })
    }

    const radioTrue = parent.querySelector(`[data-add-address="true"]`)
    const radioFalse = parent.querySelector(`[data-add-address="false"]`)
    const additionalAddress = parent.querySelector('.form__additional-address')

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
  }
}

init('[data-counterparty-target="ind"]')
init('[data-counterparty-target="ind-ent"]')
init('[data-counterparty-target="ent"]')
