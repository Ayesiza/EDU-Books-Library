const form = document.getElementById('addForm');
const itemList = document.getElementById('books');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);


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


