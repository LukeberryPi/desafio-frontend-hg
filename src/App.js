import { useEffect, useState } from "react";

import ProductsGrid from "./components/ProductGrid";
import EntireHeader from "./components/EntireHeader";
import BillingCycleRow from "./components/BillingCycleRow";

import styled from "styled-components";
import { customColors } from "./colors";
import "../src/styles/App.css";

const EntireAppContainer = styled.div`
	background-color: ${customColors.backgroundWhite};
`;

function App() {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const url =
			"https://2891637c-8ab7-4a84-906b-a98465726f85.mock.pstmn.io/prices";

		fetch(url)
			.then((res) => res.json())
			.then((dados) => {
				console.log(dados);
				const actualApi = Object.keys(dados.shared.products);
				let actualApiArray = [];
				actualApi.forEach((e) => actualApiArray.push(dados.shared.products[e]));
				setProducts(actualApiArray);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			{/* {products.map((product) =>
				<div>{product.name}</div>)} */}
			<EntireAppContainer>
				<EntireHeader />
				<BillingCycleRow />
				<ProductsGrid api={products} />
			</EntireAppContainer>
		</>
	);
}

export default App;
