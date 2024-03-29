
import './App.css';
import MemoBoard from './component/MemoBoard';
import MemoInput from './component/MemoInput';
import MemoItem from './component/MemoItem';
import { useMemoStore } from './store/MemoList';


function App() {
  const { memoList } = useMemoStore();
  return  (<div>
      <MemoBoard>
        {memoList.length ? (
          memoList.map(item =>(
            <MemoItem key={item.id} item={item} />
          ))):
        (
          <span>메모를 입력해주세요.</span>
        )}
      </MemoBoard>
      <MemoInput />
    </div>
  );
}


export default App;
