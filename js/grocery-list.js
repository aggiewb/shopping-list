function addListItems(event){
    event.preventDefault();
    var form = event.target;
    var items = form.querySelector('#items').value.split(',');
    var ulElement = document.querySelector('ul');

    var imgElement = createXImgElement();
    
    for(var i = 0; i < items.length; i++){
        var liElement = document.createElement('li');
        liElement.textContent = items[i];
        liElement.appendChild(imgElement);
        ulElement.appendChild(liElement);
    }
}

function createXImgElement(){
    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', 'media/x-icon.png');
    imgElement.setAttribute('alt', 'A red x to indicate removal.');
    return imgElement;
}

document.querySelector('form').addEventListener('submit', addListItems);