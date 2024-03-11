
import styled from 'styled-components'

const MemoBoard = (props) => {
  return (
	<MemoWrapper>
	  {props.children}
	  <LOL>떠든 사람: 하하하</LOL>
	</MemoWrapper>
  )
}

const MemoWrapper =styled.div`
	position: relative;
	display:flex;
	gap: 8px;
	padding: 16px;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	min-height: 240px;
	overflow-y: scroll;
	flex-wrap: wrap;
	border: 14px solid black;
	background: green;
	> span:first-child{
		color: white;
		padding: 4px;
		border: 1px solid white;
		border-radius: 4px;
	}
`;

const LOL = styled.span`
	position: absolute;
	font-size: 24px;
	font-weight: 700;
	color: white;
	bottom: 50px;
	right: 16px;
	transform: rotate()(-8deg);

`;

export default MemoBoard
