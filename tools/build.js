const Handlebars = require('handlebars')
const fs = require('fs')
const body = require('../dist/components/static.js').default

fs.readFile('./src/templates/index.hbs', 'utf8', (err, words) => {
  if (err) throw err
  const html = Handlebars.compile(words)({ body })
  fs.writeFile('./dist/index.html', html, (werr) => {
    if (werr) throw werr
    console.log('Saved!')
  })
})
