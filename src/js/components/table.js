const tableItem = document.querySelectorAll('.confidant-table__row')
const tableBtn = document.querySelectorAll('.confidant-table__btn')

tableBtn.forEach(el => {
  el.addEventListener('click', () => {
    const parent = el.parentElement
    parent.classList.toggle('isOpen')

    tableItem.forEach(el => {
      if (el !== parent) {
        el.classList.remove('isOpen')
      }
    })
  })
})
