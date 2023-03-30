import { Container, ContainerContent, ContainerInput } from "./style";

interface IUrlProps {
	urlImg: string;
}

export const Header = ({ urlImg }: IUrlProps) => {
	return (
		<Container urlImg={urlImg}>
			<ContainerContent>
				<div>
					<h3>TODO</h3>
					<button>mudar tema</button>
				</div>
				<ContainerInput></ContainerInput>
			</ContainerContent>
		</Container>
	);
};
