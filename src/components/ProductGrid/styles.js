import styled from "styled-components";
import { customColors } from "../../colors";

export const BoldBlueP = styled.p`
	color: ${customColors.darkBluePrimary};
	font-weight: bold;
`;

export const FlexSection = styled.main`
	@media (min-width: 1024px) {
		display: flex;
		margin-top: 26px;
		text-align: center;
		justify-content: center;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		flex-direction: column;
		width: 400px;
		margin: 0 auto;
		justify-content: center;
		text-align: center;
	} ;
`;

export const ProductCardDiv = styled.div`
	@media (min-width: 1024px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	@media (max-width: 1023px) {
		
	} ;
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