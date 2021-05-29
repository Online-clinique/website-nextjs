import React from 'react';
import Layout from '../../components/Layout';
import LoginForm from '../../components/login-form';

import { GetServerSideProps } from 'next';
import { axiosInstance } from '../../services/axios-instance';

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

function LoginUser() {
	return (
		<Layout absolute>
			<LoginForm admin={false} />
		</Layout>
	);
}

export default LoginUser;
