(function() {
    'use strict';
    var shoppingList = document.querySelector('ul');

    function addListItems(event){
        var form = event.target;
        var items = form.querySelector('#items').value.split(',');

        if(items[0].length > 0){
            document.querySelector('#user-warning').textContent = "";
            for(var i = 0; (i < items.length) && (items[i].length > 0) && (items[i] !== ' '); i++){
                appendItemToList(createXImgElement(), items[i]);
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

    function appendItemToList(imgElement, item){
        var liElement = document.createElement('li');
        liElement.textContent = item;
        liElement.appendChild(imgElement);
        shoppingList.appendChild(liElement);
    }

    function removeListItem(event){
        var imgElement = event.target;
        var liElement = imgElement.parentNode;
        shoppingList.removeChild(liElement);
    }

    function clearList(){
        while(shoppingList.hasChildNodes()){
            shoppingList.removeChild(shoppingList.firstChild);
        }
    }

    document.querySelector('form').addEventListener('submit', addListItems);
    document.querySelector('button').addEventListener('click', clearList);

    var date = new Date();
    document.querySelector('footer').innerHTML = "Aggie Wheeler Bateman &copy; " +  date.getFullYear() + " <a href=\"https://www.aggiewheelerbateman.com\" target=\"_blank\">Personal Portfolio</a>";
})();