//helper for connection
const Database = require('../../models/index')
const database = (base) => {
    return Database[base]
}
module.exports = database