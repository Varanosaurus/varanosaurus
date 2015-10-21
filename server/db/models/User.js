//USER

var Sequelize = require('sequelize');
var Bluebird = require('bluebird');
var bcrypt = Bluebird.promisifyAll(require('bcrypt-nodejs'));

var hashPassword = function(user) {
	return bcrypt.hashAsync(user.password, 8, null)
		.then(function(hash) {
			user.password = hash;
		});
};

var comparePassword = function(password) {
	return bcrypt.compareAsync(password, this.password);
};

module.exports = {

	attributes: {

		accountName: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				// Must be between 4-12 chars long
				len: [4, 20],
				// Must be letters or numbers; case-insensitive for letters
				isAlphanumeric: true,
			},
		},

		password: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				// Must be min 6, max 28 chars
				len: [6, 28],
				// Must be letters, numbers, spaces, or exclamation/question marks
				is: ['^[a-z \\d!?]+$', 'i'],

			},
		},

		displayName: {
			type: Sequelize.STRING,
			defaultValue: null,
			validate: {
				isAlphanumeric: true,
			},
		},

		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

	},

	options: {

		hooks: {
			beforeCreate: hashPassword,
			beforeUpdate: hashPassword,
		},

		instanceMethods: {
			comparePassword: comparePassword,
		},

	},

};
