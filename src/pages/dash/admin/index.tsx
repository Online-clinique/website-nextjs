import { axiosInstance } from '../../../services/axios-instance';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import Layout from '../../../components/Layout';

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
		<Layout>
			{user
				? 'you are an admin and you email is ' + user.full_name
				: 'Not logged in'}
		</Layout>
	);
}

export default Admin;
