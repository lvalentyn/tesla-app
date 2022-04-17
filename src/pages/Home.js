import Section from '../components/Section'

import { images } from '../constants';

const Home = () => {
	return (
		<div>
			<Section
				title="Model S"
				descr="Order Online for Touchless Delivery"
				bg={images.modelS}
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				arrow={true}
			/>
			<Section
				title="Model Y"
				descr="Order Online for Touchless Delivery"
				bg={images.modelY}
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
			/>
			<Section
				title="Model 3"
				descr="Order Online for Touchless Delivery"
				bg={images.model3}
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
			/>
			<Section
				title="Model X"
				descr="Order Online for Touchless Delivery"
				bg={images.modelX}
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
			/>
			<Section
				title="Lowest Cost Solar Panels in America"
				descr="Money-back guarantee"
				bg={images.solarPanel}
				leftBtn="Order now"
				rightBtn="Learn More"
			/>
			<Section
				title="Solar for New Roofs"
				descr="Solar Roof Costs Less Than a New Roof Plus Solar Panel"
				bg={images.solarRoof}
				leftBtn="Order now"
				rightBtn="Learn More"
			/>
			<Section
				title="Accessories"
				bg={images.accessories}
				leftBtn="Shop now"
			/>
		</div>
	)
}

export default Home