const Result = require("../models/ResultModel")
const apiResponse = require("../helpers/apiResponse");

exports.result = (req, res) => { 
    try {
        var coloumn = req.body['1']+req.body['2']
        var row = req.body['3']+req.body['4']
        console.log(coloumn, row)
        var result = ""
        Result.findOne({
            "col": coloumn,
            "colVal.row": row
          }).then(result => {
              if (result == null) {
                  return apiResponse.successResponseWithData(res, {result})
              }
              return apiResponse.successResponseWithData(res, {result: result.colVal.rowVal})  
          })
    } catch (err) {
        return apiResponse.ErrorResponse(res, err);
    }
}