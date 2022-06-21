function assertEquals(expect, actual) {
    if (expect == actual) return "Success";

    if (typeof expect !== typeof actual) {
        throw "Expected '" + typeof(expect) + "' but found '" + typeof(actual) + "'"
    }

    if (Array.isArray(expect) && Array.isArray(actual) && expect.length !== actual.length) {
        throw "Expected array length " + expect.length + " but found " + actual.length
    }

    if (Array.isArray(expect) && Array.isArray(actual) && expect.length === actual.length 
    && expect.every((value, index) => value === actual[index])) {
        return "Success"
    }

    if (Array.isArray(expect) && Array.isArray(actual) && expect.length === actual.length && expect.filter((value, index) => value !== actual[index])) {
        const compareArr = expect.filter((value, index) => value !== actual[index])
        const actualVal = actual.filter((value, index) => value !== expect[index])
        throw "Expected '" + compareArr + "' but found '" + actualVal + "'"
    }

    else throw "Expected '" + expect + "' but found '" + actual + "'"; 
}

module.exports = assertEquals