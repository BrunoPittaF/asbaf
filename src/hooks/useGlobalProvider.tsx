import { useState } from 'react';
import { IUserStateContext } from '../interfaces/global';

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

  return {
    userState,
    setUserState,
  };
}
