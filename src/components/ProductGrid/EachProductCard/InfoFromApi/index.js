import { FlexHorizontallyDiv } from "../../../EntireHeader/styles.js";
import { BoldBlueP } from "../styles.js";
import {
	DashedP,
	BoldedP,
	Resize13pxP,
	InstallmentPrice,
	HugeInstallmentPrice,
	BaselineDiv,
} from "./styles";

export default function InfoFromApi(props) {
	
	return (
		<>
			<BoldBlueP>Plan X</BoldBlueP>
			<FlexHorizontallyDiv>
				<DashedP>R$ 341,49</DashedP>
				<BoldedP>R$ 299, 99</BoldedP>
			</FlexHorizontallyDiv>
			<Resize13pxP>equivalente a </Resize13pxP>
			<BaselineDiv>
				<InstallmentPrice>R$</InstallmentPrice>
				<HugeInstallmentPrice>49,99</HugeInstallmentPrice>
				<InstallmentPrice>/mês*</InstallmentPrice>
			</BaselineDiv>
		</>
	);
	}
