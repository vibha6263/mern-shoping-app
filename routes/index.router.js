const express=require("express")
const router = express.Router();
const controller = require("../controllers/product.controller")
router.post('/',controller.addProduct)
module.exports =router;