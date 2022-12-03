const (1 변수명) = require("(1)");
const fs = require("fs")

const (2 변수명) = (1 변수명).createServer();

const httpRequestListener = funciton( (3-1 요청), (3-2 응답)) {
  const { (4-1 객체이름), (4-2 객체이름) } = (3-1 요청)
 
  // 5번 관련 코드
  if (url === (5-1 url) && method === (5-2 method)) {
    response.writeHead((5-3 상태코드), { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({message : (5-4 응답 메시지) }))
 
	if ( url === (1-1 url) && method === (1-2 method) ) {
    const (1-4 변수명) = fs.readFileSync( (1-3 html 파일 경로) )
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    response.end( (1-4 변수명) )
  }
  
	if ( url === (2-1 url) && method === (2-2 method) ) {
    const (2-4 변수명) = fs.readFileSync( (2-3 html 파일 경로) )
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    response.end( (2-4 변수명) )
  }
  
	if (url === (3-1 url) && method === (3-2 method) ) {
    let (3-3 변수명) = (3-3 빈 문자열)
    
    request.on('data', ( (3-4 data 파라미터) ) => {
      (3-3 body 변수명) += (3-4 data);
    })

    request.on('end', () => {
      const (3-5 변수명) = JSON.parse( (3-3 변수명) )
      const { (3-6 4가지 정보) } = user

      if ( (3-7 조건문) ) {
        response.writeHead((3-6 상태코드), { 'Content-Type': 'application/json' })
        response.end(JSON.stringify({ (3-6 응답메시지) })
      }
    })
  }
}

(2 변수).(7 메서드)(PORT, 'localhost', () => {
  console.log( (8 응답 메시지) );
}