import React from 'react';
import { useSnackbar } from 'notistack';
import { axiosInstance } from '../services/axios-instance';
import { IDoctor } from '../utils/doctor.interface';
// import * as TimePicker from 'basic-react-timepicker';

function CreneauModal({
	setShowModal,
	doctor,
}: {
	setShowModal: any;
	doctor: IDoctor;
}) {
	const { closeSnackbar, enqueueSnackbar } = useSnackbar();

	const splitDebut = doctor.debut_jour?.split(/:/);
	const splitFini = doctor.fin_jour?.split(/:/);
	const [start, setStart] = React.useState({
		hours: splitDebut ? splitDebut[0] : '',
		minute: splitDebut ? splitDebut[1] : '',
	});
	const [fin, setFin] = React.useState({
		hours: splitFini ? splitFini[0] : '',
		minute: splitFini ? splitFini[1] : '',
	});

	const timeGex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

	const SubmitCreneau = () => {
		console.log(`Debut ${start.hours}:${start.minute}`);
		console.log(`Fin ${fin.hours}:${fin.minute}`);

		if (
			!timeGex.test(`${start.hours}:${start.minute}`) ||
			!timeGex.test(`${fin.hours}:${fin.minute}`)
		) {
			enqueueSnackbar('Valeur Entré non-valide', {
				variant: 'warning',
			});
		} else {
			axiosInstance
				.post('/doctor/fix_time', {
					d: `${start.hours}:${start.minute}`,
					f: `${fin.hours}:${fin.minute}`,
				})
				.then((res) => {
					enqueueSnackbar('Créneau fixé');
				})
				.catch((err) => {
					enqueueSnackbar('Créneau fixé', {
						variant: 'warning',
					});
				});
		}
	};

	return (
		<div>
			<div>
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold">
										Changé votre créneaux
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<p className="my-4 text-lg leading-relaxed">
										<div className="w-full mx-auto">
											<h1 className="text-lg font-bold ">
												Heure de Début de journé
											</h1>
											<div className="flex flex-wrap p-4">
												<label htmlFor="hours_d">Heur Début</label>
												<input
													type="text"
													className="mx-4 border-cyan-500 border-2 rounded-md max-w-sm"
													placeholder="14"
													id="hours_d"
													name="hours_d"
													value={start.hours}
													onChange={(e) => {
														setStart({
															hours: e.target.value,
															minute: start.minute,
														});
													}}
												/>
											</div>
											<div className="flex flex-wrap p-4">
												<label htmlFor="min_d">Minute Début</label>
												<input
													type="text"
													className="mx-4 border-cyan-500 border-2 rounded-md max-w-sm"
													placeholder="57"
													id="min_d"
													name="min_d"
													value={start.minute}
													onChange={(e) => {
														setStart({
															hours: start.hours,
															minute: e.target.value,
														});
													}}
												/>
											</div>
										</div>
										<div className="w-full mx-auto">
											<h1 className="text-lg font-bold ">
												Heure de Fin de journé
											</h1>
											<div className="flex flex-wrap p-4">
												<label htmlFor="hours_fin">Heur Fin</label>
												<input
													type="text"
													className="mx-4 border-cyan-500 border-2 rounded-md max-w-sm"
													placeholder="14"
													id="hours_fin"
													name="hours_fin"
													value={fin.hours}
													onChange={(e) => {
														setFin({
															hours: e.target.value,
															minute: start.minute,
														});
													}}
												/>
											</div>
											<div className="flex flex-wrap p-4">
												<label htmlFor="min_fin">Minute Fin</label>
												<input
													type="text"
													className="mx-4 border-cyan-500 border-2 rounded-md max-w-sm"
													placeholder="57"
													id="min_fin"
													name="min_fin"
													value={fin.minute}
													onChange={(e) => {
														setFin({
															hours: fin.hours,
															minute: e.target.value,
														});
													}}
												/>
											</div>
										</div>
									</p>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className="text-cyan-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={SubmitCreneau}
									>
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			</div>
		</div>
	);
}

export default CreneauModal;
