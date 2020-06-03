var express = require("express")
const resultController = require("../controllers/resultController")

var router = express.Router()

router.post("/", resultController.result)

module.exports = router