import { moment } from '../pages/index';

export const calcTimes = (
	jour: Date,
	heure_ouverture: number,
	heure_fermeture: number
) => {
	const day_start = moment(jour).startOf('day').hours(heure_ouverture); // 7 am
	const day_end = moment(jour).startOf('day').hours(heure_fermeture); // 10 pm
	const day = moment.range(day_start, day_end);
	const time_slots = Array.from(day.by('minutes', { step: 20 }));
	console.log(time_slots[0]);
	return time_slots;
};

export const getDatesTobeExcluded = (
	arr_of_offs: number[],
	current_date: Date
) => {
	const start = moment(current_date);
	const end = moment(current_date).add(2, 'month');

	console.log({
		same: start.isSame(end),
	});

	const result_arr: Date[] = [];

	for (let index = 0; index < arr_of_offs.length; index++) {
		const element = arr_of_offs[index];
		const tmp = start.clone().day(element);

		while (tmp.isBefore(end)) {
			tmp.add(7, 'days');
			result_arr.push(tmp.toDate());
		}
	}
	console.log(result_arr);

	return result_arr;
};
