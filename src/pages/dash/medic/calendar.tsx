import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Layout from '../../../components/Layout';

const localizer = momentLocalizer(moment);

interface IEventObject {
	title: string;
	start: Date;
	end: Date;
}

function CalendarVue() {
	const [CalendarList, setCalendarList] = React.useState<IEventObject[]>([
		{
			title: 'Ahmed',
			start: moment().toDate(),
			end: moment().add(1, 'hours').toDate(),
		},
	]);

	return (
		<Layout absolute={true}>
			<div className="w-3/4 justify-center mx-auto p-5 mt-10">
				<Calendar
					localizer={localizer}
					events={CalendarList}
					startAccessor="start"
					endAccessor="end"
					style={{ height: 500 }}
				/>
			</div>
		</Layout>
	);
}

export default CalendarVue;
