import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

import { FiMenu } from 'react-icons/fi'
import { images } from '../constants';

const Header = () => {
	const navLinks = ['Model S', 'Model 3', 'Model X', 'Model Y']
	const menuLinks = ['Shop', 'Tesla Account']

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
			<RightMenu>
				{menuLinks.map((item, index) => (
					<a href="/" key={item + index}>{item}</a>
				))}
				<Burger />
			</RightMenu>
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
`

const Burger = styled(FiMenu)`
	font-size: 25px;
	cursor: pointer;
`