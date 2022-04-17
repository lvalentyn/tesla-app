import styled from 'styled-components'
import { images } from '../constants';

const Section = ({ title, descr, leftBtn, rightBtn, bg, arrow = false }) => {
	return (
		<Wrap bgImage={bg}>
			<ItemText>
				<h1>{title}</h1>
				{descr && (
					<p>{descr}</p>
				)}
			</ItemText>
			<ButtonGroup>
				<LeftButton>
					{leftBtn}
				</LeftButton>
				{rightBtn && (
					<RightButton>
						{rightBtn}
					</RightButton>
				)}
			</ButtonGroup>
			{arrow && (
				<DownArrow src={images.downArrow} />
			)}
		</Wrap>
	)
}

export default Section

const Wrap = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;

	width: 100vw;
	height: 100vh;

	background: ${props => `url(${props.bgImage})`} center / cover no-repeat;
`

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`

const ButtonGroup = styled.div`
	display: flex;
	margin-top: auto;
	margin-bottom: 30px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const LeftButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	margin: 8px;
	width: 256px;
	height: 40px;
	
	font-size: 12px;
	color: #fff;
	text-transform: uppercase;

	background-color: rgba(23,26,32,.8);
	border-radius: 100px;
	opacity: .85;
	cursor: pointer;
	user-select: none;
`

const RightButton = styled(LeftButton)`
	color: inherit;
	background-color: rgba(255,255,255,.65);
`

const DownArrow = styled.img`
	height: 40px;
	animation: animateDown infinite 1.5s;
`

