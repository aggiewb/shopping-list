var ulElement = document.querySelector('ul');

function addListItems(event){
    var form = event.target;
    var items = form.querySelector('#items').value.split(',');

    if(items[0].length > 0){
        document.querySelector('#user-warning').textContent = "";
        for(var i = 0; (i < items.length) && (items[i].length > 0) && (items[i] !== ' '); i++){
            createLiElementAppendToUl(createXImgElement(), items[i]);
        }
    } else {
        document.querySelector('#user-warning').textContent = "Please enter an item.";
    }
    event.preventDefault();
    form.reset();
}

function createXImgElement(){
    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', 'media/x-icon.png');
    imgElement.setAttribute('alt', 'A red x to indicate removal.');
    imgElement.addEventListener('click', removeListItem);
    return imgElement;
}

function createLiElementAppendToUl(imgElement, item){
    var liElement = document.createElement('li');
    liElement.textContent = item;
    liElement.appendChild(imgElement);
    ulElement.appendChild(liElement);
}

function removeListItem(event){
    var imgElement = event.target;
    var liElement = imgElement.parentNode;
    ulElement.removeChild(liElement);
}

function clearList(){
    while(ulElement.hasChildNodes()){
        ulElement.removeChild(ulElement.firstChild);
    }
}

document.querySelector('form').addEventListener('submit', addListItems);
document.querySelector('button').addEventListener('click', clearList);