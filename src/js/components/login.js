const paswordBtn = document.querySelectorAll('.form__pasword-type')

paswordBtn.forEach(el => {
  el.addEventListener('click', (e) => {
    const self = e.currentTarget
    const input = self.previousElementSibling
    const inputType = self.previousElementSibling.getAttribute('type')
    if (input.value !== '') {
      inputType === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password')
    }
  })
})

const regBtn = document.querySelector(`[data-graph-path="registration-request"]`)

if (regBtn) {
  regBtn.addEventListener('click', (el) => {
    el.preventDefault()
    new GraphModal().open('registration-request')
  })
}

const passRecoveryBtn = document.querySelector(`[data-graph-path="password-recovery"]`)

if (passRecoveryBtn) {
  passRecoveryBtn.addEventListener('click', (el) => {
    el.preventDefault()
    new GraphModal().open('password-recovery')
  })
}


const recoveryStep1 = document.querySelector(`[data-recovery-step="1"]`)
const recoveryStep2 = document.querySelector(`[data-recovery-step="2"]`)
const recoveryBtnNext = document.querySelector(`[data-recovery-btn="next"]`)
const recoveryBtnFinish = document.querySelector(`[data-recovery-btn="finish"]`)

if (recoveryBtnNext) {
  recoveryBtnNext.addEventListener('click', (e) => {
    e.preventDefault()
    recoveryStep1.classList.remove('active')
    recoveryStep2.classList.add('active')
  })
}
