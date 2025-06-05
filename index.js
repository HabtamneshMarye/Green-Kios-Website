document.body.style.backgroundColor = "silver";

const sizechange=document.querySelectorAll('h3');
sizechange.forEach(h3=>{
  h3.style.textTransform='uppercase'
  h3.style.textAlign='center'
  h3.style.marginTop='290px'
  h3.style.fontSize='40px';
})

const image=document.getElementById('green-image');
image.style.width='35%';
image.style.height='600px';
image.style.marginTop='10px';
image.style.marginLeft='300px';
image.style.borderRadius='15px';

const img=document.getElementById('white-image');
img.style.width='35%';
img.style.height='600px';
img.style.marginTop='10px';
img.style.marginLeft='-15px';
image.style.borderRadius='15px';

document.getElementById("title").style.color="green";

const heading=document.getElementById('title');
heading.style.fontSize='55px';
heading.style.fontWeight='bolder';
heading.style.position='relative';
heading.style.marginTop='-420px';
heading.style.marginLeft='99vh';

const paragraph = document.getElementById('sub-description');
  paragraph.style.position = 'relative';
  paragraph.style.fontSize = '30px';
  paragraph.style.marginTop='50px';
  paragraph.style.marginLeft='113vh';


  function addFruit() {
    const listElement = document.getElementById('fruList');
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Mango';
    newListItem
    listElement.appendChild(newListItem);

  }


   function addVegetable() {
    const listElements = document.getElementById('vegList');
    const newListItems = document.createElement('li');
    newListItems.textContent = 'Spinach';
    newListItems
    listElements.appendChild(newListItems);

  }







 