const notes = document.querySelectorAll('.notes__item')
const notesBtn = document.querySelectorAll('.notes__btn')

notesBtn.forEach(el => {
  el.addEventListener('click', () => {
    const parent = el.parentElement
    parent.classList.toggle('isOpen')

    notes.forEach(el => {
      if (el !== parent) {
        el.classList.remove('isOpen')
      }
    })
  })
})
