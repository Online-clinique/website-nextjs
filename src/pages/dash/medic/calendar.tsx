import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Layout from '../../../components/Layout';

import { GetServerSideProps } from 'next'
import { axiosInstance } from '../../../services/axios-instance';



const localizer = momentLocalizer(moment);


export const getServerSideProps: GetServerSideProps = async (context) => {
	const calendar = await axiosInstance
		.get('/doctor/me/calendar', {
			headers: {
				cookie: context.req.headers.cookie || '',
			},
		})
		.catch((err) => null);
	return {
		props: {
			user: calendar ? calendar.data : null,
		}, // will be passed to the page component as props
	};
};

interface IEventObject {
	title: string;
	start: Date;
	end: Date;
}

function CalendarVue({ user }) {
	const [CalendarList, setCalendarList] = React.useState<IEventObject[]>(user?.calendar || [{
		start: moment().toDate(),
		end: moment().add(20, 'minute').toDate(),
		title: 'Mohamed'
	}]);

	return (
		<Layout absolute={false}>
			{
				!user ?
					<div className="w-3/4 justify-center mx-auto p-5 mt-10">
						<Calendar
							localizer={localizer}
							events={CalendarList}
							startAccessor="start"
							endAccessor="end"
							style={{ height: 500 }}
						/>
					</div>
					: null
			}
		</Layout>
	);
}

export default CalendarVue;
