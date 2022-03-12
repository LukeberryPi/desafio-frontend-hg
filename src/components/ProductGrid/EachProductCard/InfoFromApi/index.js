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