const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./sidebars.json')).docs

const records = []

Object.values(data).forEach(items => {
  items.forEach(item => {
    if (typeof item === 'string') {
      records.push(item)
    } else {
      records.push(...item.ids)
    }
  })
})

const fmtRecords = records.map(record => {
  const id = record.split('/').pop()
  const content = id.replace(/\-/g, ' ').replace(/\b(\w)/g, w => w.toUpperCase())
  const url = 'https://docs.citahub.com/zh-CN/' + record
  return {
    anchor: id,
    content,
    hierarchy: {
      lvl0: content
    },
    url,
  }
})

fs.writeFileSync('./records.json', JSON.stringify(fmtRecords))
