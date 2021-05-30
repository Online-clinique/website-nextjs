import React from 'react';
import Select from 'react-select';
import { axiosInstance } from '../services/axios-instance';

import { useSnackbar } from 'notistack';
import { cities } from '../services/specialité';
import Router from 'next/router';

interface IDodMetaDate {
	id: string;
	added_by: string;
	username: string;
	specialite: { value: string; label: string }[];
	selectedSpec: { value: string; label: string }[];
	setSelectedSpecialit: any;
}

function AddDoctorForm({
	id,
	added_by,
	specialite,
	username,
	selectedSpec,
	setSelectedSpecialit,
}: IDodMetaDate) {
	const { closeSnackbar, enqueueSnackbar } = useSnackbar();
	const [ville, setVille] =
		React.useState<{ label: string; value: string }>(null);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const {
			id_admin,
			id_medic,
			email,
			password,
			password_confirm,
			first_name,
			last_name,
			addresse_cabinet,
			tel_pers,
			tel_fixe,
			tarifs,
			cni,
		} = event.target;
		// return;

		const result = await axiosInstance
			.post('/medic/continue', {
				id_admin: id_admin.value,
				id_medic: id_medic.value,
				email: email.value,
				password: password.value,
				password_confirm: password_confirm.value,
				first_name: first_name.value,
				last_name: last_name.value,
				addresse_cabinet: addresse_cabinet.value,
				tel_pers: tel_pers.value,
				tel_fixe: tel_fixe.value,
				tarifs: tarifs.value,
				cni: cni.value,
				specialite: {
					...selectedSpec,
				},
				ville: ville,
			})
			.then((res) => res.data)
			.catch((err) => {
				// console.log(err);
				// console.log(error.response.data);
				return err.response.data;
			});
		if (result?.status === 200) {
			enqueueSnackbar('Success Votre compte est prét"', {
				variant: 'success',
			});
			setTimeout(() => {
				Router.push('/dash/medic');
			}, 1000);
		} else {
			// console.log();

			enqueueSnackbar(result.message, {
				variant: 'warning',
			});
		}
	};

	return (
		<div>
			{/* <div className="w-full min-h-screen absolute"></div> */}
			<form className="space-y-4 text-gray-700" onSubmit={handleSubmit}>
				<div className="flex flex-wrap">
					<div className="w-full mb-4">
						<label className="block mb-1" htmlFor="id_medic">
							ID Medecin
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="id_medic"
							name="id_medic"
							value={id}
							disabled
							required
						/>
					</div>
					<div className="w-full mb-4">
						<label className="block mb-1" htmlFor="id_admin">
							Ajouté Par
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="id_admin"
							name="id_admin"
							value={added_by}
							disabled
							required
						/>
					</div>
					<div className="w-full mb-4">
						<label className="block mb-1" htmlFor="email">
							Email
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="email"
							name="email"
							value={username}
							disabled
							required
						/>
					</div>
					<div className="w-full mb-4">
						<label className="block mb-1" htmlFor="password">
							Password
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="password"
							id="password"
							name="passwor"
							placeholder="password"
							required
						/>
					</div>
					<div className="w-full mb-4">
						<label className="block mb-1" htmlFor="password_confirm">
							Password Confirmation
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="password"
							id="password_confirm"
							name="password_confirm"
							placeholder="password confirm"
							required
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
					<div className="w-full px-2 md:w-1/2">
						<label className="block mb-1" htmlFor="first_name">
							First name
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="first_name"
							name="first_name"
							required
						/>
					</div>
					<div className="w-full px-2 md:w-1/2">
						<label className="block mb-1" htmlFor="last_name">
							Last name
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="last_name"
							name="last_name"
							required
						/>
					</div>
				</div>
				<div className="w-full mb-4">
					<label className="block mb-1" htmlFor="cni">
						CNI
					</label>
					<input
						className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
						type="text"
						id="cni"
						name="cni"
						required
					/>
				</div>
				<div className="w-full mb-4">
					<label className="block mb-1" htmlFor="Ville">
						Ville
					</label>
					<Select
						options={cities}
						onChange={(option) => {
							console.log(option);
							setVille(option);
						}}
						isMulti={false}
					/>
				</div>
				<div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
					<div className="w-full px-2 md:w-1/3">
						<label className="block mb-1" htmlFor="addresse_clinique">
							Adresse Cabinet
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="addresse_cabinet"
							name="addresse_cabinet"
							required
						/>
					</div>
					<div className="w-full px-2 md:w-1/3">
						<label className="block mb-1" htmlFor="tel_pers">
							Tel-portable
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="tel_pers"
							name="tel_pers"
							required
						/>
					</div>
					<div className="w-full px-2 md:w-1/3">
						<label className="block mb-1" htmlFor="tel_fixe">
							Telephone Fixe
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="tel_fixe"
							name="tel_fixe"
							required
						/>
					</div>
				</div>

				<div className="flex flex-wrap space-y-4 md:space-y-0">
					<label className="block mb-1" htmlFor="formGridCode_cvc">
						Specialité
					</label>

					<Select
						options={specialite}
						value={selectedSpec}
						onChange={(selected) => {
							console.log(selected);
							if (selected.length > 3) {
								return;
							}
							setSelectedSpecialit(selected);
						}}
						className="w-full text-base placeholder-gray-600 rounded-lg focus:shadow-outline mb-10"
						isMulti
						isSearchable
						isClearable
					/>
				</div>
				<div className="w-full mb-4">
					<label className="block mb-1" htmlFor="tarifs">
						Tarifs (En Dirham)
					</label>
					<input
						className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
						type="number"
						id="tarifs"
						name="tarifs"
						min={50}
						max={999999}
						required
					/>
				</div>

				<div className="w-full">
					<button
						className="text-blue-500 bg-transparent border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase outline-none focus:outline-none ease-linear transition-all duration-150 w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
						type="submit"
					>
						Soumettre Compte
					</button>
				</div>
				{/* <div className="w-full flex justify-between pt-7 ">
				<button
					className="text-blue-400 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3  rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="button"
				>
					<i className="fas fa-heart"></i> Submit
				</button>
			</div> */}
			</form>
		</div>
	);
}

export default AddDoctorForm;
