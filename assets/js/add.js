const form = document.getElementById('addForm');
const itemList = document.getElementById('books');
const filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
  e.preventDefault();

  const newItem = document.getElementById('item').value;
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-button btn-sm float-right delete';
   deleteBtn.appendChild(document.createTextNode('Delete'));
   
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
};

function removeItem(event){
  if(event.target.classList.contains('delete')){
    if(confirm('Are You Sure to Delete?')){
      const li = event.target.parentElement;
      itemList.removeChild(li);
    }
  }
};

// search books
function filterItems(e){
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};

