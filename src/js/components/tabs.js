document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.login-tabs');
  const tabsBtn = document.querySelectorAll('.login-tabs__button');
  const tabsContent = document.querySelectorAll('.login-tabs__content');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('login-tabs__button')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
      }
    })
  }

  const tabsHandler = (path) => {
    tabsBtn.forEach(el => {
      el.classList.remove('login-tabs__button--active')
    });
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('login-tabs__button--active');

    tabsContent.forEach(el => {
      el.classList.remove('login-tabs__content--active')
    });
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('login-tabs__content--active');
  }
})
