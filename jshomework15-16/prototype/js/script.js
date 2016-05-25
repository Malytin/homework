$(function(){
	function Human() {
		this.name = 'Olexsandr',
		this.age = 26,
		this.sex = 'M',
		this.growth = 185,
		this.weigt = 89
	};
	
	Human.prototype.work = function Worker() {
		this.job = 'ANTEY',
		this.money = 2000
	};
	
	Human.prototype.watchTV =  function Student() {
		this.study = 'XNADU',
		this.award = 800
	}
	
	var newWorker = new Human();
	newWorker.work();
	console.log('newWorker.work()',newWorker);
	
	var newStudent = new Human();
	newStudent.watchTV();
	console.log('newStudent.watchTV()',newStudent);
	
	var oldWorker = new Human();
	console.log('oldWorker.age', oldWorker.age);
	
	var oldStudent = new Human();
	console.log('oldStudent.name', oldStudent.name);
});