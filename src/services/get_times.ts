import { moment } from '../pages/_app';

export const calcTimes = (jour: Date, time_debut: string, time_fin: string) => {
	const splitDebut = time_debut.split(/:/);
	const splitFin = time_fin.split(/:/);
	const day_start = moment(jour)
		.startOf('day')
		.hours(+splitDebut[0])
		.minute(+splitDebut[1]); // 7 am
	const day_end = moment(jour)
		.startOf('day')
		.hours(+splitFin[0])
		.minute(+splitFin[1]); // 10 pm
	const day = moment.range(day_start, day_end);
	const time_slots = Array.from(day.by('minutes', { step: 20 }));
	console.log(time_slots[0]);
	time_slots.pop();
	return time_slots;
};

export const getDatesTobeExcluded = (days_off: string, current_date: Date) => {
	const arr_of_offs = days_off.split(',').map((num) => +num);
	const start = moment(current_date);
	const end = moment(current_date).add(2, 'months');

	// console.log({
	// 	same: start.isSame(end),
	// });

	const result_arr: Date[] = [];

	for (let index = 0; index < arr_of_offs.length; index++) {
		const element = arr_of_offs[index];
		const tmp = start.clone().day(element);
		console.log(tmp.format('LLL'));
		while (tmp.isBefore(end)) {
			result_arr.push(tmp.toDate());
			tmp.add(7, 'days');
		}
	}
	// console.log(result_arr);

	return result_arr;
};
