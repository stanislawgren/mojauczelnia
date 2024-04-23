const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Moja Uczelnia API is live on port: ${port}`)
})

let sql = require('./db.js')

sql.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('Database test: ', rows[0].solution)
})