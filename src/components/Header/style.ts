import styled from "styled-components";

interface IUrlProps {
	urlImg: string;
}

export const Container = styled.div<IUrlProps>`
	width: 100%;
	height: 300px;
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
			letter-spacing: 0.5rem;
		}
	}
`;

export const ContainerInput = styled.input`
	width: 100%;
	height: 3rem;
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
`;
