test("Valid arguments", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-1");
  assert.propEqual(convertRomanToInteger("MCMXCVII"), {value: 1997, message: '', result: true}, "TC-2");
  assert.propEqual(convertIntegerToRoman("100"), {value: "C", message: '', result: true}, "TC-3");
  assert.propEqual(convertIntegerToRoman("3999"), {value: "MMMCMXCIX", message: '', result: true}, "TC-4");
});

test("Negative number", function (assert) {
  assert.propEqual(convertIntegerToRoman("-189"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-5");
});

test("Not exist roman number", function (assert) {
 assert.propEqual(convertRomanToInteger("XDPI"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-6");
 assert.propEqual(convertRomanToInteger("VIIII"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-7");
});

test("Out of range", function (assert) {
 assert.propEqual(convertIntegerToRoman("4000"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-8");
});

test("Invalid symbols", function (assert) {
 assert.propEqual(convertIntegerToRoman("1.23"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-9");
 assert.propEqual(convertIntegerToRoman("V"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-10");
 assert.propEqual(convertRomanToInteger("123"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-11");
 assert.propEqual(convertIntegerToRoman("0"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-12");
});
test("Empty", function (assert) {
 assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-13");
});
