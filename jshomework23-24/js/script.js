require(
	['jquery-1.12.3','tmpl','model','view','controller'],
	function(){
		$(function(){
			var firstToDoList = ['wash up','eat','read newspaper'];
			var model = new Model(firstToDoList);
			var view = new View(model);
			var controller = new Controller(model, view);
	});	
});