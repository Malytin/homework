var unit = require('../js/main.js');

describe('GCD - Наибольший общий делитель', function(){
	it('Любые натуральные числа',function(){
		var result;
		result = unit.GCD(105,70);
		expect(result).toBe(35);
	});
	it('Два нуля',function(){
		var result;
		result = unit.GCD(0,0);
		expect(result).toBeUndefined();
	});
	it('Если одно из чисел равно нулю',function(){
		var result;
		result = unit.GCD(0,17);
		expect(result).toBeUndefined();
	});
	it('Отрицательные числа',function(){
		var result;
		result = unit.GCD(-105,60);
		expect(result).toBe(15);
	});
	it('Если одно из чисел вещественное',function(){
		var result;
		result = unit.GCD(0.5,12);
		expect(result).toBeUndefined();
	});
	it('Веддено только одно число',function(){
		var result;
		result = unit.GCD(10000);
		expect(result).toBeUndefined();
	});
	it('Введена строка',function(){
		var result;
		result = unit.GCD('wwwww');
		expect(result).toBeUndefined();
	});
	it('Введена строка в виде числа',function(){
		var result;
		result = unit.GCD('10','10');
		expect(result).toBe(10);
	});
	it('Введена пустая строка',function(){
		var result;
		result = unit.GCD('','');
		expect(result).toBeUndefined();
	});
});

describe('factor', function(){
	it('Число',function(){
		var result;
		result = unit.factor(35);
		expect(result).toEqual([5,7]);
	});
	it('Дробное число',function(){
		var result;
		result = unit.factor(1.5);
		expect(result).toBeNull();
	});
	it('Введена строка',function(){
		var result;
		result = unit.factor('wwwww');
		expect(result).toBe(null);
	});
	it('Большое число',function(){
		var result;
		result = unit.factor(100000000000007);
		expect(result).toEqual([43, 1103, 2083, 1012201]);
	});
	it('Число большее чем предыдущее число',function(){
		var result;
		result = unit.factor(100000000000008);
		expect(result).toBeNull;
	});
	it('Если пользователь ввел выражение',function(){
		var result;
		result = unit.factor(20000000*55000015+200077);
		expect(result).toBeUndefined;
	});
});