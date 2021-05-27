import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import * as Moment from 'moment';
import { DateRange, extendMoment } from 'moment-range';
import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { calcTimes, getDatesTobeExcluded } from '../services/get_times';
import Layout from '../components/Layout';
import { setInterval } from 'timers';
import Select from 'react-select';
import { cities, specialite } from '../services/specialité';
import { moment } from './_app';
import { useRouter } from 'next/router';

const DatePickerInput = forwardRef(({ value, onClick }: any, ref: any) => (
	<button
		className="date_picker py-2 px-4 bg-cyan-500 rounded-lg text-white mx-auto"
		onClick={onClick}
		ref={ref}
	>
		{value || 'Selectioner Une Date au rendez-vous'}
	</button>
));

export default function Home() {
	const [urltop, SetUrl] = useState<string>('');
	const [villeSelected, setVilleSelected] =
		useState<{ value: string; label: string }>(null);
	const [catSelected, setCatSelected] =
		useState<{ value: string; label: string }>(null);
	const [query, setQuery] = useState<string>('');
	const router = useRouter();

	const sleep = (t: number) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(void 0);
			}, t);
		});
	};

	const commitQuery = async () => {
		await router.push(
			`/search/${villeSelected?.value || 'all'}/${
				catSelected?.value || 'all'
			}/${query || 'all'}`
		);
	};

	// time_slots.forEach((time_slot) => {
	// 	console.log(time_slot.format('hh:mm'));
	// });

	// console.log(moment.range(moment(), moment().add(2, 'month')));

	// let count = 1;
	React.useEffect(() => {
		const url = 'https://clinique-online.com';
		let currentUrl = '';
		(async () => {
			for await (const iterator of url) {
				SetUrl(currentUrl + iterator);
				currentUrl += iterator;
				await sleep(200);
			}
			// count++;
		})();
	}, []);
	return (
		<div>
			<Layout absolute={false}>
				<div className="h-screen p-5 body_figuring">
					<section className="shadow-xl rounded-md bg-white w-full md:w-5/6 md:mx-auto">
						<header className="flex justify-between items-center py-2 px-5">
							<div className="flex flex-row items-center">
								<div className="bg-red-400 text-white rounded-full p-1 mr-2 cursor-pointer h-4 w-4"></div>
								<div className="bg-yellow-400 text-white rounded-full p-1 mr-2 cursor-pointer h-4 w-4"></div>
								<div className="bg-green-400 text-white rounded-full p-1 mr-5 cursor-pointer h-4 w-4"></div>
								<div className="p-1 rounded-full text-gray-500 cursor-pointer mr-2 transition-colors hover:bg-gray-50 focus:bg-gray-50">
									<svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
										<path
											d="M3.015,4.779h1.164V3.615H3.015V4.779z M18.73,1.869H1.269c-0.322,0-0.582,0.26-0.582,0.582v15.133
											c0,0.322,0.26,0.582,0.582,0.582H18.73c0.321,0,0.582-0.26,0.582-0.582V2.451C19.312,2.129,19.052,1.869,18.73,1.869z
											M18.148,16.42c0,0.322-0.261,0.582-0.582,0.582H2.433c-0.322,0-0.582-0.26-0.582-0.582V6.525h16.297V16.42z M18.148,5.361H1.851
											V3.615c0-0.322,0.26-0.582,0.582-0.582h15.133c0.321,0,0.582,0.26,0.582,0.582V5.361z M7.671,4.779h1.165V3.615H7.671V4.779z
											M5.344,4.779h1.164V3.615H5.344V4.779z"
										/>
									</svg>
								</div>
								<div className="p-1 rounded-full text-gray-400 cursor-pointer transition-colors hover:bg-gray-50 focus:bg-gray-50">
									<svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
										<path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z" />
									</svg>
								</div>
								<div className="p-1 rounded-full text-gray-400 cursor-pointer transition-colors hover:bg-gray-50 focus:bg-gray-50">
									<svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
										<path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z" />
									</svg>
								</div>
							</div>
							<div className="w-4/6">
								<input
									type="text"
									value={urltop}
									placeholder="Search or enter website name"
									className="search-input bg-gray-100 placeholder-gray-400 text-gray-400 text-lg py-1 px-10 rounded-md outline-none w-full focus:outline-none focus:ring"
								/>
							</div>
							<div className="flex flex-row items-center">
								<div className="p-1 rounded-full text-gray-400 cursor-pointer mr-2 transition-colors hover:bg-gray-50 focus:bg-gray-50">
									<svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
										<path d="M8.416,3.943l1.12-1.12v9.031c0,0.257,0.208,0.464,0.464,0.464c0.256,0,0.464-0.207,0.464-0.464V2.823l1.12,1.12c0.182,0.182,0.476,0.182,0.656,0c0.182-0.181,0.182-0.475,0-0.656l-1.744-1.745c-0.018-0.081-0.048-0.16-0.112-0.224C10.279,1.214,10.137,1.177,10,1.194c-0.137-0.017-0.279,0.02-0.384,0.125C9.551,1.384,9.518,1.465,9.499,1.548L7.76,3.288c-0.182,0.181-0.182,0.475,0,0.656C7.941,4.125,8.234,4.125,8.416,3.943z M15.569,6.286h-2.32v0.928h2.32c0.512,0,0.928,0.416,0.928,0.928v8.817c0,0.513-0.416,0.929-0.928,0.929H4.432c-0.513,0-0.928-0.416-0.928-0.929V8.142c0-0.513,0.416-0.928,0.928-0.928h2.32V6.286h-2.32c-1.025,0-1.856,0.831-1.856,1.856v8.817c0,1.025,0.832,1.856,1.856,1.856h11.138c1.024,0,1.855-0.831,1.855-1.856V8.142C17.425,7.117,16.594,6.286,15.569,6.286z" />
									</svg>
								</div>
								<div className="p-1 rounded-full text-gray-500 cursor-pointer mr-2 transition-colors hover:bg-gray-50 focus:bg-gray-50">
									<svg className="fill-current h-4 w-4" viewBox="0 0 25 25">
										<path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
									</svg>
								</div>
								<div className="p-1 rounded-full text-gray-500 cursor-pointer transition-colors hover:bg-gray-50 focus:bg-gray-50">
									<svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
										<path
											d="M18.378,1.062H3.855c-0.309,0-0.559,0.25-0.559,0.559c0,0.309,0.25,0.559,0.559,0.559h13.964v13.964
            c0,0.309,0.25,0.559,0.559,0.559c0.31,0,0.56-0.25,0.56-0.559V1.621C18.938,1.312,18.688,1.062,18.378,1.062z M16.144,3.296H1.621
            c-0.309,0-0.559,0.25-0.559,0.559v14.523c0,0.31,0.25,0.56,0.559,0.56h14.523c0.309,0,0.559-0.25,0.559-0.56V3.855
            C16.702,3.546,16.452,3.296,16.144,3.296z M15.586,17.262c0,0.31-0.25,0.558-0.56,0.558H2.738c-0.309,0-0.559-0.248-0.559-0.558
            V4.972c0-0.309,0.25-0.559,0.559-0.559h12.289c0.31,0,0.56,0.25,0.56,0.559V17.262z"
										/>
									</svg>
								</div>
							</div>
						</header>
						<main className="flex flex-col justify-center rounded-b-md main_figuring">
							<div className="flex flex-col justify-center items-center p-5">
								<div className="w-3/4 mx-auto">
									<h1 className="text-white text-lg font-bold mb-3 bg-gray-800 py-2 px-4 rounded-lg mx-auto text-center w-5/6">
										Trouvez Votre Sauveur
									</h1>
									{/* Search form*/}
									<div className="container mx-auto flex justify-center items-center p-2 md:p-0 my-0">
										<div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg w-5/6">
											<div className="flex flex-col md:flex-row justify-around">
												<div className="w-1/3 mx-1">
													<div className="block">
														<h2 className="mb-2">Par Ville</h2>
														<Select
															options={cities}
															className="w-full text-base placeholder-gray-600 rounded-lg focus:shadow-outline mb-10"
															isSearchable
															value={villeSelected}
															onChange={(v) => {
																setVilleSelected(v);
															}}
														/>
													</div>
												</div>
												<div className="w-1/3 mx-1">
													<h2 className="mb-2">Par Specilité</h2>
													<Select
														options={specialite}
														className="w-full text-base placeholder-gray-600 rounded-lg focus:shadow-outline mb-10"
														isSearchable
														value={catSelected}
														onChange={(c) => {
															setCatSelected(c);
														}}
													/>
												</div>
											</div>
											<div className="text-center grid grid-cols-1 gap-4 mx-auto justify-center ">
												<div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
													<div className="flex border rounded bg-gray-300 items-center p-2 ">
														<svg
															className="fill-current text-gray-800 mr-2 w-5"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24"
															width={24}
															height={24}
														>
															<path
																className="heroicon-ui"
																d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
															/>
														</svg>
														<input
															type="text"
															placeholder="Nom du docteur"
															className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
															value={query}
															onChange={(e) => {
																setQuery(e.target.value);
															}}
														/>
													</div>
													<div className="flex border rounde items-center p-2 ">
														<div className="w-full">
															<button
																className="p-2 border w-full rounded-md bg-gray-800 text-white"
																onClick={commitQuery}
															>
																Search
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</main>
					</section>
				</div>
			</Layout>
		</div>
	);
}
