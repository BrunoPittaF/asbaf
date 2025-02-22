export interface IUserStateContext {
  id: number;
  Image: string;
  name: string
}

export interface IPartner {
  id?: number,
  cnpj: string,
  name: string,
  cellphone: string,
  email: string,
  instagram?: string,
  website?: string,
  note?: string,
  image?: FileList,
  isPartner?: boolean
}

export interface ILoggedUser {
  id: number;
  cpf: string,
  email: string,
  address: string,
  birthDate: string,
  name: string,
  cellphone: string,
  cellMobile: string,
  cellSefaz: string,
  sectorSefaz: string,
  numberAssociated: string,
  instagram: string,
  threads: string,
  facebook: string,
  Image: string
}

export interface IGlobalContext {
  userState: IUserStateContext,
  setUserState: React.Dispatch<React.SetStateAction<IUserStateContext>>,
  noticeGlobal: INotice,
  setNoticeGlobal: React.Dispatch<React.SetStateAction<INotice>>,
  partnerGlobal: IPartner,
  setPartnerGlobal: React.Dispatch<React.SetStateAction<IPartner>>,
  listPartner: IPartner[],
  setListPartner: React.Dispatch<React.SetStateAction<IPartner[]>>
}

export interface ILoadingContext {
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface INotice {
  content: string,
  id?: number,
  date: string,
  image: string,
  subtitle: string,
  title: string
}

export type NewsFormData = {
  image: FileList;
  title: string;
  subtitle: string;
  content: string;
};

export interface IInstagramLink {
  id?: number,
  url: string
}