import { useState } from 'react';
import { ILoggedUser, IUserStateContext } from '../interfaces/global';

export function useGlobalProvider() {
  const backupUser = {
    id: 0,
    Image: '',
    name: '',
  };
  const initialState: IUserStateContext = JSON.parse(
    localStorage.getItem('user') || JSON.stringify(backupUser)
  );

  const [userState, setUserState] = useState<IUserStateContext>(initialState);
  const [loggedUser, setLoggedUser] = useState<ILoggedUser>({
    id: 0,
    cpf: '',
    email: '',
    address: '',
    birthDate: '',
    name: '',
    cellphone: '',
    cellMobile: '',
    cellSefaz: '',
    sectorSefaz: '',
    numberAssociated: '',
    instagram: '',
    threads: '',
    facebook: '',
    Image: '',
  });

  return {
    userState,
    setUserState,
    loggedUser,
    setLoggedUser,
  };
}
