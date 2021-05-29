import React, { SyntheticEvent } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Layout from '../../../components/Layout';

import { GetServerSideProps } from 'next';
import { axiosInstance } from '../../../services/axios-instance';
import { Response } from '../../../utils/appointement.interface';

const localizer = momentLocalizer(moment);

export const getServerSideProps: GetServerSideProps = async (context) => {
	const calendar = await axiosInstance
		.get('/my-appointements', {
			headers: {
				cookie: context.req.headers.cookie || '',
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => null);
	console.log(calendar);
	return {
		props: {
			user: calendar ? calendar : null,
		}, // will be passed to the page component as props
	};
};

interface IEventObject {
	title: string;
	start: Date;
	end: Date;
}

function CalendarVue({ user }: { user: Response }) {
	const [CalendarList, setCalendarList] = React.useState<IEventObject[]>(
		user.payload.appoint.map((appoint) => {
			return {
				title: appoint.title,
				start: moment(appoint.start).toDate(),
				end: moment(appoint.end).toDate(),
				extendedProps: {
					department: appoint.status.toUpperCase(),
				},
				description: appoint.status.toUpperCase(),
			};
		})
	);

	return (
		<Layout absolute={true}>
			{user ? (
				<div className="w-3/4 justify-center mx-auto p-5 mt-10">
					<Calendar
						localizer={localizer}
						events={CalendarList}
						startAccessor="start"
						endAccessor="end"
						style={{ height: 500 }}
						onSelectEvent={(event: any, e: SyntheticEvent) => {
							alert("C'est " + event.title + ' reason: ' + event.description);
						}}
					/>
				</div>
			) : null}
		</Layout>
	);
}

export default CalendarVue;
