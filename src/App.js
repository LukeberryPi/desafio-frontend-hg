import ProductsGrid from "./components/ProductsGrid";
import EntireHeader from "./components/EntireHeader";
import styled from "styled-components";
import { customColors } from "./colors";
import "../src/styles/App.css";
import BillingCycleRow from "./components/BillingCycleButtons";

const EntireAppContainer = styled.div`
	background-color: ${customColors.backgroundWhite};
`;


function App() {

	return (
		<>
			{/* <DataFetching /> */}
			<EntireAppContainer>
				<EntireHeader />
				<BillingCycleRow />
				<ProductsGrid />
			</EntireAppContainer>

			<div>
				<p>Confira as condições da promoção</p>
			</div>
		</>
	);
}

export default App;
