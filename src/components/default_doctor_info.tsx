import React from 'react';

import Link from 'next/link';
import { IDoctor } from '../utils/doctor.interface';
import CreneauModal from './creneau-modal';
import { useRouter } from 'next/router';

function DefaultDoctorInfo({ doctor }: { doctor: IDoctor; href?: any }) {
	const [ModalCreneau, setModalCreneau] = React.useState(false);
	const { pathname } = useRouter();

	return (
		<div className="px-6">
			{ModalCreneau && (
				<CreneauModal setShowModal={setModalCreneau} doctor={doctor} />
			)}
			<div className="flex flex-wrap justify-center">
				<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
					<div className="relative">
						<img
							alt="Profile Picture"
							src={
								'https://via.placeholder.com/600/3DC6DB/000000?text=' +
								doctor.full_name
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
						{/* <button
                            className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                            type="button"
                            style={{ transition: 'all .15s ease' }}
                        >
                            Ajouter Admin
									</button> */}
						<form
							action="https://online-api.game-linter.com/api/admin/signout"
							method="GET"
							className="inline-block"
						>
							<button
								style={{ transition: 'all .15s ease' }}
								className="bg-red-600 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
							>
								Devenir Non disponible
							</button>
						</form>
						{/* {showDoctorModal ? (
											<AddDoctorModal
												setShowDoctorModal={setShowDoctorModal}
											/>
										) : null} */}
					</div>
				</div>
				<div className="w-full lg:w-4/12 px-4 lg:order-1">
					<div className="w-full flex justify-between lg:pt-4 pt-8 ">
						{/* <div className="mr-4 p-3 text-center">
										<span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
											10
										</span>
										<span className="text-sm text-gray-500">Photos</span>
									</div> */}
						<div className="lg:mr-4 p-3 text-center">
							<span className="text-base font-bold block uppercase tracking-wide text-gray-700">
								{doctor.id}
							</span>
							<span className="text-sm text-gray-500">Admin ID</span>
						</div>
						<div className="py-6 px-3 mt-32 sm:mt-0">
							{/* <button
                            className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                            type="button"
                            style={{ transition: 'all .15s ease' }}
                        >
                            Ajouter Admin
									</button> */}
							<button
								style={{ transition: 'all .15s ease' }}
								className="bg-cyan-600 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-4"
							>
								<Link href="/dash/medic/calendar">
									<a>Consulter Calendrier</a>
								</Link>
							</button>
							<button
								style={{ transition: 'all .15s ease' }}
								onClick={() => {
									setModalCreneau(!ModalCreneau);
								}}
								className="bg-cyan-600 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
							>
								<a> Chosir Votre créneau</a>
							</button>
							{/* {showDoctorModal ? (
											<AddDoctorModal
												setShowDoctorModal={setShowDoctorModal}
											/>
										) : null} */}
						</div>
					</div>
				</div>
			</div>
			<div className="text-center mt-12">
				<h3 className="text-4xl font-semibold leading-normal  text-gray-800 mb-2">
					{doctor.full_name}
				</h3>
				<div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
					<i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>{' '}
					{doctor.expertise.map((exp) => exp.slug).join(' | ')}
				</div>
				<div className="mb-2 text-gray-700 mt-10">
					{doctor.debut_jour && doctor.fin_jour
						? `De ${doctor.debut_jour} a ${doctor.fin_jour}`
						: null}
				</div>
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
	);
}

export default DefaultDoctorInfo;
