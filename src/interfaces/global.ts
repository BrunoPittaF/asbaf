export interface IUserStateContext {
  id: number;
  Image: string;
  name: string
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