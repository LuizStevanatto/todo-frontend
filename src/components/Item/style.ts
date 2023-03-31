import styled from "styled-components";

export const ItemContainer = styled.div`
	width: 100%;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 1rem;
	margin-top: 1rem;
	background-color: hsl(235, 24%, 19%);
	color: #f1f1f1;
	font-weight: 500;
	cursor: pointer;
	border-bottom: 0.1px solid hsl(234, 39%, 85%);
`;

interface IItemTextProps {
	isChecked?: boolean;
}

export const ItemText = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
	background-color: hsl(235, 24%, 19%);
	color: #f1f1f1;
	cursor: pointer;

	text-decoration: ${(props: IItemTextProps) => (props.isChecked ? "line-through" : "none")};
	opacity: ${(props: IItemTextProps) => (props.isChecked ? "0.5" : "1")};
`;

export const ExcludeIcon = styled.div`
	width: 1rem;
	height: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: hsl(235, 24%, 19%);
	color: #f1f1f1;
	cursor: pointer;
	opacity: 0.5;
	margin-bottom: 1rem;

	/* hover */
	:hover {
		opacity: 1;
		transition: 0.3s;
	}
`;
