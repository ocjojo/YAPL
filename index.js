(function(){

	function yapl(){
		var _ = {};

		_.promise = new Promise(function(resolve, reject){
			_.resolve = resolve;
			_.reject = reject;
		});

		return _;
	}

	function getPromise(){
		return new yapl();
	}

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
		module.exports = getPromise;
	else
		window.yapl = getPromise;
	
})();