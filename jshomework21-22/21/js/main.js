var unit = {
	GCD: function (a,b){
		if (a < 0) a = -a;
		if (b < 0) b = -b;
		if (a === '' || b === '') {
			console.log('undefined');
		} else if (a === 0 && b === 0) {
				console.log('undefined');
			} else if (a === 0 || b === 0) {
				console.log('undefined');
			} else if (a % 1 == 0 && b % 1 == 0){
				a = Math.abs(a);
				b = Math.abs(b);
				while(a&&b)a>=b?a%=b:b%=a;
				return a||b;
			}
	},
	factor: function factor(a) {
			var array = [];
			if (a > 100000000000007) {
				return null;
			} else if (a%1 != 0 || a<=1){
				return null;
			} else if (isNaN(a)){
				return NaN;
			} else {
				for (var i = 2; i < a+1;i++) {
					if (a%i === 0){
						array.push(i);
						a=a/i;
						i--;
					}else if(a/i === 0){
						return undefined;
					}
				};
			return(array);
			}
		}
}

module.exports = unit;