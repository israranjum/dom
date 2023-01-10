// console.log('hellow')


// API Practice in Javascript DOM 

const root  = document.querySelector('#root') as HTMLElement;
const button  = document.querySelector('#button') as HTMLElement;


function createItem(item:any){
    //Card Create
    const card = document.createElement('div');
    card.classList.add('card');


    //photos create
    const photo = document.createElement('img');
    photo.src = item.thumbnailUrl
    photo.style.marginLeft = "10px"
    //title create
    const title = document.createElement('h4');
    title.innerHTML = item.title;
    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);
}

function displayImages(items:any){
     items.forEach(function(item:any) {
        createItem(item)
    });
    console.log(items)
}


button.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then((res) => res.json())
    .then((items)=>{
        displayImages(items);
    })
    }) 















