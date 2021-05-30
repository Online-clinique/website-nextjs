import React, { useState } from 'react';
import Link from 'next/link';
import { axiosInstance } from '../services/axios-instance';

function Navbar(props: { login: boolean; transparent: boolean }) {
	const [avatarDropDown, toggleAvatarDropDown] = useState<boolean>(false);
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	const [loggedIn, setLoggedIn] = useState(false);

	React.useEffect(() => {
		axiosInstance('/doctor/me')
			.then((res) => {
				setLoggedIn(res.data.full_name);
			})
			.catch((err) => {
				setLoggedIn(false);
			});
	}, []);

	return (
		<nav
			className={
				(props.transparent
					? 'top-0 absolute z-50 w-full '
					: 'relative shadow-lg bg-gray-50') +
				' flex flex-wrap items-center justify-between px-2 py-3 '
			}
		>
			<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
				<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<a
						className={
							(props.transparent ? 'text-white' : 'text-gray-800') +
							' text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
						}
						href="/"
					>
						<div className="py-1 flex flex-col justify-center sm:py-1">
							<div className="relative py-1 sm:max-w-xl sm:mx-auto">
								<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl p-8" />
								<div className="relative px-1 py-1 bg-white shadow-lg sm:rounded-3xl sm:p-6">
									<div className="font-extrabold text-2xl">Clinique-Online</div>
								</div>
							</div>
						</div>
					</a>
					<button
						className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<i
							className={
								(props.transparent ? 'text-white' : 'text-gray-800') +
								' fas fa-bars'
							}
						></i>
					</button>
				</div>
				<div
					className={
						'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
						(navbarOpen ? ' block rounded shadow-lg' : ' hidden')
					}
					id="example-navbar-warning"
				>
					{/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
						<li className="flex items-center">
							<a
								className={
									(props.transparent
										? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
										: 'text-gray-800 hover:text-gray-600') +
									' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
								}
								href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/login"
							>
								<i
									className={
										(props.transparent
											? 'lg:text-gray-300 text-gray-500'
											: 'text-gray-500') +
										' far fa-file-alt text-lg leading-lg mr-2'
									}
								/>{' '}
								Docs
							</a>
						</li>
					</ul> */}
					<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
						{/* <li className="flex items-center">
							<a
								className={
									(props.transparent
										? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
										: 'text-gray-800 hover:text-gray-600') +
									' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
								}
								href="#pablo"
							>
								<i
									className={
										(props.transparent
											? 'lg:text-gray-300 text-gray-500'
											: 'text-gray-500') +
										' fab fa-facebook text-lg leading-lg '
									}
								/>
								<span className="lg:hidden inline-block ml-2">Share</span>
							</a>
						</li>

						<li className="flex items-center">
							<a
								className={
									(props.transparent
										? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
										: 'text-gray-800 hover:text-gray-600') +
									' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
								}
								href="#pablo"
							>
								<i
									className={
										(props.transparent
											? 'lg:text-gray-300 text-gray-500'
											: 'text-gray-500') + ' fab fa-twitter text-lg leading-lg '
									}
								/>
								<span className="lg:hidden inline-block ml-2">Tweet</span>
							</a>
						</li>

						<li className="flex items-center">
							<a
								className={
									(props.transparent
										? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
										: 'text-gray-800 hover:text-gray-600') +
									' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
								}
								href="#pablo"
							>
								<i
									className={
										(props.transparent
											? 'lg:text-gray-300 text-gray-500'
											: 'text-gray-500') + ' fab fa-github text-lg leading-lg '
									}
								/>
								<span className="lg:hidden inline-block ml-2">Star</span>
							</a>
						</li> */}

						{!loggedIn ? (
							<li className="flex items-center">
								<button
									className={
										(props.transparent
											? 'bg-white text-gray-800 active:bg-gray-100'
											: props.login
											? 'bg-blue-900 text-white active:bg-blue-600'
											: ' text-white active:bg-blue-600 rounded-full mr-10') +
										' font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
									}
									type="button"
									style={{
										transition: 'all .15s ease',
										backgroundColor: '#BE281E',
									}}
									// disabled={props.login}
								>
									{' '}
									<div className={props.login ? 'text-gray-400' : ''}>
										<Link href="/patient/signup">
											<a>Crée Un compte</a>
										</Link>
									</div>
								</button>
							</li>
						) : (
							''
						)}
						<li className="flex items-center">
							<Link href={loggedIn ? '/patient/profile' : 'patient/login'}>
								<a
									className={
										(props.transparent
											? 'bg-white text-gray-800 active:bg-gray-100'
											: props.login
											? 'bg-blue-900 text-white active:bg-blue-600'
											: ' text-white active:bg-blue-600 ') +
										' font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
									}
									type="button"
									style={{
										transition: 'all .15s ease',
										backgroundColor: '#C9A33A',
									}}
								>
									{' '}
									<div className={props.login ? 'text-gray-400' : ''}>
										{!loggedIn ? 'Login' : loggedIn}
									</div>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
