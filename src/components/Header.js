import styled from 'styled-components'
import { useState } from 'react';
import { selectCars } from '../features/car/carSlice';

import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { images } from '../constants';
import { useSelector } from 'react-redux';

const Header = () => {
	const navLinks = useSelector(selectCars)

	const menuLinks = ['Shop', 'Tesla Account']
	const burgerLinks = ['Model S', 'Model 3', 'Model X', 'Model Y', 'Existing Inventory', 'Used Inventory', 'Trade-in', 'Cybertruck', 'Roadster']

	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)


	return (
		<Container>
			<a href="/">
				<img src={images.logo} alt="logo" />
			</a>
			<Menu>
				{navLinks.map((item, index) => (
					<a href="/" key={item + index}>{item}</a>
				))}
			</Menu>
			<Burger onClick={handleClick} />
			<BurgerNav show={click}>
				<CloseBtnBox>

					<CloseBtn onClick={handleClick} />
				</CloseBtnBox>
				{burgerLinks.map((item, index) => (
					<li key={item + index}><a href="/" >{item}</a></li>
				))}
				<RightMenu>
					{menuLinks.map((item, index) => (
						<a href="/" key={item + index}>{item}</a>
					))}
				</RightMenu>

			</BurgerNav>
		</Container>
	)
}

export default Header

const Container = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 20px;
	width: 100%;
	min-height: 60px;

	z-index: 100;

`
const Menu = styled.div`
	display: flex;

	a {
		margin-right: 10px;
		font-weight: 600;
	}

	a:last-child {
		margin-right: 0;
	}

	@media(max-width: 768px) {
		display: none;
	}
`

const RightMenu = styled(Menu)`
	display: flex;
	align-items: center;

	margin-top: 20px;
`

const Burger = styled(FiMenu)`
	font-size: 25px;
	cursor: pointer;
`

const BurgerNav = styled.ul`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	text-align: start;

	padding: 20px;
	width: 300px;

	list-style-type: none;
	background: #fff;

	transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
	transition: .3s ease;

	overflow: auto;
	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0,0,0,.2);

		a {
			font-weight: 600;
		}
	}

	@media(max-width: 568px) {
		width: 100%;
	}
`

const CloseBtn = styled(GrClose)`
	margin-left: auto;
	font-size: 25px;
	cursor: pointer;
`
const CloseBtnBox = styled.div`
	display: flex;
`