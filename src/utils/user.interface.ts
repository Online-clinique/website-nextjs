// export interface UserObject {
export interface UserObject {
	status: number;
	payload: Payload;
}

export interface Payload {
	id: string;
	email: string;
	full_name: string;
	email_verified_at: any;
	CIN: string;
	phone: string;
	created_at: string;
	updated_at: string;
	appointement: Appointement[];
}

export interface Appointement {
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
