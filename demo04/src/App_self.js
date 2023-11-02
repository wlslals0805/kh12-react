import Exam01 from "./components/Exam01";
import Jumbotron from "./components/Jumbotron";


//실제 화면을 구현하기 위한 곳(컴포넌트 조각을 여기로 모음)
function App() {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="com-md-8 offset-md-2">

          {/* 점보트론을 만들면서 제목과 내용을 전달 */}
          <Jumbotron title="일정 관리 프로그램" content="KH정보교육원 수업자료"/>
          
          {/* 입력화면 */}
          <Exam01/>

          {/* 출력화면 */}

        </div>
      </div>

        

    </div>
  );
}

export default App;