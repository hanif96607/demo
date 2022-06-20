const input = document.getElementById('input');
const add = document.getElementById('add');
const ul = document.querySelector('ul');
const list = document.getElementById('list');

add.addEventListener('click' , () => {
  const li =document.createElement('li');
  li.textContent = input.value;
  list.appendChild(li);

  const deletebtn = document.createElement('button');
  deletebtn.textContent = 'delete';
  deletebtn.classList.add('deletebtn');
  li.appendChild(deletebtn);

  deletebtn.addEventListener('click' , () => {
    const deletelist = deletebtn.parentElement;
    deletelist.remove();
  })
} );

