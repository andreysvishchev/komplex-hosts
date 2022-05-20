const togglePagination = (parentSelector) => {
  const parent = document.querySelector(parentSelector)
  const showBtn = parent.querySelector('.lk-block__show')
  const pagination = parent.querySelector('.pagination')
  const hideBtn = parent.querySelector('.pagination__hide')

  showBtn.addEventListener('click', () => {
    showBtn.classList.add('hide')
    pagination.classList.add('isOpen')
  })

  hideBtn.addEventListener('click', () => {
    pagination.classList.remove('isOpen')
    showBtn.classList.remove('hide')
  })
}

togglePagination('.equipment-block')
togglePagination('.confidant-block')
