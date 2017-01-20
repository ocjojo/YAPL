(function(){

	function yapl(){
		var _ = this;

		_.promise = new Promise(function(resolve, reject){
			_.resolve = resolve;
			_.reject = reject;
		});

		return _;
	}

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
		module.exports = yapl;
	else
		window.yapl = yapl;
})();