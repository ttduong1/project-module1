let dataListTodo = JSON.parse(localStorage.getItem("listDataTodo"));
function renderListTodo(listData) {
  let data = "";
  for (let i = 0; i < listData.length; i++) {
    data += ` <tr>
        <td>${i + 1}</td>
        <td>${listData[i]}</td>
        <td>2</td>
        <td><button id="edit">EDIT</button></td>
        <td><button id="delete">DELETE</button></td>
        <td><button id="finished">FINISHED</button></td>
      </tr>`;
  }
  document.getElementById("tbody").innerHTML = data;
}
renderListTodo(dataListTodo);
function addTodo() {
  let valueInput = document.getElementById("valueInput").value;
  let dataAdd = JSON.parse(localStorage.getItem("listDataTodo"));
  console.log("111", dataAdd);
  if (dataAdd == null) {
    dataAdd = [];
    dataAdd.push(valueInput);
    localStorage.setItem("listDataTodo", JSON.stringify(dataAdd));
    renderListTodo(dataAdd);
  } else {
    dataAdd.push(valueInput);
    localStorage.setItem("listDataTodo", JSON.stringify(dataAdd));
    renderListTodo(dataAdd);
  }
}
function deleteItem(id) {
    console.log("id",id);
    let dataDelete = JSON.parse(localStorage.getItem("listDataTodo"));
    dataDelete.splice(id, 1);
    localStorage.setItem("listDataTodo", JSON.stringify(dataDelete));
    renderListTodo(dataDelete);
}