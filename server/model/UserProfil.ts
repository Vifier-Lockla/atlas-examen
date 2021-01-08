export interface Compte {
  id: number;
  pseudo: string;
  motDePasse: string;
  nom: string;
  prenom: string;
  listeEmail: Email[];
  listeNumTelephone: Telephone[];
  listeAdresse: Adresse[];
}

export interface Email {
  id: number;
  email: string;
  typeCoordonnee: CoordonneeType;
  libelle: string;
}

export interface Telephone {
  id: number;
  telephone: string;
  typeCoordonnee: CoordonneeType;
  libelle: string;
}

export interface Adresse {
  id: number;
  numero: string;
  rue: string;
  codePostal: string;
  ville: string;
  departement: Departement;
  region: Region;
  pays: Pays;
  typeCoordonnee: CoordonneeType;
  libelle: string;
}


export interface CoordonneeType {
  id: number;
  code: string;
  designation: string;
  description: string;
}

export interface Departement {
  id: number;
  numero: string;
  nom: string;
  idRegion: number;
}

export interface Region {
  id: number;
  nom: string;
  codePays: string;
}

export interface Pays {
  code: string;
  nom: string;
  codeAlpha2: string;
  codeAlpha3: string;
}

export interface LoginInformation {
  id: number;
  pseudo: string;
  email: string;
}
