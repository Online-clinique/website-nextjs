import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import * as Moment from 'moment';
import { DateRange, extendMoment } from 'moment-range';
import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { calcTimes, getDatesTobeExcluded } from '../services/get_times';
import Layout from '../components/Layout';

export const moment = extendMoment(Moment);

const DatePickerInput = forwardRef(({ value, onClick }: any, ref: any) => (
	<button
		className="date_picker py-2 px-4 bg-cyan-500 rounded-lg text-white mx-auto"
		onClick={onClick}
		ref={ref}
	>
		{value || 'Selectioner Une Date au rendez-vous'}
	</button>
));

export default function Home() {
	const [startDate, setStartDate] = useState<Date | Date[]>(null);

	// time_slots.forEach((time_slot) => {
	// 	console.log(time_slot.format('hh:mm'));
	// });

	// console.log(moment.range(moment(), moment().add(2, 'month')));
	return (
		<div>
			<Layout absolute>{''}</Layout>
		</div>
	);
}
