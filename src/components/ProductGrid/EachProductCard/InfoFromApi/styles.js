import styled from "styled-components";
import { customColors } from "../../../../colors";

export const DashedP = styled.p`
	text-decoration: line-through;
	font-size: 13px;
	margin-right: 4px;
	margin-left: 8px;
`;

export const BoldedP = styled.p`
	font-weight: bold;
	font-size: 13px;
	margin-right: 8px;
	margin-left: 4px;
`;

export const Resize13pxP = styled.p`
	margin: 0;
	font-size: 13px;
`;

export const InstallmentPrice = styled.div`
	color: ${customColors.darkBluePrimary};
	font-size: 20px;
`;

export const HugeInstallmentPrice = styled.p`
	color: ${customColors.darkBluePrimary};
	font-size: 35px;
	font-weight: bold;
	top: 0px;
	margin: 0px 6px;
`;

export const BaselineDiv = styled.div`
	height: 10%;
	display: flex;
	align-items: baseline;
	padding: 0;
`