export const ThemeChange = () => {
  return (
    <script
      dangerouslySetInnerHTML={`
  document.addEventListener('DOMContentLoaded', () => {
    console.log('theme change')
    const theme = localStorage.getItem('theme') ?? 'light'
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(theme)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
    document.querySelector('.theme-toggle > input').checked = theme === 'dark'
  })
  `}
    />
  )
}
