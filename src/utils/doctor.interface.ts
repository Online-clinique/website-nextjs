export interface IDoctor {
	id: string;
	username: string;
	full_name: string;
	adresse_cabinet: string;
	phone_cabinet: string;
	phone_portable: string;
	cni: string;
	mean_of_payement: any;
	request_hash: any;
	account_status: string;
	region_ville: any;
	photo_de_profile: any;
	days_off: string;
	added_by: string;
	created_at: any;
	updated_at: string;
	about: string;
	cover_image: any;
	notif_demande: any;
	notif_cancel: any;
	debut_jour: string;
	fin_jour: string;
	ville: string;
	expertise: Expertise[];
}

export interface Expertise {
	id: string;
	slug: string;
	medic_id: string;
	created_at: any;
	updated_at: any;
}
