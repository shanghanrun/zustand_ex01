import './MemoInput.style.css'
import { useMemoStore } from '../store/MemoList';
import {useState} from 'react'

const MemoInput =()=>{
	const { addMemo, memo } = useMemoStore();
	const [value, setValue] = useState('')

	return(
		<form className="addmemo-form" onSubmit={e=>{
			e.preventDefault();
			addMemo(value);
			setValue('')
			console.log('memo:', memo)
		}}>
			<div>
				<input type="text" value={value}
					onChange={e =>setValue((prev)=>{
					if(prev !== e.target.value){ //중복입력방지
						return e.target.value
					}
				})}/>
				<button type="submit">저장</button>
			</div>
		</form>
	)
}


export default MemoInput;
