import React from 'react';
import Select from 'react-select';

interface IDodMetaDate {
	id: string;
	added_by: string;
	username: string;
	specialite: { value: string; label: string }[];
	selectedSpec: string;
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
	return (
		<div>
			{/* <div className="w-full min-h-screen absolute"></div> */}
			<form className="space-y-4 text-gray-700">
				<div className="flex flex-wrap">
					<div className="w-full mb-4">
						<label className="block mb-1" htmlFor="formGridCode_card">
							ID medecince
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="formGridCode_card"
							value={id}
							disabled
						/>
					</div>
					<div className="w-full mb-4">
						<label className="block mb-1" htmlFor="formGridCode_card">
							Ajouté Par
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="formGridCode_card"
							value={added_by}
							disabled
						/>
					</div>
					<div className="w-full mb-4">
						<label className="block mb-1" htmlFor="formGridCode_card">
							Email
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="formGridCode_card"
							value={username}
							disabled
						/>
					</div>
					<div className="w-full mb-4">
						<label className="block mb-1" htmlFor="formGridCode_card">
							Password
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="password"
							id="formGridCode_card"
							placeholder="password"
						/>
					</div>
					<div className="w-full mb-4">
						<label className="block mb-1" htmlFor="formGridCode_card">
							Password Confirmation
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="password"
							id="formGridCode_card"
							placeholder="password confirm"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
					<div className="w-full px-2 md:w-1/2">
						<label className="block mb-1" htmlFor="formGridCode_name">
							First name
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="formGridCode_name"
						/>
					</div>
					<div className="w-full px-2 md:w-1/2">
						<label className="block mb-1" htmlFor="formGridCode_last">
							Last name
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="formGridCode_last"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
					<div className="w-full px-2 md:w-1/3">
						<label className="block mb-1" htmlFor="formGridCode_month">
							Adresse Clinique
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="formGridCode_month"
						/>
					</div>
					<div className="w-full px-2 md:w-1/3">
						<label className="block mb-1" htmlFor="formGridCode_year">
							Tel-portable
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="formGridCode_year"
						/>
					</div>
					<div className="w-full px-2 md:w-1/3">
						<label className="block mb-1" htmlFor="formGridCode_cvc">
							Telephone Fixe
						</label>
						<input
							className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="formGridCode_cvc"
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
					<label className="block mb-1" htmlFor="formGridCode_card">
						Tarifs (En Dirham)
					</label>
					<input
						className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
						type="number"
						id="formGridCode_card"
						min={50}
						max={999999}
					/>
				</div>

				<div className="w-full">
					<button
						className="text-blue-500 bg-transparent border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase outline-none focus:outline-none ease-linear transition-all duration-150 w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
						type="button"
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
