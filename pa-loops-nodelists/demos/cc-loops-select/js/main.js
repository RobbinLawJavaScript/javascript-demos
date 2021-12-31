document.querySelector('.items').addEventListener('change', function (evt) {
    let numOfItems = evt.target.value;
    //let numOfItems = Number(evt.target.value);
    let count;
    let list = '<ul>';

    list += '<li>' + 'for loop' + '</li>';
    for (count = 0; count < numOfItems; count++) {
        list += '<li><input type="checkbox">' + 
            '<label contenteditable>Item ' + (count + 1) + '</label>' +
            '</li>';
    }

    list += '<li>' + 'while loop' + '</li>';
    count = 0;
    while(count < numOfItems) {
        list += '<li><input type="checkbox">' + 
            '<label contenteditable>Item ' + (count + 1) + '</label>' +
            '</li>';
        count++;
    }

    list += '</ul>';

    document.querySelector('.todo-list').innerHTML = list;
});