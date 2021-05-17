import { axiosInstance } from '../../../services/axios-instance';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import Layout from '../../../components/Layout';
import LoginForm from '../../../components/login-form';
import AdminProfile from '../../../components/admin-profile';
import Head from 'next/head';

interface IAdmin {
	[x: string]: {
		id: string;
		username: string;
		full_name: string;
		admin: boolean;
		created_at: Date;
	};
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	const user = await axiosInstance
		.get('/admin/me', {
			headers: {
				cookie: context.req.headers.cookie || '',
			},
		})
		.catch((err) => null);
	return {
		props: {
			user: user ? user.data : null,
		}, // will be passed to the page component as props
	};
};

function Admin({ user }: IAdmin) {
	return (
		<Layout absolute>
			<Head>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
				/>
			</Head>
			{user ? <AdminProfile user={user} /> : <LoginForm />}
		</Layout>
	);
}

export default Admin;
