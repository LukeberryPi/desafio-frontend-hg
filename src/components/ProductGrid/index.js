import { correctPlanIcon } from "./EachProductCard";
import { customColors } from "../../colors";

import EachProductCard from "./EachProductCard/index.js";

import { FlexSection } from "./styles";
import { FooterNote } from "./styles";
import { DivInheritWidth } from "./styles";

export default function ProductGrid() {
	return (
		<>
			<FlexSection>
				<EachProductCard
					productStorage={100}
					numberOfSites="Para 1 site"
					buttonColor={customColors.hostGatorBlue}
					plan={correctPlanIcon.planP}
				/>
				<EachProductCard
					productStorage={100}
					numberOfSites="Sites Ilimitados"
					buttonColor={customColors.hostGatorOrange}
					plan={correctPlanIcon.planM}
				/>
				<EachProductCard
					productStorage={150}
					numberOfSites="Sites Ilimitados"
					buttonColor={customColors.hostGatorBlue}
					plan={correctPlanIcon.planTurbo}
				/>
			</FlexSection>
			<DivInheritWidth>
				<FooterNote>*Confira as condições da promoção</FooterNote>
			</DivInheritWidth>
		</>
	);
}
