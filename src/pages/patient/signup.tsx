import React from 'react';
import Layout from '../../components/Layout';

function SignupPatient() {
	return (
		<Layout absolute={false}>
			<div className="font-sans antialiased bg-grey-lightest">
				{/* Content */}
				<div className="w-full bg-grey-lightest" style={{ paddingTop: '4rem' }}>
					<div className="container mx-auto py-8">
						<div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
							<div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
								Register for a free account
							</div>
							<div className="py-4 px-8">
								<div className="flex mb-4">
									<div className="w-1/2 mr-1">
										<label
											className="block text-grey-darker text-sm font-bold mb-2"
											htmlFor="first_name"
										>
											First Name
										</label>
										<input
											className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
											id="first_name"
											type="text"
											placeholder="Your first name"
										/>
									</div>
									<div className="w-1/2 ml-1">
										<label
											className="block text-grey-darker text-sm font-bold mb-2"
											htmlFor="last_name"
										>
											Last Name
										</label>
										<input
											className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
											id="last_name"
											type="text"
											placeholder="Your last name"
										/>
									</div>
								</div>
								<div className="mb-4">
									<label
										className="block text-grey-darker text-sm font-bold mb-2"
										htmlFor="email"
									>
										Email Address
									</label>
									<input
										className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
										id="email"
										type="email"
										placeholder="Your email address"
									/>
								</div>
								<div className="mb-4">
									<label
										className="block text-grey-darker text-sm font-bold mb-2"
										htmlFor="password"
									>
										Password
									</label>
									<input
										className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
										id="password"
										type="password"
										placeholder="Your secure password"
									/>
									<p className="text-grey text-xs mt-1">
										At least 6 characters
									</p>
								</div>
								<div className="mb-4">
									<label
										className="block text-grey-darker text-sm font-bold mb-2"
										htmlFor="Confirm Password"
									>
										Confirm Password
									</label>
									<input
										className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
										id="Confirm Password"
										type="password"
										placeholder="Your secure Confirm Password"
									/>
									<p className="text-grey text-xs mt-1">
										At least 6 characters
									</p>
								</div>
								<div className="mb-4">
									<label
										className="block text-grey-darker text-sm font-bold mb-2"
										htmlFor="CIN"
									>
										CIN
									</label>
									<input
										className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
										id="CIN"
										type="password"
										placeholder="Your secure CIN"
									/>
									<p className="text-grey text-xs mt-1">
										At least 6 characters
									</p>
								</div>
								<div className="mb-4">
									<label
										className="block text-grey-darker text-sm font-bold mb-2"
										htmlFor="password"
									>
										Numero de telephone
									</label>
									<input
										className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
										id="Numero de telephone"
										type="Numero de telephone"
										placeholder="Your secure Numero de telephone"
									/>
									<p className="text-grey text-xs mt-1">
										At least 6 characters
									</p>
								</div>
								<div className="flex items-center justify-between mt-8">
									<button
										className="bg-blue hover:bg-blue-dark text-gray-100 bg-blue-500 font-bold py-2 px-4 rounded-full w-1/4 mx-auto"
										type="submit"
									>
										Sign Up
									</button>
								</div>
							</div>
						</div>
						<p className="text-center my-4">
							<a
								href="#"
								className="text-grey-dark text-sm no-underline hover:text-grey-darker"
							>
								I already have an account
							</a>
						</p>
					</div>
				</div>
				{/* Footer */}
				<footer className="w-full bg-grey-lighter py-8">
					<div className="container mx-auto text-center px-8">
						<p className="text-grey-dark mb-2 text-sm">
							<span className="font-bold">Clinique</span>
						</p>
					</div>
				</footer>
			</div>
		</Layout>
	);
}

export default SignupPatient;
