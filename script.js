// console.log('hellow')
// API Practice in Javascript DOM 
var root = document.querySelector('#root');
var button = document.querySelector('#button');
function createItem(item) {
    //Card Create
    var card = document.createElement('div');
    card.classList.add('card');
    //photos create
    var photo = document.createElement('img');
    photo.src = item.thumbnailUrl;
    photo.style.marginLeft = "10px";
    //title create
    var title = document.createElement('h4');
    title.innerHTML = item.title;
    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);
}
function displayImages(items) {
    items.forEach(function (item) {
        createItem(item);
    });
    console.log(items);
}
button.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(function (res) { return res.json(); })
        .then(function (items) {
        displayImages(items);
    });
});
