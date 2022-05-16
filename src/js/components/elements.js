const defaultSelect = () => {
  const elements = document.querySelectorAll('.select');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      allowHTML: true,
    });
  })
}

defaultSelect()

const inputsFile = document.querySelectorAll('.form__file-input')

inputsFile.forEach(el => {

  const fileLable = el.nextElementSibling
  const fileBtn = fileLable.nextElementSibling

  el.addEventListener('change', (e) => {
    let fileName = e.target.files[0].name
    if (fileName) {
      fileLable.classList.add('filled')
      fileBtn.classList.add('filled')
      fileLable.innerHTML = fileName
    }
  })

  if (fileBtn) {
    fileBtn.addEventListener('click', () => {
      el.value = ''
      fileLable.classList.remove('filled')
      fileLable.innerHTML = 'Добавить'
      fileBtn.classList.remove('filled')
    })
  }
})
