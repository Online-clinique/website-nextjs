import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { axiosInstance } from '../../../services/axios-instance';
import Layout from '../../../components/Layout';
import Select from 'react-select';
import { specialite } from '../../../services/specialité';
import AddDoctorForm from '../../../components/AddDoctorForm';

interface IProvided {
	id: string;
	username: string;
	full_name: string;
	account_status: string;
	added_by: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		const response = await axiosInstance
			.get(`/medic/verify/${params.hash}`)
			.then((res) => res);
		console.log(response.data.message);
		return {
			props: {
				validToken: response.data.status === 200 ? true : false,
				validation: params.hash,
				...response.data.message,
			},
		};
	} catch (error) {
		return {
			props: { validToken: false, errors: error.response.data.errors },
		};
	}
};

interface IProps {
	validToken: boolean;
	errors: any[];
	validation: string;
}

function ValidateHash({
	validToken,
	account_status,
	added_by,
	full_name,
	username,
	id,
}: IProps & IProvided) {
	const [selectedSpec, setSelectedSpecialit] = React.useState('');

	return (
		<>
			<Layout absolute={!validToken}>
				<h1 className="font-mono font-extrabold text-6xl container mx-auto text-center p-8 underline">
					Bonjour Docteur
				</h1>
				<p className="container text-center text-lg mx-auto font-semibold">
					Crée Votre Compte
				</p>
				<div className="relative py-3 sm:max-w-xl sm:mx-auto my-16">
					<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
					<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 border-2 border-blue-300">
						{validToken ? (
							<AddDoctorForm
								added_by={added_by}
								id={id}
								selectedSpec={selectedSpec}
								setSelectedSpecialit={setSelectedSpecialit}
								specialite={specialite}
								username={username}
							/>
						) : (
							<div className="w-full text-xl font-mono text-red-500 mx-auto">
								<div className="text-gray-200 px-6 py-4 border-0 rounded relative mb-4 bg-red-400">
									<span className="text-xl inline-block mr-5 align-middle">
										<i className="fas fa-bell" />
									</span>
									<span className="inline-block align-middle mr-8">
										Invalid Link
									</span>
									<span>×</span>
									<span>×</span>
									<span>×</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</Layout>
		</>
	);
}

export default ValidateHash;
