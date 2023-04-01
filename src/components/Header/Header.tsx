import { useCallback, useEffect, useMemo, useState } from "react";
import { Items } from "../Item/Item";
import { ButtonFooter, ContainerItems, ItemsLeftFooter } from "./style";
import { Container, ContainerContent, ContainerInput, FooterList, ItemsList } from "./style";
import { api } from "../../api";

interface IUrlProps {
	urlImg: string;
}

interface IArrayProps {
	id: string;
	text: string;
	isCompleted: boolean;
}

export const Header = ({ urlImg }: IUrlProps) => {
	const options = ["All", "Active", "Completed"];

	const [inputValue, setInputValue] = useState("");
	const [filter, setFilter] = useState("All");
	const [currentButtonClicked, setCurrentButtonClicked] = useState("");
	const [array, setArray] = useState([] as IArrayProps[]);
	const [id, setId] = useState("");
	const [updateList, setUpdateList] = useState(false);

	const isListEmpty = useMemo(() => {
		return array.length == 0;
	}, [array]);

	const handleAddItem = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			e.preventDefault();
			if (e.key === "Enter") {
				const newArray = [
					...array,
					{
						id: "",
						text: inputValue,
						isCompleted: false,
					},
				];

				setArray(newArray);
				setInputValue("");
			}
		},
		[array, inputValue]
	);

	const handleClearCompletedStatus = () => {
		const idsToRemove = new Set();

		const listUpdated = array.filter((item) => {
			if (item.isCompleted) {
				idsToRemove.add(item.id);
			}
			return !item.isCompleted;
		});

		setArray(array.filter((item) => !item.isCompleted));

		Array.from(idsToRemove).forEach(async (id) => {
			await api.delete(`/todos/${id}`);
		});
	};

	const getTodos = async () => {
		const { data } = await api.get("/todos");
		setId(data.id);
		setArray(data);
	};

	useEffect(() => {
		getTodos();
	}, [updateList]);

	const handleSubmitInputForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await api.post("/todos", {
			text: inputValue,
			isChecked: false,
		});
		setInputValue("");
		getTodos();
	};

	const handleClickFilter = async (filter: string) => {
		let path = "";

		switch (filter) {
			case "All":
				path = "/todos";
				break;
			case "Active":
				path = "/active";
				break;
			case "Completed":
				path = "/completed";
				break;
			default:
				path = "/todos";
				break;
		}

		const { data } = await api.get(path);
		setArray(data);

		setFilter(filter);
		setCurrentButtonClicked(filter);
	};

	const handleDelete = useCallback(
		async (id: string) => {
			await api.delete(`/todos/${id}`);
			setUpdateList((oldState) => !oldState);
		},
		[array]
	);

	const handleCheck = useCallback(
		(id: string) => {
			const newArray = array.map((item) => {
				if (item.id === id) {
					item.isCompleted = !item.isCompleted;
				}
				return item;
			});
			setArray(newArray);
			api.put(`/todos/${id}`);
		},
		[array]
	);

	return (
		<Container urlImg={urlImg}>
			<ContainerContent>
				<div>
					<h3>TODO</h3>
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
									isChecked={item.isCompleted}
									onChangeChecked={() => handleCheck(item.id)}
								/>
							);
						})}
					</ItemsList>
					{!isListEmpty && (
						<FooterList>
							<div>
								<ItemsLeftFooter>
									<span>{array.filter((item) => item.isCompleted === false).length} items left</span>
								</ItemsLeftFooter>
							</div>
							<div>
								{options.map((item) => {
									return (
										<ButtonFooter
											active={item == currentButtonClicked}
											onClick={() => handleClickFilter(item)}
										>
											{item}
										</ButtonFooter>
									);
								})}
							</div>
							<div>
								<ButtonFooter onClick={handleClearCompletedStatus}>Clear Completed</ButtonFooter>
							</div>
						</FooterList>
					)}
				</ContainerItems>
			</ContainerContent>
		</Container>
	);
};
