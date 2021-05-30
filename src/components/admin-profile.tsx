import React from 'react';
import { axiosInstance } from '../services/axios-instance';
import DoctorModal from './Doctors-modal';
import Footer from './footer';
import Navbar from './navbar';
import slugi from 'slugify';
import AddDoctorModal from './AddDoctorModal';

function AdminProfile(props: { user: any }) {
	// console.log(props.user);
	const [mydoctors, SetDoctors] = React.useState([]);
	const [ShowModal, setShowModal] = React.useState(false);
	const [showDoctorModal, setShowDoctorModal] = React.useState(false);

	async function FetchMeta() {
		const res = await axiosInstance.get('/admin/mydocs').catch((res) => res);

		if (res.data) {
			SetDoctors(res.data.doctors);
		}
	}

	React.useEffect(() => {
		FetchMeta();
	}, []);
	return (
		<div>
			<main className="profile-page">
				<section className="relative block" style={{ height: '500px' }}>
					<div
						className="absolute top-0 w-full h-full bg-center bg-cover"
						style={{
							backgroundImage: "url('/background.png')",
						}}
					>
						<span
							id="blackOverlay"
							className="w-full h-full absolute opacity-50 bg-black"
						></span>
					</div>
					<div
						className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
						style={{ height: '70px' }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-gray-300 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
				</section>
				<section className="relative py-16 bg-gray-300">
					<div className="container mx-auto px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
							<div className="px-6">
								<div className="flex flex-wrap justify-center">
									<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
										<div className="relative">
											<img
												alt="Profile Picture"
												src={
													props.user.photo_de_profile ||
													'https://via.placeholder.com/600/3DC6DB/000000?text=' +
														props.user.full_name
															.split(' ')
															.map((nm) => nm[0])
															.join('')
												}
												className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
												style={{ maxWidth: '150px' }}
											/>
										</div>
									</div>
									<div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
										<div className="py-6 px-3 mt-32 sm:mt-0">
											<button
												className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
												type="button"
												style={{ transition: 'all .15s ease' }}
											>
												Ajouter Admin
											</button>
											<button
												className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
												type="button"
												style={{ transition: 'all .15s ease' }}
												onClick={() => setShowDoctorModal(!showDoctorModal)}
											>
												Ajouter Un docteur
											</button>
											<form
												action="https://online-api.game-linter.com/api/admin/signout"
												method="GET"
												className="inline-block"
											>
												<button
													style={{ transition: 'all .15s ease' }}
													className="bg-red-600 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
												>
													Sign out
												</button>
											</form>
											{showDoctorModal ? (
												<AddDoctorModal
													setShowDoctorModal={setShowDoctorModal}
												/>
											) : null}
										</div>
									</div>
									<div className="w-full lg:w-4/12 px-4 lg:order-1">
										<div className="flex justify-center py-4 lg:pt-4 pt-8">
											<div className="mr-4 p-3 text-center">
												<span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
													{!mydoctors.length ? 'Loading...' : mydoctors.length}
												</span>
												<span
													className="text-sm text-blue-400 underline hover:shadow-md hover:text-blue-500 cursor-pointer"
													onClick={(e) => setShowModal(!ShowModal)}
												>
													Docteurs
												</span>
												{ShowModal ? (
													<DoctorModal
														setShowModal={setShowModal}
														doctors={mydoctors}
													/>
												) : (
													''
												)}
											</div>
											{/* <div className="mr-4 p-3 text-center">
												<span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
													10
												</span>
												<span className="text-sm text-gray-500">Photos</span>
											</div> */}
											<div className="lg:mr-4 p-3 text-center">
												<span className="text-base font-bold block uppercase tracking-wide text-gray-700">
													{props.user.id}
												</span>
												<span className="text-sm text-gray-500">Admin ID</span>
											</div>
										</div>
									</div>
								</div>
								<div className="text-center mt-12">
									<h3 className="text-4xl font-semibold leading-normal  text-gray-800 mb-2">
										{props.user.full_name.toUpperCase()}
									</h3>
									<div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
										<i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>{' '}
										{props.user.admin ? 'Administrator' : props.user.username}
									</div>
									<div className="mb-2 text-gray-700 mt-10">Portal Manager</div>
									<div className="mb-2 text-gray-700">
										{/* University of Computer Science */}
									</div>
								</div>
								<div className="mt-10 py-10 border-t border-gray-300 text-center">
									<div className="flex flex-wrap justify-center">
										<div className="w-full lg:w-9/12 px-4">
											<p className="mb-4 text-lg leading-relaxed text-gray-800"></p>
											{/* <a
												href="#pablo"
												className="font-normal text-pink-500"
												onClick={(e) => e.preventDefault()}
											>
												Show more
											</a> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default AdminProfile;
