export interface Response {
	status: number;
	payload: Payload;
}

export interface Payload {
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
	appoint: Appoint[];
}

export interface Appoint {
	id: string;
	medic_id: string;
	user_id: string;
	title: string;
	start: string;
	end: string;
	status: string;
	created_at: string;
	updated_at: string;
}
