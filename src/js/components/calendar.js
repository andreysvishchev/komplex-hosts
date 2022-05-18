const days = document.querySelector('.calendar__days')

for (let i = 0; i < 31; i++) {

  const str = `<div class="calendar__day">${i}</div>`

  if (days) {
    days.innerHTML += str
  }


}
