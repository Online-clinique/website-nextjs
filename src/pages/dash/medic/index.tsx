import React from 'react';
import { GetServerSideProps } from 'next';
import { axiosInstance } from '../../../services/axios-instance';
import SignInFormDoctor from '../../../components/sign-in_doctor';
import DoctorProfile from '../../../components/doctor-profile';
import Layout from '../../../components/Layout';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const user = await axiosInstance
		.get('/doctor/me', {
			headers: {
				cookie: context.req.headers.cookie || '',
			},
		})
		.catch((err) => null);
	return {
		props: {
			doc: user ? user.data : null,
		}, // will be passed to the page component as props
	};
};

function DoctorView({ doc }) {
	if (doc) {
		return (
			<Layout absolute={false}>
				<Head>
					<link
						rel="stylesheet"
						href="https://raw.githubusercontent.com/wayofthefuture/react-input-moment/master/css/input-moment.min.css"
					/>
				</Head>
				<DoctorProfile doctor={doc} />
			</Layout>
		);
	} else {
		return <SignInFormDoctor />;
	}
}

export default DoctorView;
