export interface IDoctor {
	id: string;
	account_status: string;
	added_by: string;
	adresse_cabinet: string;
	profile_image: string;
	username: string;
	full_name: string;
	// adresse_cabinet: string;
	days_off: string;
	dispo: boolean;
	phone_cabinet: string;
	phone_portable: string;
	photo_de_profile: string;
	region_ville: string;
	cover_image: string;
	debut_jour: string;
	fin_jour: string;
	expertise: { slug: string }[];
	about: string;
}
