const chai = require("chai")
const expect = chai.expect
const {
  convertToRoman
} = require("../index")


describe("RomanNumerals", () => {
  it("should convert 1 to I", (done) => {
    expect(convertToRoman(1)).to.eql("I")
    done()
  })
  it("should convert 2 to II", (done) => {
    expect(convertToRoman(2)).to.eql("II")
    done()
  })
  it("should convert 3 to III", (done) => {
    expect(convertToRoman(3)).to.eql("III")
    done()
  })
  it("should convert 4 to IV", (done) => {
    expect(convertToRoman(4)).to.eql("IV")
    done()
  })
  it("should convert 5 to V", (done) => {
    expect(convertToRoman(5)).to.eql("V")
    done()
  })
  it("should convert 10 to X", (done) => {
    expect(convertToRoman(10)).to.eql("X")
    done()
  })
  it("should convert 9 to IX", (done) => {
    expect(convertToRoman(9)).to.eql("IX")
    done()
  })
  it("should convert 14 to XIV", (done) => {
    expect(convertToRoman(14)).to.eql("XIV")
    done()
  })
  it("should convert 49 to XLIX", (done) => {
    expect(convertToRoman(49)).to.eql("XLIX")
    done()
  })
  it("should convert 3999 to MMMCMXCIX", (done) => {
    expect(convertToRoman(3999)).to.eql("MMMCMXCIX")
    done()
  })
  it("should fail to convert 4000", (done) => {
    expect(convertToRoman(4000)).to.eql("Provided number is not supported")
    done()
  })
})
