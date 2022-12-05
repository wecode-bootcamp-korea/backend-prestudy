/*
[코드 작성 안내]

학습 페이지에 있는 pseudo-code를 읽고 각 코드에 따른 빈칸을 채워넣어 주세요!

코드를 작성할 때 {번호 이름} 중괄호까지 모두 지운 후 코드를 작성해야 합니다.
문자열이 위치하는 경우 " " 따옴표는 지우지 않도록 주의해주세요!

이 외 다른 코드를 지우면 정상적으로 실행이 되지 않을 수 있습니다.
특정 코드가 수정되어 실습이 정상적으로 진행되지 않는 경우 학습 자료의 템플릿 코드를 복사하여 사용하시기 바랍니다.

이번 실습을 진행하기 전에 Step1~3 실습을 진행하여 로컬 환경에서 서버를 구동해야합니다.
*/

const {1 변수이름} = require( "{1 모듈이름}" );
const {1 변수이름} = require( "{1 모듈이름}" );
const {1 변수이름} = require( "{1 모듈이름}" );

const url = "{2 호스트정보:포트번호/엔드포인트}";

const {3 함수이름} = async () => {
  try {
    const { data } = await axios.{4 메서드이름}(url);
    const $ = cheerio.load(data);

    const listItems = $( "{5 DOM SELECTOR}" );
    
    const users = [];

    listItems.each((idx, el) => {
      const user = {}; // 수정 필요 없음.
      
      user.{6 key이름} = $(el).children( "{6 클래스 선택자}" ).text();
      user.{6 key이름} = $(el).children( "{6 클래스 선택자}" ).text();
      user.{6 key이름} = $(el).children( "{6 클래스 선택자}" ).text();
      user.{6 key이름} = $(el).children( "{6 클래스 선택자}" ).text();

      users.push(user);
    });

    const {7 변수이름} = fs.{7 메서드이름}( "{7 생성할 파일 이름}.csv" );

    {7 변수이름}.on( "{8 이벤트이름}", () => {
      console.log('위코드 멘토 정보를 가져오는데 성공하였습니다.💻');
    });

    users.forEach((user) => {
      const value = {9 메서드 이름}(user)
        .map((key) => {
          return {9 객체 값}; 
        })
        .join(',');

      {7 변수이름}.write( "{10 개행처리 표현식}" );
    });

    writeStream.end();
  } catch (err) {
    console.error(err);
  }
};

scrapeData();