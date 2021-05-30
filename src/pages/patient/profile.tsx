import React from 'react';

import { GetServerSideProps } from 'next';
import { axiosInstance } from '../../services/axios-instance';
import Layout from '../../components/Layout';
import Router from 'next/router';
import { UserObject } from '../../utils/user.interface';
import { moment } from '../_app';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const response = await axiosInstance
		.get(`/user/me`, {
			headers: {
				cookie: context.req.headers.cookie || '',
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => err.response.data.message);
	console.log(response);

	if (response.status === 200) {
		return {
			props: {
				profile: response,
			},
		};
	} else {
		return {
			props: {
				profile: null,
			},
		};
	}
};

function ProfilePatient({ profile }: { profile: UserObject }) {
	React.useEffect(() => {
		if (!profile || !profile.payload) {
			Router.push('/patient/login');
		}
	}, []);

	if (!profile?.payload?.appointement?.length) {
		return (
			<Layout absolute>
				<div className="container w-full mx-auto text-center my-10 font-semibold text-2xl underline">
					Pas de rendez-vous
				</div>
			</Layout>
		);
	}

	return (
		<Layout absolute={true}>
			<div className="container w-full mx-auto text-center my-10 font-semibold text-2xl underline">
				Rendez-vous
			</div>
			<div className="container w-4/6 mx-auto">
				<table className="table-fixed">
					<thead>
						<tr>
							<th className="w-1/2 ...">Date</th>
							<th className="w-1/4 ...">Time</th>
							<th className="w-1/4 ...">Name</th>
							<th className="w-1/4 ...">Reason</th>
						</tr>
					</thead>
					<tbody>
						{profile.payload.appointement.map((appoint) => {
							return (
								<tr className="border border-1 w-full">
									<td className="">
										{moment(appoint.start).format('DD / MM / YYYY')}
									</td>
									<td className="">
										{moment(appoint.start).format('HH:mm')} --{' '}
										{moment(appoint.end).format('HH:mm')}
									</td>
									<td className="">{profile.payload.full_name}</td>
									<td className="w-3/4">{appoint.status}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</Layout>
	);
}

export default ProfilePatient;
