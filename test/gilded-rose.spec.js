const { updateQuantity } = require('../src/gilded_rose');

require('./utilities/approvals').configure();

describe("Gilded Rose", function () {

  it("should do something", function () {
    const items = updateQuantity();

    this.verifyAsJSON(items);
  });

});
