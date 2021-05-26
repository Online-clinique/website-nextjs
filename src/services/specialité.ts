import { moment } from "../pages";

export const specialite = [
	{ value: 'Médecin généraliste', label: 'Médecin généraliste' },
	{ value: 'Ophtalmologue', label: 'Ophtalmologue' },
	{
		value: 'Oto-Rhino-Laryngologiste ORL',
		label: 'Oto-Rhino-Laryngologiste ORL',
	},
	{ value: 'Dermatologue', label: 'Dermatologue' },
	{ value: 'Pédiatre', label: 'Pédiatre' },
	{ value: 'Dentiste', label: 'Dentiste' },
	{ value: 'Gynécologue', label: 'Gynécologue' },
	{
		value: 'Gastrologue-Entérologue',
		label: 'Gastrologue-Entérologue',
	},
	{ value: 'Cardiologue', label: 'Cardiologue' },
	{ value: 'Chirurgien Général', label: 'Chirurgien Général' },
	{ value: 'Urologue', label: 'Urologue' },
	{
		value: 'Traumatologue Orthopédiste',
		label: 'Traumatologue Orthopédiste',
	},
	{
		value: 'Anesthésiste-Réanimateur',
		label: 'Anesthésiste-Réanimateur',
	},
	{
		value: 'Gynécologue Obstétricien',
		label: 'Gynécologue Obstétricien',
	},
	{ value: 'Neuropsychiatre', label: 'Neuropsychiatre' },
	{ value: 'Radiologue', label: 'Radiologue' },
	{ value: 'Pneumo-Phtisiologue', label: 'Pneumo-Phtisiologue' },
	{ value: 'Rhumatologue', label: 'Rhumatologue' },
	{ value: 'Psychiatre', label: 'Psychiatre' },
	{ value: 'Neurochirurgien', label: 'Neurochirurgien' },
	{ value: 'Neurologue', label: 'Neurologue' },
	{ value: 'Néphrologue', label: 'Néphrologue' },
	{ value: 'Biologiste', label: 'Biologiste' },
	{ value: 'Interniste', label: 'Interniste' },
	{ value: 'Chirurgien Dentiste', label: 'Chirurgien Dentiste' },
	{
		value: 'Endocrinologue diabétologue et maladies métaboliques',
		label: 'Endocrinologue diabétologue et maladies métaboliques',
	},
	{ value: 'Médecin du travail', label: 'Médecin du travail' },
	{ value: 'Allergologue', label: 'Allergologue' },
	{ value: 'Anatomo-pathologiste', label: 'Anatomo-pathologiste' },
	{
		value: 'Diabétologue nutritionniste',
		label: 'Diabétologue nutritionniste',
	},
	{
		value: 'Chirurgien esthétique et plastique',
		label: 'Chirurgien esthétique et plastique',
	},
	{ value: 'Cardio Vasculaire', label: 'Cardio Vasculaire' },
	{
		value: 'Chirurgien Cardio Vasculaire',
		label: 'Chirurgien Cardio Vasculaire',
	},
	{ value: 'Hématologue', label: 'Hématologue' },
	{ value: 'Chirurgien pédiatrique', label: 'Chirurgien pédiatrique' },
	{
		value: 'Stomatologue et chirurgien maxillo-facial',
		label: 'Stomatologue et chirurgien maxillo-facial',
	},
	{ value: 'Radiologue', label: 'Radiologue' },
	{
		value: 'Chirurgien vasculaire périphérique',
		label: 'Chirurgien vasculaire périphérique',
	},
	{ value: 'Traumatologue', label: 'Traumatologue' },
	{ value: 'Chirurgien thoracique', label: 'Chirurgien thoracique' },
	{ value: 'Médecin du Sport', label: 'Médecin du Sport' },
	{
		value: 'Chirurgien Maxillo-Facial',
		label: 'Chirurgien Maxillo-Facial',
	},
	{ value: 'Kinésithérapeute', label: 'Kinésithérapeute' },
	{ value: 'Cancérologue', label: 'Cancérologue' },
	{
		value: 'Médecin physique et réadaptation fonctionnelle',
		label: 'Médecin physique et réadaptation fonctionnelle',
	},
	{ value: 'Oncologue médical', label: 'Oncologue médical' },
	{ value: 'Pédopsychiatre', label: 'Pédopsychiatre' },
	{ value: 'Opticien', label: 'Opticien' },
	{
		value: 'Médecin Légale et du Travail',
		label: 'Médecin Légale et du Travail',
	},
	{
		value: 'Médecin de rééducation réadaptation fonctionnelle',
		label: 'Médecin de rééducation réadaptation fonctionnelle',
	},
	{ value: 'Addictologue', label: 'Addictologue' },
	{
		value: 'Radiologue Radio-Isotopie',
		label: 'Radiologue Radio-Isotopie',
	},
	{ value: 'Immunologiste', label: 'Immunologiste' },
	{
		value: 'Médecin spécialiste des maladies infectieuses',
		label: 'Médecin spécialiste des maladies infectieuses',
	},
	{ value: 'Endodontiste', label: 'Endodontiste' },
	{ value: 'Orthodontiste', label: 'Orthodontiste' },
	{
		value: 'Chirurgien cancérologue',
		label: 'Chirurgien cancérologue',
	},
	{
		value: 'Médecin spécialiste en Médecine nucléaire',
		label: 'Médecin spécialiste en Médecine nucléaire',
	},
	{ value: 'Greffe osseuse', label: 'Greffe osseuse' },
	{ value: 'Psychothérapeute', label: 'Psychothérapeute' },
	{ value: 'Médecin communautaire', label: 'Médecin communautaire' },
	{ value: 'Chirurgien Infantile', label: 'Chirurgien Infantile' },
	{ value: 'Micronutrition', label: 'Micronutrition' },
	{ value: 'Acupuncture', label: 'Acupuncture' },
	{ value: 'Gériatre', label: 'Gériatre' },
	{ value: 'Implantologist', label: 'Implantologist' },
	{ value: 'Endocrinologue', label: 'Endocrinologue' },
	{ value: 'Gastro-entérologue', label: 'Gastro-entérologue' },
	{ value: 'Proctologue', label: 'Proctologue' },
	{ value: 'Hollywood smile', label: 'Hollywood smile' },
	{ value: 'Coaching', label: 'Coaching' },
	{ value: 'Psychonutrition', label: 'Psychonutrition' },
	{ value: 'Couronne dentaire', label: 'Couronne dentaire' },
	{ value: 'Aroma-thérapeute', label: 'Aroma-thérapeute' },
	{ value: 'Thérapies', label: 'Thérapies' },
	{ value: 'Prothese dentaire', label: 'Prothese dentaire' },
	{ value: 'Esthétique dentaire', label: 'Esthétique dentaire' },
	{ value: 'Médecine Esthétique', label: 'Médecine Esthétique' },
	{ value: 'Lasers Médicaux', label: 'Lasers Médicaux' },
	{ value: 'Médecine Régénérative', label: 'Médecine Régénérative' },
];

export const moyenne_de_payement = [];



export const days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => {
	return {
		label: day,
		value: moment().isoWeekday(day).day().toString()
	}
})
