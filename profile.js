let darkmodeButton = document.querySelector('.darkmode-button')

darkmodeButton.addEventListener('click', () => {
  let element = document.querySelector('.layout-main')
  element.classList.toggle('dark-mode')
})
