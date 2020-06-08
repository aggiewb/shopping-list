function addListItems(event){
    var form = event.target;
    var items = form.querySelector('#items').value.split(',');
    var ulElement = document.querySelector('ul');

    if(items[0].length > 0){
        document.querySelector('#user-warning').textContent = "";
        for(var i = 0; i < items.length; i++){
            var imgElement = createXImgElement();
            var liElement = document.createElement('li');
            liElement.textContent = items[i];
            liElement.appendChild(imgElement);
            ulElement.appendChild(liElement);
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

function removeListItem(event){
    var imgElement = event.target;
    var liElement = imgElement.parentNode;
    var ulElement = liElement.parentNode;
    ulElement.removeChild(liElement);
}

document.querySelector('form').addEventListener('submit', addListItems);