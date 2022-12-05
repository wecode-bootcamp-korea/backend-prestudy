/*
[코드 작성 안내]

학습 페이지에 있는 pseudo-code를 읽고 각 코드에 따른 빈칸을 채워넣어 주세요!
Step1 실습을 마친 후 서버를 실행했을 때 정상적으로 서버가 실행된다면 httpRequestListener 함수 내부의 주석을 해제하여 Step2를 진행해주세요.

코드를 작성할 때 {번호 이름} 중괄호까지 모두 지운 후 코드를 작성해야 합니다.
문자열이 위치하는 경우 " " 따옴표는 지우지 않도록 주의해주세요!

이 외 다른 코드를 지우면 정상적으로 실행이 되지 않을 수 있습니다.
특정 코드가 수정되어 실습이 정상적으로 진행되지 않는 경우 학습 자료의 템플릿 코드를 복사하여 사용하시기 바랍니다.
*/

const fs = require("fs")
const {1 변수이름} = require("{1}");

const {2 변수이름} = {1 변수이름}.createServer();

const httpRequestListener = function( (3-1 요청), (3-2 응답)) {
  const { (4-1 객체이름), (4-2 객체이름) } = (3-1 요청)
 
  if (url === (5-1 url) && method === (5-2 method)) {
    response.writeHead((5-3 상태코드), { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({message : "(5-4 응답 메시지)" }))
 
  // ========================= Step2 =========================
	// if ( url === (1-1 url) && method === (1-2 method) ) {
  //   const (1-4 변수명) = fs.readFileSync( (1-3 html 파일 경로) )
  //   response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  //   response.end( (1-4 변수명) )
  // }
  
	// if ( url === (2-1 url) && method === (2-2 method) ) {
  //   const (2-4 변수명) = fs.readFileSync( (2-3 html 파일 경로) )
  //   response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  //   response.end( (2-4 변수명) )
  // }
  
	// if (url === (3-1 url) && method === (3-2 method) ) {
  //   let (3-3 변수명) = (3-3 빈 문자열)
    
  //   request.on('data', ( (3-4 data 파라미터) ) => {
  //     (3-3 body 변수명) += (3-4 data);
  //   })

  //   request.on('end', () => {
  //     const (3-5 변수명) = JSON.parse( (3-3 변수명) )
  //     const { (3-6 4가지 정보) } = user

  //     if ( (3-7 조건문) ) {
  //       response.writeHead((3-6 상태코드), { 'Content-Type': 'application/json' })
  //       response.end(JSON.stringify({ (3-6 응답메시지) })
  //     }
  //   })
  // }
}

server.on("{7 이벤트 이름}", {7 함수 이름})

{2 변수이름}.{8 메서드 이름}(PORT, 'localhost', () => {
  console.log( "{9 응답메시지}" );
});