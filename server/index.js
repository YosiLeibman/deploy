const app = require('express')()

app.use(require('express').static('client'))

app.listen(80, () => console.log('server up'))
