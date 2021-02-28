var textBox= document.getElementById('inputToDoItem');
var ul = document.getElementById('toDoListUl');//var ul = document.querySelector('ul');//alternative way

createEventListenersForDeleteBtns();//needed only if there are already items on the list since the page loaded. basically, if you already added items in index.html
createEventListenersForCheckBoxes();

function appendNewListItem()
{
    if(textBox.value.length > 0)
    {
        /*<li class="toDoListItem"></li> */
        var newLi = document.createElement('li');
        newLi.className = 'toDoListItem';

        /*<button class="deleteThisItem">x</button>*/
        var newDeleteBtn = document.createElement('button');
        newDeleteBtn.innerHTML = 'x';
        newDeleteBtn.className = 'deleteThisItem';

        /*<input type="checkbox" class="itemCheckBox">*/
        var newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox';
        newCheckBox.className = 'itemCheckBox';

        newLi.appendChild(newDeleteBtn);
        newLi.appendChild(newCheckBox);
        newLi.appendChild(document.createTextNode(textBox.value));

        ul.appendChild(newLi);
        textBox.value = '';

        createEventListenersForDeleteBtns();
        createEventListenersForCheckBoxes();

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

function createEventListenersForDeleteBtns()
{
    var deleteButtons = document.getElementsByClassName('deleteThisItem');
    var iDel = deleteButtons.length;

    while(iDel > 0)
    {
        iDel--;
        //console.log(iDel);
        //console.log(deleteButtons[iDel]);

        deleteButtons[iDel].removeEventListener('click', deleteThisItemFunc);//prevent event listener duplicates
        deleteButtons[iDel].addEventListener('click', deleteThisItemFunc);
    }
}

function createEventListenersForCheckBoxes()
{
    var checkBoxes = document.getElementsByClassName('itemCheckBox');
    var iDone = checkBoxes.length;

    while(iDone > 0)
    {
        iDone--;
        //console.log(iDone);
        //console.log(checkBoxes[iDone]);
        checkBoxes[iDone].addEventListener('change',markItemDone);
    }
}

function deleteThisItemFunc(event)
{
    event.target.parentElement.remove();
}

function markItemDone(event)
{
   //console.log('markItemDone is triggered');
    event.target.parentElement.classList.toggle('done');
   
    /*
    if (this.checked) {
        console.log("Checkbox is checked..");
      } else {
        console.log("Checkbox is not checked..");
      }
    */

}



textBox.addEventListener('keypress',addToListAfterKeyPress);
document.getElementById('enterItemBtn').addEventListener('click',appendNewListItem);
document.getElementById('removeItemBtn').addEventListener('click', removeLastItem);
document.getElementById('clearList').addEventListener('click', ()=>
{
    ul.innerHTML = '';
});



