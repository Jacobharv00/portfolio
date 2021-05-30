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
    let theme = 'dark-theme' || 'light-theme'
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle('light-theme')
        theme = document.body.classList.contains('light-theme')
        ? 'light'
        : 'dark'
    } else {
        document.body.classList.toggle('dark-theme')
        theme = document.body.classList.contains('dark-theme')
        ? 'dark'
        : 'light'
}
        localStorage.setItem('theme', theme)
})

// Tiltable 3D Element
const box = document.querySelector('.box')
const boxRect = box.getBoundingClientRect()

box.addEventListener('mousemove', (e) => {
    const xPosition = (e.clientX - boxRect.left) / boxRect.width
    const yPosition = (e.clientY - boxRect.top) / boxRect.height - 0.6
    const xOffSet = -(xPosition - 0.6)
    const dxNorm = Math.min(Math.max(xOffSet, -0.6), 0.6)
    box.style.transform = `perspective(1000px)
                            rotateY(${dxNorm * 45}deg)
                            rotateX(${yPosition * 45}deg)`
})   

box.addEventListener('mouseleave', () => {
    box.style.transform = 'none'
})





