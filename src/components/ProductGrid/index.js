import { correctPlanIcon } from "./EachProductCard";
import { customColors } from "../../colors";

import EachProductCard from "./EachProductCard/index.js";

import { FlexSection } from "./styles";
import { FooterNote } from "./styles";
import { FlexHorizontallyDiv, FiftyPercentDiv } from "../EntireHeader/styles";

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
					boxShadow={`0 -12px 0 ${customColors.hostGatorOrange}, 0 5px 0 ${customColors.hostGatorOrange}`}
				/>
				<EachProductCard
					productStorage={150}
					numberOfSites="Sites Ilimitados"
					buttonColor={customColors.hostGatorBlue}
					plan={correctPlanIcon.planTurbo}
				/>
			</FlexSection>
			<FlexHorizontallyDiv>
				<FiftyPercentDiv></FiftyPercentDiv>
				<FiftyPercentDiv>
					<FiftyPercentDiv>
						<FooterNote>*Confira as condições da promoção</FooterNote>
					</FiftyPercentDiv>
				</FiftyPercentDiv>
			</FlexHorizontallyDiv>
		</>
	);
}
