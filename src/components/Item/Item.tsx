import { useState } from "react";
import { CustomRadio } from "../CustomRadio";
import { X } from "@phosphor-icons/react";
import { ExcludeIcon, ItemContainer, ItemText } from "./style";

interface IItemProps {
	text: string;
	onDeleteItem: (id: number) => void;
	id: number;
	isChecked: boolean;
	onChangeChecked: (id: number) => void;
}

export const Items = ({ text, onDeleteItem, id, isChecked, onChangeChecked }: IItemProps) => {
	const [item, setItem] = useState("");
	const [check, setCheck] = useState(isChecked);

	return (
		<ItemContainer>
			<div>
				<CustomRadio
					isChecked={check}
					changeState={() => {
						setCheck((oldState) => !oldState);
						onChangeChecked(id);
					}}
				></CustomRadio>
			</div>
			<ItemText isChecked={check}>{text}</ItemText>
			<ExcludeIcon onClick={() => onDeleteItem(id)}>
				<X size={32} />{" "}
			</ExcludeIcon>
		</ItemContainer>
	);
};
