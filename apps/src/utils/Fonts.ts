import FontFaceObserver from 'fontfaceobserver'

export const loadFonts = (): void => {
  const link = document.createElement('link')
  link.href =
    'https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@500;800&family=Source+Serif+Pro&display=swap'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const libreFranklin = new FontFaceObserver('Libre Franklin')
  const sourceSerifPro = new FontFaceObserver('Source Serif Pro')

  libreFranklin.load().then(() => {
    document.documentElement.classList.add('libre_franklin')
  })
  sourceSerifPro.load().then(() => {
    document.documentElement.classList.add('source_serif_pro')
  })
}
