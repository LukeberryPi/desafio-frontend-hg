import { FlexHorizontallyDiv } from "../../../EntireHeader/styles.js";

import { DashedP } from "./styles";
import { BoldedP } from "./styles";
import { ResizeP } from "./styles";
import { InstallmentPrice } from "./styles";
import { HugeInstallmentPrice } from "./styles";

export default function InfoFromApi() {
    return (
			<>
				<FlexHorizontallyDiv>
					<DashedP>R$ 999,99</DashedP>
					<BoldedP>R$ 799,99</BoldedP>
				</FlexHorizontallyDiv>
				<ResizeP>equivalente a </ResizeP>
				<FlexHorizontallyDiv>
					<InstallmentPrice>R$</InstallmentPrice>
					<HugeInstallmentPrice>99,99</HugeInstallmentPrice>
					<InstallmentPrice>/mês*</InstallmentPrice>
				</FlexHorizontallyDiv>
			</>
		);
}