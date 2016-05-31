function Controller(model, view){
	var self = this;
	
	view.elements.addBtn.on('click', addItem);
	view.elements.listContainer.on('click','.item-delete', removeItem);
	view.elements.listContainer.on('click','.list-item', updateItem);
	view.elements.addRemove.on('click', removeAllItem);
	
	function addItem(){
		var newItem = view.elements.input.val();
		
		model.addItem(newItem);
		view.renderList(model.data);
		view.elements.input.val('');
	}
	
	function removeItem(){
		var item = $(this).attr('data-value');
		
		model.removeItem(item);
		view.renderList(model.data);
	}
	
	function updateItem(){
		var item = $(this).attr('data-search');
		var index = $('.list-item').index(this);
		var updateItem = $('.list-item').eq(index);
		var updateItemInput = $('.list-item-update').eq(index);
		var newItem = updateItem.html();

		updateItemInput.val(updateItem.html());
		updateItem.hide();
		updateItemInput.show();
		updateItemInput.select();

		updateItemInput.focusout(function(){
		   updateItemInput.hide();
		   updateItem.html(updateItemInput.val());
		   updateItem.show();
		   newItem = updateItem.html();
		   model.updateItem(item, newItem);
		   view.renderList(model.data);
		});
	}
	
	function removeAllItem(){
		var item = $(this).attr('data-value');
		
		model.removeAllItem(item);
		view.renderList(model.data);
	}
}