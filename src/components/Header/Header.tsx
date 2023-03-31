import { useState } from "react";
import { Items } from "../Item/Item";
import { ButtonFooter, ContainerItems, ItemsLeftFooter } from "./style";
import { Container, ContainerContent, ContainerInput, FooterList, ItemsList } from "./style";

interface IUrlProps {
	urlImg: string;
}

export const Header = ({ urlImg }: IUrlProps) => {
	const options = ["All", "Active", "Completed"];

	const [inputValue, setInputValue] = useState("");
	const [filter, setFilter] = useState("All");
	const [currentButtonClicked, setCurrentButtonClicked] = useState("");

	const handleSubmitInputForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(inputValue);
		setInputValue("");
	};

	const handleClickFilter = (filter: string) => {
		return () => {
			setFilter(filter);
			setCurrentButtonClicked(filter);
		};
	};

	const array = [{ text: "Case 1" }, { text: "Case 2" }, { text: "Case 3" }, { text: "Case 4" }];

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
							return <Items key={index} text={item.text} />;
						})}
					</ItemsList>
					<FooterList>
						<div>
							<ItemsLeftFooter>
								<span>{`${array.length} item left`}</span>
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
