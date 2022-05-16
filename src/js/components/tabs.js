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
    el.classList.remove('active')
  });
  document.querySelector(`[data-tabs-path="${path}"]`).classList.add('active');

  tabsContent.forEach(el => {
    el.classList.remove('active')
  });
  document.querySelector(`[data-tabs-target="${path}"]`).classList.add('active');
}
