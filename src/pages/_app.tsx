import '../styles/main.css';
import '../styles/timepicket.css';
import { AppWrapper } from '../context/index';
import { SnackbarProvider } from 'notistack';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

export const moment = extendMoment(Moment);

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
