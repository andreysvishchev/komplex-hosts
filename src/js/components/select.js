const defaultSelect = () => {
  const elements = document.querySelectorAll('.select');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
    });
  })
}

defaultSelect()
