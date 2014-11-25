var userListData = [];

$(document).ready(function(){
	populateTable();
});

function populateTable(){
	var tableContent = '';

	$.getJSON('/users/userlist', function(data){
		userListData = data;
		$.each(data, function(){
			tableContent += '<tr>';
			tableContent += '<td>'+this.username+'</td>';
			tableContent += '<td>'+this.email+'</td>';
			tableContent += '<td>'+this._id+'</td>';
			tableContent += '</tr>';
		});
		$('#userList table tbody').html(tableContent);
	});


};