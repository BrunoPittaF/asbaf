export interface IUserStateContext {
  id: number;
  Image: string;
  name: string
}

export interface IGlobalContext {
  userState: IUserStateContext,
  setUserState: React.Dispatch<React.SetStateAction<IUserStateContext>>,
}

export interface ILoadingContext {
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}