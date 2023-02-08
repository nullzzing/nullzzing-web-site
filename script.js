// let inputBox = document.getElementById('inputField'); // 할 일 입력창 
// let addToDo = document.getElementById('addToDo'); // 버튼
// let toDoList = document.getElementById('toDoList');// 할일 리스트 창

// addToDo.addEventListener('click', function(){ // 버튼 클릭 이벤트 함수
//     let list = document.createElement('li');
//     if (!inputBox.value){
//         alert('내용입력하세요!');
//     }else{
//         list.innerText = inputBox.value; // <li>입력된 할일가져오기</li>
//         toDoList.appendChild(list);//할일 리스트창에 자식으로 붙이기 
//         inputBox.value= ''// 할일 
//     }

//     list.addEventListener('click', function(){ //만들어진 리스트 클릭 시 줄긋기 
//         list.style.textDecoration = "line-through";
//         list.style.color = "pink";
//     })
//     list.addEventListener('dblclick', function(){
//         toDoList.removeChild(list); //list에 더블클릭 이벤트가 발생하면 할일 리스트 지우기 
//     })
// })

let inputBox = document.getElementById('inputField');
let addToDo = document.getElementById('addToDo');
let toDoList = document.getElementById('toDoList');

addToDo.addEventListener('click', function(){
    let list = document.createElement('li');
    
    if(!inputBox.value){
        alert('내용입력해야죠!');
    }else{
        list.innerText = inputBox.value;
        toDoList.appendChild(list);
        inputBox.value = '';
    }
    remove(list);
    complete(list);

    let html = toDoList.innerHTML;
        localStorage.setItem('list', html);
})

//이니셜라이즈 는 초기화해줘라는 뜻인데, 사용할 준비를 시킨다란 의미로 쓰인다. 
//어떤 객체를 준비시킨다 라는 의미이다. 

function initialize(){
    //1. 한번클릭했을때 일어나는일들 , 쿼리셀렉터 올 컴플리트 실행되게  
    //2. 두번클릭했을때 일어나는 일들 : 삭제되게 ? 
    toDoList.innerHTML = localStorage.getItem('list');
    let toDoElments = toDoList.querySelectorAll('li');
    toDoElments.forEach(each=>{
        complete(each);
        remove(each);
    })
    // ⭐️ 스토리지에서도 삭제 될 수 있게 하는게 숙제 
}

function complete(elem){
    elem.addEventListener('click', function(){
        elem.className = 'complete';
        //투두리스트에 잇는 태그를 문자열로 가져와서 로컬스토리지에
       //리스트라는 키값으로 셋아이템을 해줍니다. 
    })
}

function remove(elem){
    elem.addEventListener('dblclick', function(){
        toDoList.removeChild(elem);
        localStorage.setItem('list', toDoList.innerHTML); //같이 지운다가 아니라, 이너 HTML의 값을 덮어씌운 것임. 
        // localStorage.removeItem('list');
    })   
}


