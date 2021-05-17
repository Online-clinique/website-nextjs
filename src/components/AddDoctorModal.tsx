import React from 'react';

import { useSnackbar } from 'notistack';
import { axiosInstance } from '../services/axios-instance';

function AddDoctorModal({ setShowDoctorModal }) {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const [email, setEmail] = React.useState('');

	async function addDoctor(event: any) {
		event.preventDefault();

		if (email) {
			const res = await axiosInstance
				.post('/medic/doc', {
					username: email,
				})
				.catch((err) => {
					enqueueSnackbar('Failed to add doctor', {
						variant: 'warning',
					});
					return err;
				});

			if (res.data?.status === 200) {
				enqueueSnackbar('Success, sent email to doctor', {
					variant: 'success',
				});
			}
		} else {
			enqueueSnackbar('Please give email adresse', {
				variant: 'warning',
			});
		}
	}

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
										Ajouter Un Nouveau Docteur
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowDoctorModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<form onSubmit={addDoctor}>
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<input
												type="text"
												placeholder="Email du docteur"
												className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
												name="email"
												id="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
											<span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
												<i className="fas fa-user-md"></i>
											</span>
										</div>
									</form>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowDoctorModal(false)}
									>
										Close
									</button>
									<button
										className="bg-green-300 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={addDoctor}
									>
										Soumettre Docteur
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

export default AddDoctorModal;
