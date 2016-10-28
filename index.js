module.exports = function(){
	return new yapl();
};

function yapl(){
	var _ = this;
	
	_.promise = new Promise(function(resolve, reject){
		_.resolve = resolve;
		_.reject = reject;
	});

	return _;
}