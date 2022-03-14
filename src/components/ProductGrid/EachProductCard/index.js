import ProductPerkList from "./ProductPerkList/index.js";
import InfoFromApi from "../EachProductCard/InfoFromApi/index";

import { ProductCardSection } from "./styles";

import { default as PlanoPIcon } from "../../svgIcons/PlanoPIcon.svg";
import { default as PlanoMIcon } from "../../svgIcons/PlanoMIcon.svg";
import { default as PlanoTurboIcon } from "../../svgIcons/PlanoTurboIcon.svg";

export const correctPlanIcon = {
	planP: PlanoPIcon,
	planM: PlanoMIcon,
	planTurbo: PlanoTurboIcon,
};

export default function EachProductCard(props) {
	return (
		<ProductCardSection boxShadow={props.boxShadow}>
			<img src={props.plan} alt={props.plan} />
			<InfoFromApi buttonColor={props.buttonColor} index={props.index} api={props.api} />
			<ProductPerkList
				productStorage={props.productStorage}
				numberOfSites={props.numberOfSites}
			/>
		</ProductCardSection>
	);
}
