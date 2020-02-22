const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/customer', (req, res) => res.send({
    customerName: 'Arindam'
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))