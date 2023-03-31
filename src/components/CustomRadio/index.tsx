import { CircleClicked, CircleNotClicked, Container, Radio } from "./style";

import { Check } from "@phosphor-icons/react";

interface ICustomRadioProps {
	isChecked: boolean;
	changeState: () => void;
}

export const CustomRadio = ({ isChecked, changeState }: ICustomRadioProps) => {
	return (
		<Container>
			{isChecked ? (
				<CircleClicked>
					<Check size={12} />
				</CircleClicked>
			) : (
				<CircleNotClicked />
			)}
			<input type="checkbox" aria-label="Toggle Button" onClick={() => changeState()} />
		</Container>
	);
};
