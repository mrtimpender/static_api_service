// VARIABLES
var table = document.getElementById('userTable');

// API CALLS
httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === 4) {
       if(httpRequest.status < 400) {
        populateDOM(JSON.parse(httpRequest.responseText));
        }
    }

};
httpRequest.open('GET', 'http://localhost:3000/users');
httpRequest.send();

// FUNCTIONS
function populateDOM(array){
  for (var i=0; i<array.length; i++){
    var row = table.insertRow(i+1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);

    cell0.innerHTML = "<a href='#'>" + array[i].user_data.first_name + "</a>"
    cell1.innerHTML = "<a href='#'>" + array[i].user_data.last_name + "</a>"
    cell2.innerHTML = "<a href='#'>" + array[i].user_data.id + "</a>"
    cell3.innerHTML = "<a href='#'>" + array[i].user_data.active + "</a>"
    cell4.innerHTML = "<a href='#'>" + array[i].user_data.y_code + "</a>"
  }
};
