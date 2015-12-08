var share = require('./share');
var PageA = {
	init: function(){
		share.hello('page A');
	}
}
module.exports = PageA;