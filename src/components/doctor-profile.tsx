import React from 'react';
import DefaultDoctorInfo from './default_doctor_info';
import Select from 'react-select';
import { days_of_the_week } from '../services/specialité';
// import TimePicker from 'react-time-picker/dist/entry.nostyle'

import { IDoctor } from '../utils/doctor.interface';
import { axiosInstance } from '../services/axios-instance';
import { useSnackbar } from 'notistack';
import { moment } from '../pages/_app';

function DoctorProfile({ doctor }: { doctor: IDoctor }) {
	const { closeSnackbar, enqueueSnackbar } = useSnackbar();
	// console.log(doctor);
	const [selectedSpec, setSelectedSpecialit] = React.useState<
		{
			value: string;
			label: string;
		}[]
	>(
		days_of_the_week.filter((daysofweek) => {
			return doctor.days_off.split(',').includes(daysofweek.value);
		})
	);
	const [value, onChange] = React.useState(moment().hour(6).minute(0));

	const handleChange = (event) => {
		console.log(event);
		onChange(event);
	};

	const submitDaysOff = async (event) => {
		// const {};
		event.preventDefault();
		if (!selectedSpec || selectedSpec.length < 1) {
			return enqueueSnackbar('Selectioné des jour ferié', {
				variant: 'warning',
			});
		}

		try {
			const response = await axiosInstance
				.post('/doctor/off', {
					arr_off: selectedSpec.map((selected) => selected.value).join(','),
				})
				.then((res) => {
					enqueueSnackbar('Jour ferié en été mise a jour', {
						variant: 'info',
					});
				});
		} catch (error) {
			console.log(error.message);
		}
	};

	// console.log(days_of_the_week)
	return (
		<div>
			<div>
				<main className="profile-page">
					<section className="relative block" style={{ height: '500px' }}>
						<div
							className="absolute top-0 w-full h-full bg-center bg-cover"
							style={{
								backgroundImage: doctor.cover_image || "url('/background.png')",
							}}
						>
							<span
								id="blackOverlay"
								className="w-full h-full absolute opacity-50 bg-black"
							></span>
						</div>
						<div
							className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
							style={{ height: '70px' }}
						>
							<svg
								className="absolute bottom-0 overflow-hidden"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="none"
								version="1.1"
								viewBox="0 0 2560 100"
								x="0"
								y="0"
							>
								<polygon
									className="text-gray-300 fill-current"
									points="2560 0 2560 100 0 100"
								></polygon>
							</svg>
						</div>
					</section>
					<section className="relative py-16 bg-gray-300">
						<div className="container mx-auto px-4">
							<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
								<DefaultDoctorInfo doctor={doctor} />
								<div className="p-9">
									<div className="mt-10 sm:mt-0">
										<div className="md:grid md:grid-cols-3 md:gap-6">
											<div className="md:col-span-1">
												<div className="px-4 sm:px-0">
													<h3 className="text-lg font-medium leading-6 text-gray-900">
														Choix des jours férié
													</h3>
													<p className="mt-1 text-sm text-gray-600">
														Cochez les que vous n'etes pas disponible
													</p>
												</div>
											</div>
											<div className="mt-5 md:mt-0 md:col-span-2">
												<form onSubmit={submitDaysOff}>
													<div className="shadow sm:rounded-md">
														<Select
															options={days_of_the_week}
															value={selectedSpec}
															onChange={(selected) => {
																// console.log(
																// 	selectedSpec.map((val) => val.value).join(',')
																// );
																setSelectedSpecialit(selected);
															}}
															className="w-full text-base placeholder-gray-600 rounded-lg focus:shadow-outline mb-10"
															isMulti
															isClearable
														/>
														{/* {selectedSpec ? (
															<div className="min-w-full p-9">
																<div className="w-full">
																	<p className="text-center mx-auto p-2 m-4 border border-1 rounded-md bg-cyan-300 text-gray-800 font-bold">
																		{selectedSpec.label}
																	</p>
																	<div className="flex flex-wrap justify-between">
																		<h1 className="text-lg font-semibold p-2">
																			Début journé
																		</h1>
																		<h1 className="text-lg font-semibold p-2">
																			Fin journé
																		</h1>
																	</div>
																	<div className="flex">
																		<div className="w-1/2">
																			<TimePicker
																				moment={value}
																				onChange={handleChange}
																				showSeconds={false}
																				locale="en"
																				className="w-1/2"
																			/>
																		</div>
																		<div className="w-1/2">
																			<TimePicker
																				moment={value}
																				onChange={handleChange}
																				showSeconds={false}
																				locale="en"
																				className="w-1/2"
																			/>
																		</div>
																	</div>
																</div>
															</div>
														) : null} */}
														<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
															<button
																type="submit"
																className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
															>
																Save
															</button>
														</div>
													</div>
												</form>
											</div>
										</div>
										<div className="hidden sm:block" aria-hidden="true">
											<div className="py-5">
												<div className="border-t border-gray-200" />
											</div>
										</div>
										<div className="md:grid md:grid-cols-3 md:gap-6">
											<div className="md:col-span-1">
												<div className="px-4 sm:px-0">
													<h3 className="text-lg font-medium leading-6 text-gray-900">
														Profile
													</h3>
													<p className="mt-1 text-sm text-gray-600">
														C'est infomation serons publique
													</p>
												</div>
											</div>
											<div className="mt-5 md:mt-0 md:col-span-2">
												<form onSubmit={submitDaysOff}>
													<div className="shadow sm:rounded-md sm:overflow-hidden">
														<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
															<div>
																<label
																	htmlFor="about"
																	className="block text-md font-medium text-gray-700 underline bold"
																>
																	A props de vous
																</label>
																<div className="mt-1">
																	<textarea
																		id="about"
																		name="about"
																		rows={3}
																		className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border p-1 border-gray-300 rounded-md"
																		placeholder="Je suis un docteur generaliste diplomé de paris"
																		defaultValue={''}
																		value={doctor.about}
																	/>
																</div>
																<p className="mt-2 text-sm text-gray-500">
																	Une bref description de votre profile.
																</p>
															</div>
															<div>
																<label className="block text-sm font-medium text-gray-700">
																	Photo
																</label>
																<div className="mt-1 flex items-center">
																	<span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
																		<svg
																			className="h-full w-full text-gray-300"
																			fill="currentColor"
																			viewBox="0 0 24 24"
																		>
																			<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
																		</svg>
																	</span>
																	<button
																		type="button"
																		className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
																	>
																		Changer
																	</button>
																</div>
															</div>
															<div>
																<label className="block text-sm font-medium text-gray-700">
																	Cover photo
																</label>
																<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
																	<div className="space-y-1 text-center">
																		<svg
																			className="mx-auto h-12 w-12 text-gray-400"
																			stroke="currentColor"
																			fill="none"
																			viewBox="0 0 48 48"
																			aria-hidden="true"
																		>
																			<path
																				d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
																				strokeWidth={2}
																				strokeLinecap="round"
																				strokeLinejoin="round"
																			/>
																		</svg>
																		<div className="flex text-sm text-gray-600">
																			<label
																				htmlFor="file-upload"
																				className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
																			>
																				<span>Upload a file</span>
																				<input
																					id="file-upload"
																					name="file-upload"
																					type="file"
																					className="sr-only"
																				/>
																			</label>
																			<p className="pl-1">or drag and drop</p>
																		</div>
																		<p className="text-xs text-gray-500">
																			PNG, JPG, GIF up to 10MB
																		</p>
																	</div>
																</div>
															</div>
														</div>
														<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
															<button
																type="submit"
																className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
															>
																Save
															</button>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
									<div className="hidden sm:block" aria-hidden="true">
										<div className="py-5">
											<div className="border-t border-gray-200" />
										</div>
									</div>
									<div className="mt-10 sm:mt-0">
										<div className="md:grid md:grid-cols-3 md:gap-6">
											<div className="md:col-span-1">
												<div className="px-4 sm:px-0">
													<h3 className="text-lg font-medium leading-6 text-gray-900">
														Notifications
													</h3>
													<p className="mt-1 text-sm text-gray-600">
														Decidé quelles genres de notification a recevoir
													</p>
												</div>
											</div>
											<div className="mt-5 md:mt-0 md:col-span-2">
												<form action="#" method="POST">
													<div className="shadow overflow-hidden sm:rounded-md">
														<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
															<fieldset>
																<legend className="text-base font-medium text-gray-900">
																	Par Email
																</legend>
																<div className="mt-4 space-y-4">
																	<div className="flex items-start">
																		<div className="flex items-center h-5">
																			<input
																				id="comments"
																				name="comments"
																				type="checkbox"
																				className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
																			/>
																		</div>
																		<div className="ml-3 text-sm">
																			<label
																				htmlFor="comments"
																				className="font-medium text-gray-700"
																			>
																				Demande De rendez-vous
																			</label>
																			<p className="text-gray-500">
																				Etre notifier quand un patient demande
																				un rendez vous.
																			</p>
																		</div>
																	</div>
																	<div className="flex items-start">
																		<div className="flex items-center h-5">
																			<input
																				id="candidates"
																				name="candidates"
																				type="checkbox"
																				className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
																			/>
																		</div>
																		<div className="ml-3 text-sm">
																			<label
																				htmlFor="candidates"
																				className="font-medium text-gray-700"
																			>
																				Rendez-vous Ratté
																			</label>
																			<p className="text-gray-500">
																				Etres notifier quand un patient a ratté
																				un rendez-vous
																			</p>
																		</div>
																	</div>
																	{/* <div className="flex items-start">
																	<div className="flex items-center h-5">
																		<input id="offers" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
																	</div>
																	<div className="ml-3 text-sm">
																		<label htmlFor="offers" className="font-medium text-gray-700">Offers</label>
																		<p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
																	</div>
																</div> */}
																</div>
															</fieldset>
														</div>
														<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
															<button
																type="submit"
																className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
															>
																Save
															</button>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}

export default DoctorProfile;
