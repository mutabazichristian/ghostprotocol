const { Sequelize } = require('sequelize');
const { password } = require('./tokens')

const sequelize = new Sequelize('ghostprotocol', 'mutabazi', password, {
    host: 'localhost',
    dialect: 'mysq'
})

export default Sequelize;