// Dark || Light Mode
const btn = document.querySelector('.btn-toggle')
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

const currentTheme = localStorage.getItem('theme')
    if (currentTheme === 'dark') {
    document.body.classList.toggle('dark-theme')
    } else if (currentTheme === 'light') {
    document.body.classList.toggle('light-theme')
}

btn.addEventListener('click', function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle('light-theme')
        let theme = document.body.classList.contains('light-theme')
        ? 'light'
        : 'dark'
    } else {
        document.body.classList.toggle('dark-theme')
        let theme = document.body.classList.contains('dark-theme')
        ? 'dark'
        : 'light'
}
        localStorage.setItem('theme', theme)
})








