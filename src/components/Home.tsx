import { Container } from "../global";
import { Header } from "./Header/Header";

export default function Home() {
	const isDark = true;

	const urlPathBackground = isDark ? "bg-desktop-dark.jpg" : "bg-desktop-light.jpg";
	return (
		<Container>
			<Header urlImg={urlPathBackground}></Header>
			{/* <Content></Content> */}
		</Container>
	);
}
