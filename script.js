var textBox= document.getElementById('inputToDoItem');
var ul = document.getElementById('toDoListUl');//var ul = document.querySelector('ul');//alternative way

function appendNewListItem()
{
    if(textBox.value.length > 0)
    {
        var newLi = document.createElement('li');
        newLi.className = 'toDoListItem';
        newLi.appendChild(document.createTextNode(textBox.value));
        ul.appendChild(newLi);
        textBox.value = '';
    }
}

function removeLastItem()
{
    var listItemsArray = document.getElementsByClassName('toDoListItem');
     listItemsArray[listItemsArray.length-1].remove();
}

function addToListAfterKeyPress(event)
{
    console.log(event);

    if(event.keyCode === 13)
    {
        appendNewListItem();
    }
}


textBox.addEventListener('keypress',addToListAfterKeyPress);
document.getElementById('enterItemBtn').addEventListener('click',appendNewListItem);
document.getElementById('removeItemBtn').addEventListener('click', removeLastItem);
document.getElementById('clearList').addEventListener('click', ()=>
{
    ul.innerHTML = '';
});



