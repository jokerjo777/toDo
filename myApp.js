
const storeValue = localStorage.getItem('value') || '';
const input = '';

document.getElementById('addInput').onclick = function() {
    let todo = document.getElementById('usrInput').value;

    // todo = storeValue;
    const listItem = document.createElement('li');

    listItem.innerText = todo;

    document.getElementById('toDoList').appendChild(listItem);

    localStorage.setItem('value', storeValue);

}