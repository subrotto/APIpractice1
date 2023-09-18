

function addtodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => addtodo(json));
}

function addtodo(json){
    const section=document.getElementById('sec');

    for(const user of json){
        const div=document.createElement('div');
        div.innerHTML=`
        <h1>name:${user.title}</h1>
        `;
        div.classList.add('design');
        section.appendChild(div);
    }
}


function addpost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>console.log(data));
}
const addusers=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>update(data));
};
const update=(data)=>{
    const ul=document.getElementById('list');
    
    for(const user of data){
        const li=document.createElement('li');
        li.innerText=user.name;
        ul.appendChild(li);
    }
}

function getphotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response=>response.json())
    .then(datas=>showphotos(datas));
}

// getphotos();

const showphotos=(datas)=>{
    const section=document.getElementById('sec');
    for(const data of datas){
        const img=document.createElement('img');
        img.setAttribute('src',data.url);
        section.appendChild(img);
    }
}
