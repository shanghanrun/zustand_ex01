import create from 'zustand'
import './App.css';

const useStore = create((set)=>({  // 객체반환위해 (괄호)를 추가했다.
  count: 0,
  increase(){
    set(state => ({count: state.count+1}))
  },
  decrease(){
    set(state =>({count: state.count-1}))
  },
  async callAjax(){
    const response = await fetch('https://codingapple1.github.io/data.json');
    console.log(await response.json());
  }
}))

function App() {
  const {count, increase, callAjax} = useStore(); // 실행한다.
  return  (<div>
      <p>구독자 {count}</p>
      <button onClick={()=>{
        increase()
      }}>증가</button>
      <Card />
      <button onClick={()=>{
        callAjax()
      }}>Ajax요청</button>
    </div>
  );
}
function Card() {
  const {count} = useStore();
  return (
    <div>
      <p>카드 {count}</p>
    </div>
  );
}

export default App;
