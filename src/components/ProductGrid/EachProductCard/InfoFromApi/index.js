import { useState, useEffect } from "react";

import { FlexHorizontallyDiv } from "../../../EntireHeader/styles.js";
import { BoldBlueP } from "../styles.js";
import {
	DashedP,
	BoldedP,
	Resize13pxP,
	InstallmentPrice,
	HugeInstallmentPrice,
	BaselineDiv
} from "./styles";

export default function InfoFromApi() {

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const url =
			"https://2891637c-8ab7-4a84-906b-a98465726f85.mock.pstmn.io/prices";

		fetch(url)
			.then((res) => res.json())
			.then((dados) => {
				console.log(dados);
				const actualApi = Object.keys(dados.shared.products);
				let myArray = [];
				actualApi.forEach((e) => myArray.push(dados.shared.products[e]));
				setPosts(myArray);
			})
			.catch((err) => console.log(err));
	}, []);

    return (
			<>
				<BoldBlueP>FROM API</BoldBlueP>
				<FlexHorizontallyDiv>
					<DashedP>R$ FROM API</DashedP>
					<BoldedP>R$ FROM API</BoldedP>
				</FlexHorizontallyDiv>
				<Resize13pxP>equivalente a </Resize13pxP>
				<BaselineDiv>
					<InstallmentPrice>R$</InstallmentPrice>
					<HugeInstallmentPrice>FROM API</HugeInstallmentPrice>
					<InstallmentPrice>/mês*</InstallmentPrice>
				</BaselineDiv>
			</>
		);
}