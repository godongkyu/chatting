'use strict'
let inputTxt = '';

function inputChat(event) { // 키보드 타이핑 및 엔터 버튼 실행
  //console.log(window.event.keyCode);
  if( window.event.keyCode == 13 ){ // 엔터키를 사용했을때
    if( event.value != '' ){ // 입력창이 비어있지 않을때 실행
      chattingFunc(event, 0);
      clearText(inputTxt,event, 0);
    }
  }
}


function sendTxt(e) { // 보내기 버튼 실행
  if(e.previousElementSibling.value != '' ) { //입력창이 비어있지 않을때 실행
    chattingFunc(e,1);
    clearText(inputTxt,e,1);
  }

}

 function clearText(t,e,i){ // t : htmlTxt, event
   t = '';
   if( i == 1 ){
     e.previousElementSibling.value = '';
   }else{
     e.value = '';
   }
}


function chattingFunc(e,i) {
  if( i == 1 ){ // 보내기 버튼으로 입력
    inputTxt = e.previousElementSibling.value;
  }else{ // 엔터키로 입력
    inputTxt = e.value;
  }

  let thisClassName = e.getAttribute('class');
  let elem = document.querySelectorAll('.chat-box');
  let elemLeng = elem.length;
  let txt = []; // 채팅창에서 입력값 받기
  let htmlTxt = []; // 채팅창 내용 담을 변수
  console.log(thisClassName);

for( let i = 0; i < elemLeng; i++ ){
   htmlTxt[i] = elem[i].innerHTML //기존 채팅 목록을 가져옴
}

// htmlTxt[0] : user-a 채팅창 목록
// htmlTxt[1] : user-b 채팅창 목록
// htmlTxt[2] : user-c 채팅창 목록

  if( thisClassName == 'user-a'){
    txt.push(`<div class="line char-a right"><div class="txt">${inputTxt}</div></div>`); // user-a 채팅창 목록
    txt.push( `<div class="line char-a"><div class="txt">${inputTxt}</div></div>`); // user-b 채팅창 목록
    txt.push( `<div class="line char-a"><div class="txt">${inputTxt}</div></div>`); // user-c 채팅창 목록
  }else if( thisClassName == 'user-b') {
    txt.push( `<div class="line char-b "><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-b right "><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-b"><div class="txt">${inputTxt}</div></div>`);
  }else{
    txt.push( `<div class="line char-c "><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-c"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-c right "><div class="txt">${inputTxt}</div></div>`);
  }
  for( let i = 0; i < elemLeng; i++ ){
    htmlTxt[i] += txt[i]; // 기존 채팅창 내용과 입력된 채팅창 내용을 더함
    elem[i].innerHTML = htmlTxt[i]; // 입력된 값을 포함하여 대화창으로 다시 입력
    elem[i].scrollTop = elem[i].scrollHeight - elem[i].offsetHeight; // 스크롤이 생겨서 최신 대화내용이 스크롤 영역으로 들어가서 안보일 경우

  }
}
