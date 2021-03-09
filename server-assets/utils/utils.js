function generateOrderNr() {
    let letters = ['X', 'Y', 'Z'];
    return `AB${Date.now()}${letters[Math.floor(Math.random() * letters.length)]}`;
}

module.exports = { generateOrderNr }