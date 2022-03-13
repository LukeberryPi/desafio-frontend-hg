import styled from "styled-components";
import { customColors } from "../../colors";

export const EntireHeaderDiv = styled.header`
	@media (min-width: 1024px) {
		display: flex;
		position: relative;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background-color: ${customColors.darkBluePrimary};
	}

	@media (max-width: 1024px) {
		display: flex;
		position: relative;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background-color: ${customColors.darkBluePrimary};
		height: 400px;
		padding: 15px;
	} ;
`;

export const SoftBluePTag = styled.p`
	color: ${customColors.softBlue};
	margin: 5px;
`;

export const TextAlignCenterDiv = styled.div`
	text-align: center;
`;

export const PositionAbsoluteBottom0 = styled.div`
	position: absolute;
	bottom: 0;
`;

export const WhiteH3 = styled.h3`
	color: ${customColors.plainWhite};
	margin-top: 8px;
	margin-bottom: 32px;
	font-size: 30px;
	
`;

export const FlexHorizontallyDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const FiftyPercentDiv = styled.div`
	@media (min-width: 1024px) {
		width: 50%;
		text-align: center;
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		width: 50%;
		text-align: left;
	}
`;

export const SvgContainerDisappearTabletMobile = styled.div`

	img {
		width: 100%;
	}

	@media (min-width: 1024px) {
		display: block;
	}

	@media (max-width: 1023px) {
		display: none;
	}
`;
