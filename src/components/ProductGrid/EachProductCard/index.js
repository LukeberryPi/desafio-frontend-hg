import ProductPerkList from "./ProductPerkList/index.js";
import InfoFromApi from "../EachProductCard/InfoFromApi/index";

import {
	FlexDiv,
	ProductCardSection,
	DisabledButton,
	CallToActionButton,
	DarkBluePrimaryPTag,
} from "./styles";

import { default as PlanoPIcon } from "../../svgIcons/PlanoPIcon.svg";
import { default as PlanoMIcon } from "../../svgIcons/PlanoMIcon.svg";
import { default as PlanoTurboIcon } from "../../svgIcons/PlanoTurboIcon.svg";
import { default as InfoIcon } from "../../svgIcons/InfoIcon.svg";

export const correctPlanIcon = {
	planP: PlanoPIcon,
	planM: PlanoMIcon,
	planTurbo: PlanoTurboIcon,
};

export default function EachProductCard(props) {
	return (
		<ProductCardSection boxShadow={props.boxShadow}>
			<img src={props.plan} alt={props.plan} />
			<InfoFromApi api={props.api} />
			<CallToActionButton backgroundButtonColor={props.buttonColor}>
				Contrate Agora
			</CallToActionButton>
			<div>
				<strong>1 ano de Domínio Grátis </strong>
				<img src={InfoIcon} alt="info icon" />
				<FlexDiv>
					<DarkBluePrimaryPTag>economize R$ FROM API</DarkBluePrimaryPTag>
					<DisabledButton disabled>40% OFF</DisabledButton>
				</FlexDiv>
			</div>
			<ProductPerkList
				productStorage={props.productStorage}
				numberOfSites={props.numberOfSites}
			/>
		</ProductCardSection>
	);
}
