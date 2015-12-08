var share = require('./share');
var PageA = {
	init: function(){
		share.hello('page A ee');
	}
}
module.exports = PageA;