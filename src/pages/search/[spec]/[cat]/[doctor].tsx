import React from 'react';
import { GetServerSideProps } from 'next';
import { axiosInstance } from '../../../../services/axios-instance';
import Layout from '../../../../components/Layout';
import { useRouter } from 'next/router';
import CardDoctor from '../../../../components/card_doctor';

export const getServerSideProps: GetServerSideProps = async ({
	params,
	res,
	req,
}) => {
	const response = await axiosInstance
		.get(`/search/${params.spec}/${params.cat}/${params.doctor}`)
		.then((res) => res.data);
	return {
		props: {
			query_result: response,
			spec: params.spec,
			cat: params.cat,
			doctor: params.doctor,
		},
	};
};

function DcotorEploreView({ query_result, spec, cat, doctor }) {
	const router = useRouter();

	return (
		<Layout absolute={!query_result.length}>
			<div className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
							online-clinque
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							Une meilleurs méthode pour Trouvez Votre docteur
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"></p>
					</div>
					<div className="mt-10">
						<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
										{/* Heroicon name: outline/globe-alt */}
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
										Nombre de résultats
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500">
									{query_result.length}
								</dd>
							</div>
							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
										{/* Heroicon name: outline/scale */}
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
										Filter
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500 text-md font-bold font-serif">
									Ville: {spec} And Specialité: {cat} And Query: {doctor}
								</dd>
							</div>
						</dl>
						<div className="flex w-full my-9"></div>
						{query_result.length ? (
							query_result.map((doctor) => {
								return <CardDoctor doctor={doctor} />;
							})
						) : (
							<div className="font-bold text-5xl text-center">
								Pas de resultat
							</div>
						)}
					</div>
				</div>
			</div>{' '}
		</Layout>
	);
}

export default DcotorEploreView;
