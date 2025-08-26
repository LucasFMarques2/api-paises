const { Router } = require('express')
const paisRoutes = require('./paisRoutes')

const router = Router()

router.use('/paises', paisRoutes)

module.exports = router
