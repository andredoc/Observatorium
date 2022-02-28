const router = require("express").Router()

router.use("/items", require("./items.routes"))
router.use("/auth", require("./auth.routes"))

module.exports = router