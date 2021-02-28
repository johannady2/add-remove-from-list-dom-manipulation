var textBox= document.getElementById('inputToDoItem');
var ul = document.getElementById('toDoListUl');//var ul = document.querySelector('ul');//alternative way

createDeleteButtonsAndEventListeners();//needed only if there are already items on the list since the page loaded. basically, if you already added items in index.html

function appendNewListItem()
{
    if(textBox.value.length > 0)
    {
        var newLi = document.createElement('li');
        newLi.className = 'toDoListItem';

        var newDeleteBtn = document.createElement('button');
        newDeleteBtn.innerHTML = 'x';
        newDeleteBtn.className = 'deleteThisItem';
        newLi.appendChild(newDeleteBtn);
        newLi.appendChild(document.createTextNode(textBox.value));
        ul.appendChild(newLi);
        textBox.value = '';

        createDeleteButtonsAndEventListeners();


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

    if(event.key === 'Enter' || event.keyCode === 13 )//keyCode and which are already depricated. 13 = Enter key
    {
        
        appendNewListItem();
    }
}

function createDeleteButtonsAndEventListeners()
{
    var deleteButtons = document.getElementsByClassName('deleteThisItem');
    var iDel = deleteButtons.length;

    while(iDel > 0)
    {
        iDel--;
        console.log(iDel);
        console.log(deleteButtons[iDel]);

        deleteButtons[iDel].removeEventListener('click', deleteThisItemFunc);//prevent event listener duplicates
        deleteButtons[iDel].addEventListener('click', deleteThisItemFunc);
    }
}

function deleteThisItemFunc(event)
{
    event.target.parentElement.remove();
}



textBox.addEventListener('keypress',addToListAfterKeyPress);
document.getElementById('enterItemBtn').addEventListener('click',appendNewListItem);
document.getElementById('removeItemBtn').addEventListener('click', removeLastItem);

document.getElementById('clearList').addEventListener('click', ()=>
{
    ul.innerHTML = '';
});

