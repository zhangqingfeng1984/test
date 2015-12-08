var share = require('./share');
var PageA = {
	init: function(){
		share.hello('page A 3');
	}
}
module.exports = PageA;