const initLoginTabs = (parentSelector) => {
  const parent = document.querySelector(parentSelector)
  if (parent !== null) {
    const tabs = parent.querySelector('.tabs');
    const tabsBtn = parent.querySelectorAll('.tabs__btn');
    const tabsContent = parent.querySelectorAll('.tabs__content');

    if (tabs) {
      tabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tabs__btn')) {
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
  }

}

initLoginTabs('.login__inner')
initLoginTabs('.lk__content')
