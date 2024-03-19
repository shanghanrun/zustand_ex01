import React from 'react'
import './MemoItem.style.css'
import { useMemoStore } from '../store/MemoList'

const MemoItem = ({item}) => {
	const {removeMemo} = useMemoStore()
  return (
	<div className="memo-wrapper">
		<div>{item?.content}</div>
		<button className='remove-btn' onClick={()=>removeMemo(item?.id)}>삭제</button>
	</div>
  )
}

export default MemoItem;

