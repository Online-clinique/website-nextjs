import { profile } from 'console';
import { months } from 'moment';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { moment } from '../pages/_app';
import { calcTimes, getDatesTobeExcluded } from '../services/get_times';
import { IDoctor } from '../utils/doctor.interface';

function Appointement({
	days_off,
	verified,
	profile,
}: {
	days_off: string;
	verified: boolean;
	profile: IDoctor;
}) {
	const [startDate, setStartDate] = React.useState<Date | null>(null);
	const [date_time, setDate_time] = React.useState<string | null>(null);
	const [reason, setReason] = React.useState<string | null>(null);

	const DatePickerInput = React.forwardRef(
		({ value, onClick }: any, ref: any) => (
			<button
				className="date_picker py-2 px-4 bg-cyan-500 rounded-lg text-white mx-auto"
				onClick={onClick}
				ref={ref}
			>
				{value || 'Selectioner Une Date au rendez-vous'}
			</button>
		)
	);

	return (
		<div>
			<div className="w-full grid grid-cols-2 justify-between">
				<div className="w-11/12 mx-auto justify-center">
					<div className="bg-red-50 rounded-lg w-full">sh</div>
				</div>
				{verified ? (
					<div className="w-11/12 mx-auto justify-center">
						<div className="bg-red-50 rounded-lg w-full py-4">
							<div className="flex justify-around py-4">
								<div className="flex">
									<div className="text-lg font-semibold mt-1 underline">
										Choisir Votre Date de Render Vous:
									</div>
								</div>
								<DatePicker
									selected={startDate}
									onChange={(date) => setStartDate(date as Date)}
									customInput={<DatePickerInput />}
									className="flex"
									excludeDates={getDatesTobeExcluded(days_off, new Date())}
									maxDate={moment().add(2, 'months').toDate()}
									minDate={moment().add(1, 'day').toDate()}
									showTimeInput={false}
								/>
							</div>
							<div className="px-9"></div>
							{startDate ? (
								<div className="mt-9 bg-cyan-50 py-1 px-1">
									<h1 className="text-lg flex underline font-semibold">
										Choisir le temps du rendez-vous
									</h1>
									<div className="my-2 mx-4 flex flex-wrap">
										{calcTimes(
											startDate,
											profile.debut_jour,
											profile.fin_jour
										).map((mmnt) => {
											return (
												<button
													className="flex py-2 px-4 bg-cyan-300 rounded-md mx-2 my-4 hover:"
													name={mmnt.format('HH:mm')}
													onClick={(e: any) => {
														setDate_time(mmnt.format('HH:mm'));
													}}
												>
													{mmnt.format('HH:mm')}
												</button>
											);
										})}
									</div>
								</div>
							) : null}

							{date_time ? (
								<div className="mt-0 bg-green-50 py-1 px-1">
									<h1 className="text-lg flex underline font-semibold">
										Confirmation de votre Rendez-vous
									</h1>

									<p className="mt-3 text-lg"> Raison de votre rendez Vous</p>
									<textarea
										name="rz"
										id=""
										className="w-full rounded-md border-2 border-blue-400 p-5"
										onChange={(e) => {
											setReason(e.target.value);
										}}
										value={reason}
										maxLength={120}
									></textarea>
								</div>
							) : (
								''
							)}

							<div className="w-full justify-center">
								<button
									className="flex bg-red-400 py-2 px-4 rounded-lg mx-auto text-white mt-4"
									disabled={!(date_time && reason && startDate)}
								>
									Soumettre Votre Rendez-Vous
								</button>
							</div>

							{date_time && reason && startDate ? (
								<div className="flex justify-center mx-auto py-9">
									Rendez-vous le {moment(startDate).format('DD / MM / YYYY')} at{' '}
									{date_time}
								</div>
							) : (
								''
							)}
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
}

export default Appointement;
