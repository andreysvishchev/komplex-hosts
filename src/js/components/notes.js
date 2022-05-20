const notes = document.querySelectorAll('.notes__item')
const notesBtn = document.querySelectorAll('.notes__btn')
const noteMenuItem = document.querySelectorAll('.notes__menu-item')

notesBtn.forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation()
    const parent = el.parentElement
    parent.classList.toggle('isOpen')
    notes.forEach(el => {
      if (el !== parent) {
        el.classList.remove('isOpen')
      }
    })
  })
})

noteMenuItem.forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation()
  })
})

window.addEventListener('click', (e) => {
  if (e.target !== noteMenuItem) {
    notes.forEach(el => {
      el.classList.remove('isOpen')
    })
  }
})
