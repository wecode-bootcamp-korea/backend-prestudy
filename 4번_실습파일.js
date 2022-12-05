// const (1 변수) = require("(1 모듈 이름)");
// const (1 변수) = require("(1 모듈 이름)");
// const (1 변수) = require("(1 모듈 이름)");

// const url = '(2 아이피주소:포트번호/엔드포인트)';

// const (3 함수이름) = async () => {
//   try {
//     const { data } = await axios.( (4 메서드이름) )(url);
//     const $ = cheerio.load(data);

//     const listItems = $( '(5 DOM SELECTOR)' );
    
//     const users = [];

//     listItems.each((idx, el) => {
//       const user = {};
      
//       user.(6 key이름) = $(el).children( '(6 클래스 선택자)' ).text();
//       user.(6 key이름) = $(el).children( '(6 클래스 선택자)' ).text();
//       user.(6 key이름) = $(el).children( '(6 클래스 선택자)' ).text();
//       user.(6 key이름) = $(el).children( '(6 클래스 선택자)' ).text();

//       users.push(user);
//     });

//     const (7 변수이름) = fs.(7 메서드이름)( '(7 생성할 파일 이름)' );

//     (7 변수이름).on('(8 이벤트이름)', () => {
//       console.log('위코드 멘토 정보를 가져오는데 성공하였습니다.💻');
//     });

//     users.forEach((user) => {
//       const value = (9 메서드 이름)(user)
//         .map((key) => {
//           return (9 객체 값); 
//         })
//         .join(',');

//       (7 변수이름).write( `(10 개행처리)` );
//     });

//     writeStream.end();
//   } catch (err) {
//     console.error(err);
//   }
// };

// scrapeData();