// import { useEffect, useState } from "react";

import { default as UnselectedRadio } from "../svgIcons/UnselectedRadio.svg";
import { default as SelectedRadio } from "../svgIcons/SelectedRadio.svg";

import {
	TextAlignCenterDiv,
	BillingCycleRowDiv,
	BillingCycleButton,
	HostGatorBluePTag,
	ButtonDiv,
	ButtonText,
} from "./styles";

import { customColors } from "../../colors";

export default function BillingCycleRow() {
	
	// (B) useEffect para dar update no ciclo de pagamento sempre que a variável mudar. 
	// useEffect(() => {
		
	// 	};
	// }, [billingCycle])
	
	// const updateBillingCycle = (whichCycle) => {
	// 	setBillingCycle(whichCycle);
	// }

	return (
		<TextAlignCenterDiv>
			<HostGatorBluePTag>Quero pagar a cada:</HostGatorBluePTag>
			<BillingCycleRowDiv borderRadius={21}>
				<BillingCycleButton
					billingCycleButtonTextColor={customColors.plainWhite}
					billingCycleButtonColor={customColors.hostGatorBlue}
					borderRadius={21}
					bold="bold"
					// onClick={updateBillingCycle("triennially")}
					// billingCycle={billingCycle}
				>
					<ButtonDiv>
						<img src={SelectedRadio} alt="unselected radio" />{" "}
						<ButtonText>3 anos</ButtonText>
					</ButtonDiv>
				</BillingCycleButton>
				<BillingCycleButton
					billingCycleButtonTextColor={customColors.hostGatorBlue}
					borderRadius={21}
					// onClick={updateBillingCycle("annually")}
					// billingCycle={billingCycle}
				>
					<ButtonDiv>
						<img src={UnselectedRadio} alt="unselected radio" />{" "}
						<ButtonText>1 ano</ButtonText>
					</ButtonDiv>
				</BillingCycleButton>
				<BillingCycleButton
					billingCycleButtonTextColor={customColors.hostGatorBlue}
					borderRadius={21}
					// onClick={updateBillingCycle("monthly")}
					// billingCycle={billingCycle}
				>
					<ButtonDiv>
						<img src={UnselectedRadio} alt="unselected radio" />{" "}
						<ButtonText>1 mês</ButtonText>
					</ButtonDiv>
				</BillingCycleButton>
			</BillingCycleRowDiv>
		</TextAlignCenterDiv>
	);
}
