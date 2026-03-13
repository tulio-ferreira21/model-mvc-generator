#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const name = process.argv[2]

if (!name) {
    console.log('Informe um nome: model-mvc nome')
    process.exit()
}

const folders = ['controllers', 'services', 'models', 'routes']

folders.forEach(folder => {

    const dir = path.join('src', name, folder)
    const suffix =
        folder.charAt(0).toUpperCase() + folder.slice(1, -1)

    const fileName = `${name}${suffix}.js`

    const filePath = path.join(dir, fileName)

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '')
        console.log(`Criado: ${filePath}`)
    }

})