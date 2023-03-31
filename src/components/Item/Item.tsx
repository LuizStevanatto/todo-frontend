import { useState } from "react";
import { CustomRadio } from "../CustomRadio";
import { ItemContainer } from "./style";

interface IItemProps {
	text: string;
	isCompletedProps?: boolean;
}

export const Items = ({ text, isCompletedProps }: IItemProps) => {
	const [isCompleted, setIsCompleted] = useState(false);
	const [item, setItem] = useState("");
	const [check, setCheck] = useState(false);

	const handleDeleteItem = (item: string) => {
		setIsCompleted(!item);
	};
	const handleCompletedItem = () => {
		setIsCompleted(!isCompleted);
	};

	return (
		<ItemContainer>
			<div>
				<CustomRadio isChecked={check} changeState={() => setCheck((oldState) => !oldState)}></CustomRadio>
			</div>
			<span>{text}</span>
		</ItemContainer>
	);
};
