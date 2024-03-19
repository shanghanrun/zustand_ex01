import {create} from 'zustand'

export const useMemoStore = create((set)=>({
	memoList:[],
	memo:'haha',
	addMemo: (val)=>
		set((state)=>({
			memoList: [...state.memoList, {content:val, id:new Date().getMilliseconds()+val} ]
		})),
	removeMemo:(id)=>set((prev)=>({
		memoList: prev.memoList.filter((item)=> item.id !== id)
	}))
}))

