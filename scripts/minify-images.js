const path = require('path')
const imagemin = require('imagemin')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant')

const root = path.resolve(__dirname, '..') 

const manifest = [
  {
    match: `${root}/apps/ui-shell/assets/logos/*.{jpg,png}`,
    destination: `${root}/apps/ui-shell/assets/logos/minified`,
  }
]

Promise.all(
  manifest.map(entry => (
    imagemin([entry.match], {
      destination: entry.destination,
      plugins: [
        imageminJpegtran(),
        imageminPngquant({
          quality: [0.25, 0.5, 0.75, 1.0]
        })
      ]
    })
  ))
)