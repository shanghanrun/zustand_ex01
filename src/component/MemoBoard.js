
import './MemoBoard.style.css'

const MemoBoard = ({children}) => {
  return (
	<div className="memo-wrapper1">
	  {children}
	  <span className="notice">떠든 사람: 하하하</span>
	</div>
  )
}


export default MemoBoard
