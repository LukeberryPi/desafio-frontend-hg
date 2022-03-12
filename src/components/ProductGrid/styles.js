import styled from "styled-components";
import { customColors } from "../../colors";

export const BoldBlueP = styled.p`
	color: ${customColors.darkBluePrimary};
	font-weight: bold;
`;

export const FlexSection = styled.section`
	display: flex;
	margin-top: 26px;
	text-align: center;
	justify-content: center;
`;

export const ProductCardDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const FooterNote = styled.p`
	text-decoration: underline;
	color: ${customColors.hostGatorBlue};
	font-size: 12px;
	text-align: right;
`;

export const DivInheritWidth = styled.div`
	width: inherit;
	text-align: right;
`;