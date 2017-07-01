const expect = require('chai').expect
const metreTo = require('..').metreTo

describe('#metreTo', function () {
  it('Metre to centimetre', function () {
    const converter = metreTo("centimetre", 1.35)
    expect(converter).to.equal(135)
  })
})
