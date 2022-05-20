const tableItem = document.querySelectorAll('.confidant-table__row')
const tableBtn = document.querySelectorAll('.confidant-table__btn')
const tableMenuItem = document.querySelectorAll('.confidant-table__menu-item')

tableBtn.forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation()
    const parent = el.parentElement
    parent.classList.toggle('isOpen')
    tableItem.forEach(el => {
      if (el !== parent) {
        el.classList.remove('isOpen')
      }
    })
  })
})

tableMenuItem.forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation()
  })
})

window.addEventListener('click', (e) => {
  if (e.target !== tableMenuItem) {
    tableItem.forEach(el => {
      el.classList.remove('isOpen')
    })
  }
})


// const showMore = (parentSelector) => {
//   const parent = document.querySelector(parentSelector)
//   const tableItem = parent.querySelectorAll('.equip-table__row')
//   const showBtn = parent.querySelector('.lk-block__show')

//   const maxItems = 4

//   tableItem.forEach((el, i) => {
//     if (i > maxItems - 1) {
//       el.classList.add('hiden')
//     }
//   })

//   showBtn.addEventListener('click', () => {

//   })


// }

// showMore('.equipment-block')
