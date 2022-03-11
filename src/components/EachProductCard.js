import { CallToActionButton } from "./CallToActionButton";
import ProductPerkList from "./ProductPerkList";
import { customColors } from "../colors";
import styled from "styled-components";

import { default as PlanoPIcon } from "../components/svgIcons/PlanoPIcon.svg";
import { default as PlanoMIcon } from "../components/svgIcons/PlanoMIcon.svg";
import { default as PlanoTurboIcon } from "../components/svgIcons/PlanoTurboIcon.svg";
import { default as InfoIcon } from "../components/svgIcons/InfoIcon.svg";

export const correctPlanIcon = {
	planP: PlanoPIcon,
	planM: PlanoMIcon,
	planTurbo: PlanoTurboIcon,
}

const BoldBlueP = styled.p`
	color: ${customColors.darkBluePrimary};
	font-weight: bold;
`;

const FlexSection = styled.section`
	display: flex;
	align-items: center;
`;

const ProductCardDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const DisabledButton = styled.button`
	height: 20%;
	background-color: ${customColors.greenPrimary};
	border-radius: 31px;
	font-weight: bold;
	color: ${customColors.plainWhite};
`

export default function EachProductCard(props) {
	return (
		<ProductCardDiv border>
			<img src={props.plan} alt={props.plan}/>
			<BoldBlueP>Plano P</BoldBlueP>
			<p>AWAIT API</p>
			<CallToActionButton backgroundButtonColor={props.buttonColor}>
				Contrate Agora
			</CallToActionButton>
			<div>
				<strong>1 ano de Domínio Grátis </strong>
				<img src={InfoIcon} alt='info icon' />
				<FlexSection>
					<p>economize R$ 9.999,99 {"  "}</p>
					<DisabledButton disabled>40% OFF</DisabledButton>
				</FlexSection>
			</div>
			<ProductPerkList productStorage={props.productStorage} numberOfSites={props.numberOfSites} />
		</ProductCardDiv>
	);
}
