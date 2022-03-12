import { default as unselectedRadio } from "../svgIcons/UnselectedRadio.svg";
import { default as SelectedRadio } from "../svgIcons/SelectedRadio.svg";

import { TextAlignCenterDiv } from "./styles.js";
import { BillingCycleRowDiv } from "./styles.js";
import { BillingCycleButton } from "./styles.js";
import { HostGatorBluePTag } from "./styles.js";

import { customColors } from "../../colors";

export default function BillingCycleRow() {
	return (
		<TextAlignCenterDiv>
			<HostGatorBluePTag>Quero pagar a cada:</HostGatorBluePTag>
			<BillingCycleRowDiv borderRadius={21}>
				<BillingCycleButton
					billingCycleButtonTextColor={customColors.plainWhite}
					billingCycleButtonColor={customColors.hostGatorBlue}
					borderRadius={21}
					bold="bold"
					onClick={"setPricesToTriennally"}
				>
					<img src={SelectedRadio} alt="unselected radio" /> 3 anos
				</BillingCycleButton>
				<BillingCycleButton
					billingCycleButtonTextColor={customColors.hostGatorBlue}
					borderRadius={21}
					onClick={"setPricesToAnnually"}
				>
					<img src={unselectedRadio} alt="unselected radio" /> 1 ano
				</BillingCycleButton>
				<BillingCycleButton
					billingCycleButtonTextColor={customColors.hostGatorBlue}
					borderRadius={21}
					onClick={"setPricesToMonthly"}
				>
					<img src={unselectedRadio} alt="unselected radio" /> 1 mês
				</BillingCycleButton>
			</BillingCycleRowDiv>
		</TextAlignCenterDiv>
	);
}
