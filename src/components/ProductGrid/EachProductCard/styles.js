import styled from "styled-components";
import { customColors } from "../../../colors";

export const ProductCardSection = styled.section`
	@media (min-width: 1024px) {
		display: flex;
		height: 650px;
		flex-direction: column;
		box-shadow: ${(props) => props.boxShadow};
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: ${customColors.plainWhite};
		margin: 0px 8px;
		border-radius: 4px;
		padding-top: 32px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		display: flex;
		height: 650px;
		flex-direction: column;
		box-shadow: ${(props) => props.boxShadow};
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: ${customColors.plainWhite};
		margin: 24px 8px;
		border-radius: 4px;
		padding-top: 32px;
	}

	@media (max-width: 768px) {
		display: flex;
		height: 650px;
		flex-direction: column;
		box-shadow: ${(props) => props.boxShadow};
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: ${customColors.plainWhite};
		margin: 24px 8px;
		border-radius: 4px;
		padding-top: 32px;
	} ;
`;