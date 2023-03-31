import styled from "styled-components";

interface IUrlProps {
	urlImg: string;
}

export const Container = styled.div<IUrlProps>`
	width: 100%;
	height: 300px;

	padding: 0 1rem;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding-top: 5rem;

	background-image: ${({ urlImg }) => `url(${urlImg})`};
	background-image: no-repeat;
	background-position: center;
	background-size: cover;
`;

export const ContainerContent = styled.div`
	max-width: 600px;
	width: 100%;
	height: 8rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h3 {
			color: #f1f1f1;
			font-size: 2.5rem;
			letter-spacing: 1rem;
		}
	}
`;

export const ContainerInput = styled.form`
	input {
		width: 100%;
		height: 3.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #f1f1f1;
		border-radius: 0.5rem;
		padding: 0 1rem;
		background-color: hsl(235, 24%, 19%);
		border-style: none;
		color: #f1f1f1;
		outline: none;
		margin-top: 3rem;
	}
`;

export const ContainerItems = styled.div`
	background-color: hsl(235, 24%, 19%);

	max-width: 600px;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border-radius: 8px;

	margin-top: 2rem;
`;

export const ItemsList = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

export const FooterList = styled.div`
	width: 100%;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;
	background-color: hsl(235, 24%, 19%);
	color: #f1f1f1;

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
`;

export const ItemsLeftFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 0.8rem;
	color: #f1f1f1;
	opacity: 0.5;

	span {
		color: inherit;
	}
`;

interface IButtonFooterProps {
	active?: boolean;
}

export const ButtonFooter = styled.button`
	background-color: transparent;
	border-style: none;
	outline: none;
	cursor: pointer;
	opacity: 0.5;

	/* hover */
	:hover {
		opacity: 1;
		transition: 0.3s;
	}

	color: ${(props: IButtonFooterProps) => (props.active ? "hsl(220, 98%, 61%)" : "#f1f1f1")};
`;
