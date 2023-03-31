import { useCallback, useEffect, useState } from "react";
import { Items } from "../Item/Item";
import { ButtonFooter, ContainerItems, ItemsLeftFooter } from "./style";
import { Container, ContainerContent, ContainerInput, FooterList, ItemsList } from "./style";

interface IUrlProps {
	urlImg: string;
}

interface IArrayProps {
	id: number;
	text: string;
	isChecked: boolean;
}

const arrayItems = [
	{ id: 1, text: "Complete online Javascript course", isChecked: false },
	{ id: 2, text: "Jog around the park", isChecked: false },
	{ id: 3, text: "10 minutes meditation", isChecked: false },
	{ id: 4, text: "Read for 1 hour", isChecked: false },
	{ id: 5, text: "Pickup groceries", isChecked: false },
];

export const Header = ({ urlImg }: IUrlProps) => {
	const options = ["All", "Active", "Completed"];

	const [inputValue, setInputValue] = useState("");
	const [filter, setFilter] = useState("All");
	const [currentButtonClicked, setCurrentButtonClicked] = useState("");
	const [array, setArray] = useState(arrayItems as IArrayProps[]);
	const [validateCheck, setValidateCheck] = useState();

	const handleSubmitInputForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setInputValue("");
	};

	const handleClickFilter = (filter: string) => {
		return () => {
			setFilter(filter);
			setCurrentButtonClicked(filter);
		};
	};

	const handleDelete = useCallback(
		(id: number) => {
			const newArray = array.filter((item) => item.id !== id);

			setArray(newArray);
		},
		[array]
	);

	const handleCheck = useCallback(
		(id: number) => {
			const newArray = array.map((item) => {
				if (item.id === id) {
					item.isChecked = !item.isChecked;
				}
				return item;
			});
			setArray(newArray);
		},
		[array]
	);

	return (
		<Container urlImg={urlImg}>
			<ContainerContent>
				<div>
					<h3>TODO</h3>
					<button>mudar tema</button>
				</div>
				<ContainerInput onSubmit={handleSubmitInputForm}>
					<input
						type="text"
						placeholder="Create a new todo..."
						value={inputValue}
						onChange={({ target }) => setInputValue(target.value)}
					/>
				</ContainerInput>
				<ContainerItems>
					<ItemsList>
						{array.map((item, index) => {
							return (
								<Items
									key={item.id}
									text={item.text}
									onDeleteItem={() => handleDelete(item.id)}
									id={item.id}
									isChecked={item.isChecked}
									onChangeChecked={() => handleCheck(item.id)}
								/>
							);
						})}
					</ItemsList>
					<FooterList>
						<div>
							<ItemsLeftFooter>
								<span>{array.filter((item) => item.isChecked === false).length} items left</span>
							</ItemsLeftFooter>
						</div>
						<div>
							{options.map((item) => {
								return (
									<ButtonFooter
										active={item == currentButtonClicked}
										onClick={handleClickFilter(item)}
									>
										{item}
									</ButtonFooter>
								);
							})}
						</div>
						<div>
							<ButtonFooter>Clear Completed</ButtonFooter>
						</div>
					</FooterList>
				</ContainerItems>
			</ContainerContent>
		</Container>
	);
};
