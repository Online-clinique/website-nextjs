import '../styles/globals.css';
import '../styles/timepicket.css'
import { AppWrapper } from '../context/index';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
	return (
		<AppWrapper>
			<SnackbarProvider>
				<Component {...pageProps} />
			</SnackbarProvider>
		</AppWrapper>
	);
}

export default MyApp;
