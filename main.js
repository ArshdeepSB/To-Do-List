let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter')

// Form submit event 
form.addEventListener('submit', addItem);

//Delete Event 
itemList.addEventListener('click', removeItem)

//Filter event 
filter.addEventListener('keyup', filterItems)
//Add item 
function addItem(e){
    e.preventDefault();
    //console.log(1);

    // get input value 
let newItem = document.getElementById('item').value; 

// create new li element 
let li = document.createElement('li'); 
// add class 
li.className = 'list-group-item'; 
// add textnode with input value 
let text = document.createTextNode(newItem);
li.appendChild(text);

//Create a delete butotn element 
let deleteBtn = document.createElement('button')

// add classes to deleteBtn 

deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// append textnode
deleteBtn.appendChild(document.createTextNode('X'))

// Append button to li
li.appendChild(deleteBtn)

//append li to list
itemList.appendChild(li);
}

// Remove Item 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
         let li = e.target.parentElement;
         itemList.removeChild(li);
        }
    }
}

//filter Items 
function filterItems(e){
    //convert text to lower case 
    let text = e.target.value.toLowerCase();
    // Get list
    let items = itemList.getElementsByTagName('li');
    // Convert HTML collection into array 
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });

}