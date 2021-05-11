import '../styles/globals.css';
import { AppWrapper } from '../context/index';

function MyApp({ Component, pageProps }) {
	return (
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>
	);
}

export default MyApp;
