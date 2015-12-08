webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	

	var PageA = __webpack_require__(1);

	PageA.init();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var share = __webpack_require__(2);
	var PageA = {
		init: function () {
			share.hello('page A oo');
		}
	};
	module.exports = PageA;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		hello(msg) {
			console.log('hello ' + msg);
		}
	};

/***/ }
]);