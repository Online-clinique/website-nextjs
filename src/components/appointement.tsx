import { useSnackbar } from 'notistack';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { moment } from '../pages/_app';
import { axiosInstance } from '../services/axios-instance';
import { calcTimes, getDatesTobeExcluded } from '../services/get_times';
import { IDoctor } from '../utils/doctor.interface';

function Appointement({
	days_off,
	verified,
	profile,
	taken,
}: {
	days_off: string;
	verified: boolean;
	profile: IDoctor;
	taken: {
		status: number;
		payload: { start: string }[];
	};
}) {
	const [startDate, setStartDate] = React.useState<Date | null>(null);
	const [date_time, setDate_time] = React.useState<string | null>(null);
	const [reason, setReason] = React.useState<string | null>(null);
	const { enqueueSnackbar } = useSnackbar();

	const HandleAppointement = async (event) => {
		try {
			const appointement_timestamp = moment(startDate)
				.hour(+date_time.split(/:/)[0])
				.minute(+date_time.split(/:/)[1]);
			const response = await axiosInstance
				.post('/appointement/take', {
					start_date: appointement_timestamp.format(),
					end_date: appointement_timestamp.add(20, 'minute').format(),
					reason,
					doctor_id: profile.id,
				})
				.then((res) => {
					// console.log(res.data);
					return res.data;
				})
				.catch((err) => {
					return err.response.data.message;
				});

			if (response.status === 201) {
				enqueueSnackbar('Rendez-vous crée, attendez un contact par télephone', {
					variant: 'success',
				});
			} else {
				throw new Error(response.message);
			}
		} catch (error) {
			enqueueSnackbar(error.message, {
				variant: 'warning',
			});
		}
	};

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
					<div className="bg-red-50 rounded-lg w-full">
						<h1 className="py-4 text-center text-lg underline font-semibold">
							Détails Docteur
						</h1>
						<h1 className="py-4 text-left text-md font-mono bg-yellow-200 px-2">
							- A propos du docteur
						</h1>
						<div className="border  border-cyan-100 p-4">{profile.about}</div>
						<h1 className="py-4 text-left text-md font-mono bg-yellow-200 px-2">
							- Spécialité
						</h1>
						<div className="border  border-cyan-100 p-4">
							{profile.expertise
								.map((exp) => exp.slug.toUpperCase())
								.join(' | ')}
						</div>
						<h1 className="py-4 text-left text-md font-mono bg-yellow-200 px-2">
							- Adresse Cabinet
						</h1>
						<div className="border  border-cyan-100 p-4">
							{profile.adresse_cabinet}
						</div>
						<h1 className="py-4 text-left text-md font-mono bg-yellow-200 px-2">
							- Ville
						</h1>
						<div className="border  border-cyan-100 p-4">{profile.ville}</div>
						<h1 className="py-4 text-left text-md font-mono bg-yellow-200 px-2">
							- Contact Email
						</h1>
						<div className="border  border-cyan-100 p-4">
							{profile.username}
						</div>

						<h1 className="py-4 text-left text-md font-mono bg-yellow-200 px-2">
							- Créneau
						</h1>
						<div className="border  border-cyan-100 p-4">
							{profile.debut_jour && profile.fin_jour
								? `De ${profile.debut_jour} a ${profile.fin_jour}`
								: ''}
						</div>
						<h1 className="py-4 text-left text-md font-mono bg-yellow-200 px-2">
							- Status Du Compte
						</h1>
						{profile.account_status === 'active' ? (
							<div className="border  border-cyan-100">
								<p className="flex flex-wrap w-3/12 py-2 px-1 rounded-lg justify-center my-2 bg-green-500 mx-auto">
									{profile.account_status}
								</p>
							</div>
						) : (
							<div className="border  border-cyan-100 p-4">
								<p className="flex flex-wrap w-3/12 py-2 px-1 rounded-lg justify-center my-2 bg-yellow-600 mx-auto">
									{profile.account_status}
								</p>
							</div>
						)}
					</div>
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
									dateFormat={'dd/MM/yyyy'}
								/>
							</div>
							<div className="px-9"></div>
							{startDate ? (
								<div className="mt-9 bg-cyan-50 py-1 px-1">
									<h1 className="text-lg flex underline font-semibold">
										Choisir le temps du rendez-vous
									</h1>
									<div className="my-2 mx-4 flex flex-wrap">
										{calcTimes(startDate, profile.debut_jour, profile.fin_jour)
											.filter((val) => {
												return !taken?.payload?.includes({
													start: val.format(),
												});
											})
											.map((mmnt) => {
												return mmnt.format('HH:mm') === date_time ? (
													<button
														className="flex py-2 px-4 bg-cyan-600 rounded-md mx-2 my-4 hover:"
														name={mmnt.format('HH:mm')}
														onClick={(e: any) => {
															setDate_time(mmnt.format('HH:mm'));
														}}
													>
														{mmnt.format('HH:mm')}
													</button>
												) : (
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
									onClick={HandleAppointement}
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
					<div
						className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 h-20"
						role="alert"
					>
						<p className="font-bold">Docteur Non verifié</p>
						<p className="text-sm">
							Le docteur Doit remplir ses créneaux et Jour férié Avant pouvoir
							Prendre Des render Vous
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default Appointement;
