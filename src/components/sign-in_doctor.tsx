import React from 'react';
import { axiosInstance } from '../services/axios-instance';
import { useSnackbar } from 'notistack';

function SignInFormDoctor() {
	const { closeSnackbar, enqueueSnackbar } = useSnackbar();
	const HandleSignin = async (event) => {
		try {
			event.preventDefault();
			const { email, password } = event.target;
			console.log(email.value, password.value);
			const response = await axiosInstance
				.post('/medic/login', {
					username: email.value,
					password: password.value,
				})
				.then((res) => res.data);
			if (response.status >= 400) {
				throw new Error(response.message);
			} else {
				enqueueSnackbar('Re-Bonjour docteur', {
					variant: 'success',
				});
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			}
		} catch (error) {
			if (error?.response) {
				enqueueSnackbar(error.response.data.message, {
					variant: 'warning',
				});
				// console.log(error);
			} else {
				enqueueSnackbar(error.message, {
					variant: 'warning',
				});
			}
		}
	};
	return (
		<React.Fragment>
			<div className="w-full text-center mx-auto">
				<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
					<div className="relative py-3 sm:max-w-xl sm:mx-auto">
						<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
						<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
							<div className="max-w-md mx-auto">
								{/* <div className="max-w-md w-full space-y-8"> */}
								<div>
									{/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" /> */}
									<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
										Se Connecter Comme Docteur
									</h2>
								</div>
								<form className="mt-8 space-y-6" onSubmit={HandleSignin}>
									<input type="hidden" name="remember" defaultValue="true" />
									<div className="rounded-md shadow-sm -space-y-px">
										<div>
											<label htmlFor="email-address" className="sr-only">
												Email address
											</label>
											<input
												// id="email-address"
												name="email"
												id="email"
												type="email"
												autoComplete="email"
												required
												className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
												placeholder="Email address"
											/>
										</div>
										<div>
											<label htmlFor="password" className="sr-only">
												Password
											</label>
											<input
												id="password"
												name="password"
												type="password"
												autoComplete="current-password"
												required
												className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
												placeholder="Password"
											/>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<input
												id="remember_me"
												name="remember_me"
												type="checkbox"
												className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
											/>
											<label
												htmlFor="remember_me"
												className="ml-2 block text-sm text-gray-900"
											>
												Remember me
											</label>
										</div>
										<div className="text-sm">
											<a
												href="#"
												className="font-medium text-indigo-600 hover:text-indigo-500"
											>
												Forgot your password?
											</a>
										</div>
									</div>
									<div>
										<button
											type="submit"
											className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											<span className="absolute left-0 inset-y-0 flex items-center pl-3">
												{/* Heroicon name: solid/lock-closed */}
												<svg
													className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
														clipRule="evenodd"
													/>
												</svg>
											</span>
											Sign in
										</button>
									</div>
								</form>
							</div>
							{/* </div> */}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default SignInFormDoctor;
