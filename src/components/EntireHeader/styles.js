import styled from "styled-components";
import { customColors } from "../../colors";

export const EntireHeaderDiv = styled.header`
	display: flex;
	position: relative;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background-color: ${customColors.darkBluePrimary};
`;

export const SoftBluePTag = styled.p`
	color: ${customColors.softBlue};
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
`;

export const FlexHorizontallyDiv = styled.div`
	display: flex;
	flex-direction: row;
`;