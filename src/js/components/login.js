const paswordBtn = document.querySelectorAll('.login-form__pasword-type')

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
