import React from 'react';
import Layout from '../../components/Layout';
import LoginForm from '../../components/login-form';

function LoginUser() {
	return (
		<Layout absolute>
			<LoginForm admin={false} />
		</Layout>
	);
}

export default LoginUser;
