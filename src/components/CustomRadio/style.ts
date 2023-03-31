import styled from "styled-components";

export const Radio = styled.input``;

export const Container = styled.div`
	width: 50px;
	height: 50px;
	margin-top: 0.5rem;

	> div {
		position: absolute;
	}

	input {
		width: 25px;
		height: 25px;
		position: relative;
		opacity: 0;
		cursor: pointer;
	}
`;

export const CircleNotClicked = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background: transparent;
	border: 1px solid gray;

	background: hsl(235, 24%, 19%);
`;

export const CircleClicked = styled.div`
	width: 25px;
	height: 25px;

	display: grid;
	place-items: center;
	border-radius: 50%;
	border: 1px solid gray;
	background: rgb(192, 88, 243);
	background: linear-gradient(95deg, rgba(192, 88, 243, 1) 7%, rgba(87, 221, 255, 1) 100%);

	svg {
		color: #f1f1f1;
	}
`;
