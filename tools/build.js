const Handlebars = require('handlebars')
const childProcess = require('child_process')
const path = require('path')
const fs = require('fs')

const body = childProcess.execSync(`node ${path.resolve(__dirname, '../dist/homepage-bundle')}`)

fs.readFile('./src/templates/index.hbs', 'utf8', (err, words) => {
  if (err) throw err
  const html = Handlebars.compile(words)({ body })
  fs.writeFile('./dist/index.html', html, (werr) => {
    if (werr) throw werr
    console.log('Saved!')
  })
})
