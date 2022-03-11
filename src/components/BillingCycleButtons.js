import { default as unselectedRadio } from "./svgIcons/UnselectedRadio.svg";

import styled from "styled-components";
import { customColors } from "../colors";

const TextAlignCenterDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const BillingCycleRowDiv = styled.div`
	display: inline-block;
	border-top-right-radius: ${(props) => props.borderRadius}px;
	border-bottom-right-radius: ${(props) => props.borderRadius}px;
	border-top-left-radius: ${(props) => props.borderRadius}px;
	border-bottom-left-radius: ${(props) => props.borderRadius}px;
	border: 2px solid ${customColors.hostGatorBlue};
`;

const BillingCycleButton = styled.button`
	border-top-right-radius: ${(props) => props.borderRadius}px;
	border-bottom-right-radius: ${(props) => props.borderRadius}px;
	border-top-left-radius: ${(props) => props.borderRadius}px;
	border-bottom-left-radius: ${(props) => props.borderRadius}px;
	border: white;
	background-color: white;
	color: ${customColors.hostGatorBlue};
`;

export default function BillingCycleRow() {
	return (
		<TextAlignCenterDiv>
			<p>Quero pagar a cada:</p>
			<BillingCycleRowDiv borderRadius={21}>
				<BillingCycleButton borderRadius={21}>
					<img src={unselectedRadio} alt="unselected radio" /> 3 anos
				</BillingCycleButton>
				<BillingCycleButton>
					<img src={unselectedRadio} alt="unselected radio" /> 1 ano
				</BillingCycleButton>
				<BillingCycleButton borderRadius={21}>
					<img src={unselectedRadio} alt="unselected radio" /> 1 mês
				</BillingCycleButton>
			</BillingCycleRowDiv>
		</TextAlignCenterDiv>
	);
}
