import { useState, useEffect } from "react";

import ProductsGrid from "./components/ProductsGrid";
import EntireHeader from "./components/EntireHeader";
import styled from "styled-components";
import { customColors } from "./colors";
import "../src/styles/App.css";

const EntireAppContainer = styled.div`
	background-color: ${customColors.backgroundWhite};
`;

function App() {

	useEffect(() => {
		fetch("https://2891637c-8ab7-4a84-906b-a98465726f85.mock.pstmn.io/prices")
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);

	return (
		<EntireAppContainer>
			<EntireHeader />
			<ProductsGrid />
		</EntireAppContainer>
	);
}

export default App;
