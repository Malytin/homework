$(function(){
	$('.search').submit(function(){
		
		var APIurl = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='
						+ encodeURIComponent($('#settings').val()) + '&callback=GoogleCallback&context=?';

		$.ajax ({
			url: APIurl,
			dataType: 'jsonp',
			success: function(data){
				var ul = document.createElement("ul");
				$.each(data.results, function(i, val){
					var li = document.createElement("li");
					li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a><p class='url'>"
									+val.url+"</p><p class='content'>"+val.content+"</p>";                          
					ul.appendChild(li);
				});
				$('.search__result').html(ul);
			}
		});
	});
});

function GoogleCallback (func, data) {
    window[func](data);
}