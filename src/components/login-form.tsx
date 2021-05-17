import React, { FormEvent } from 'react';
import { axiosInstance } from '../services/axios-instance';
import { useSnackbar } from 'notistack';
import Router from 'next/router';

function LoginForm() {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	async function LoginSubmit(event: any) {
		event.preventDefault();

		const username = event.target.username.value;
		const password = event.target.password.value;

		const res = await axiosInstance
			.post('/admin/login', { username, password })
			.catch((err) => {
				enqueueSnackbar(err.response.data.message, {
					variant: 'warning',
				});
				console.log(err.response.data);
				return err;
			});

		if (res.data) {
			enqueueSnackbar('Welcome back', {
				variant: 'success',
			});

			setTimeout(() => {
				Router.reload();
			}, 1500);
		}
	}
	return (
		<main>
			<section className="absolute w-full h-full">
				<div
					className="absolute top-0 w-full h-full bg-gray-900"
					style={{
						backgroundImage: 'url("/background.png"',
						backgroundSize: '100%',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
				<div className="container mx-auto px-4 h-full">
					<div className="flex content-center items-center justify-center h-full">
						<div className="w-full lg:w-4/12 px-4">
							<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-700 border-0">
								<div className="rounded-t mb-0 px-6 py-6">
									{/* <div className="text-center mb-3">
										<h6 className="text-gray-600 text-sm font-bold">
											Sign in with
										</h6>
									</div>
									<div className="btn-wrapper text-center">
										<button
											className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
											type="button"
											style={{ transition: 'all .15s ease' }}
										>
											<img alt="..." className="w-5 mr-1" src={''} />
											Github
										</button>
										<button
											className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
											type="button"
											style={{ transition: 'all .15s ease' }}
										>
											<img alt="..." className="w-5 mr-1" src={''} />
											Google
										</button>
									</div>
									<hr className="mt-6 border-b-1 border-gray-400" /> */}
								</div>
								<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
									<div className="text-gray-100 text-center mb-3 font-bold">
										<h1>Sign in as admin</h1>
									</div>
									<form onSubmit={LoginSubmit}>
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-gray-700 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Email
											</label>
											<input
												type="email"
												className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
												placeholder="Email"
												style={{ transition: 'all .15s ease' }}
												name="username"
												id="username"
											/>
										</div>

										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-gray-700 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Password
											</label>
											<input
												type="password"
												className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
												placeholder="Password"
												style={{ transition: 'all .15s ease' }}
												name="password"
												id="password"
											/>
										</div>

										<div className="text-center mt-6">
											<button
												className="bg-green-300 text-gray-800 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
												type="submit"
												style={{ transition: 'all .15s ease' }}
											>
												Sign In
											</button>
										</div>
									</form>
								</div>
							</div>
							<div className="flex flex-wrap mt-6">
								<div className="w-1/2">
									<a
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										className="text-gray-300"
									>
										<small>Forgot password?</small>
									</a>
								</div>
								<div className="w-1/2 text-right">
									<a
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										className="text-gray-300"
									>
										<small>Create new account</small>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default LoginForm;
