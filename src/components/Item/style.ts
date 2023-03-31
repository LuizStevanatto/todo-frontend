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

	span {
		display: flex;
		align-items: left;
		justify-content: center;
		margin-bottom: 1rem;
		gap: 1rem;
		background-color: red;
		float: left;
	}
`;
