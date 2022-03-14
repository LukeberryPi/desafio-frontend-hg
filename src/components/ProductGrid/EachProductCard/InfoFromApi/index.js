import { FlexHorizontallyDiv } from "../../../EntireHeader/styles.js";
import { BoldBlueP } from "../styles.js";
import {
	DashedP,
	BoldedP,
	Resize13pxP,
	InstallmentPrice,
	HugeInstallmentPrice,
	BaselineDiv,
	FlexDiv,
	DisabledButton,
	CallToActionButton,
	DarkBluePrimaryPTag,
} from "./styles";

import { default as PlanoPIcon } from "../../../svgIcons/PlanoPIcon.svg";
import { default as PlanoMIcon } from "../../../svgIcons/PlanoMIcon.svg";
import { default as PlanoTurboIcon } from "../../../svgIcons/PlanoTurboIcon.svg";
import { default as InfoIcon } from "../../../svgIcons/InfoIcon.svg";

export const correctPlanIcon = {
	planP: PlanoPIcon,
	planM: PlanoMIcon,
	planTurbo: PlanoTurboIcon,
};

export default function InfoFromApi(props) {
	
	const planName = props.api.length === 0 ? "" : props.api[props.index].name;
	
	const originalPrice =
		props.api.length === 0
			? ""
			: Number(props.api[props.index].cycle.triennially.priceOrder).toFixed(2);
	
	const discountedPrice =
		props.api.length === 0 ? "" : Number(originalPrice * 0.6).toFixed(2);
	
	const eachInstallment =
		props.api.length === 0
			? ""
			: Number(
					discountedPrice / props.api[props.index].cycle.triennially.months
			).toFixed(2);
	
	const economyAmount = props.api.length === 0 ? "" : Number(originalPrice - discountedPrice).toFixed(2)

	const productCode = props.api.length === 0 ? "" : props.api[props.index].id;

	return (
		<>
			<BoldBlueP>{planName}</BoldBlueP>
			<FlexHorizontallyDiv>
				<DashedP>R$ {originalPrice.toString().replace(".", ",")}</DashedP>
				<BoldedP>R$ {discountedPrice.toString().replace(".", ",")}</BoldedP>
			</FlexHorizontallyDiv>
			<Resize13pxP>equivalente a </Resize13pxP>
			<BaselineDiv>
				<InstallmentPrice>R$</InstallmentPrice>
				<HugeInstallmentPrice>
					{eachInstallment.toString().replace(".", ",")}
				</HugeInstallmentPrice>
				<InstallmentPrice>/mês*</InstallmentPrice>
			</BaselineDiv>
			<form action="">
				<CallToActionButton
					name="a=add%26pid%3DproductCode%26billingCycle%3Dtriennially%26promocode%3DPROMOHG40"
					type="submit"
					buttonColor={props.buttonColor}
				>
					Contrate Agora
				</CallToActionButton>
			</form>
			<div>
				<strong>1 ano de Domínio Grátis </strong>
				<img src={InfoIcon} alt="info icon" />
				<FlexDiv>
					<DarkBluePrimaryPTag>
						economize R$ {economyAmount}{" "}
					</DarkBluePrimaryPTag>
					<DisabledButton disabled>40% OFF</DisabledButton>
				</FlexDiv>
			</div>
		</>
	);
}
