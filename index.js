const {
  exceptions
} = require("./constants")
const ErrorMessage = "Provided number is not supported"
module.exports = {
  convertToRoman: (n) => {
    if (n >= 4000) {
      return ErrorMessage
    }
    let results = ""
    exceptions.forEach((element) => {
      for (; n >= element.value; n -= element.value) {
        results += element.numeral
      }
    })
    return results
  }
}