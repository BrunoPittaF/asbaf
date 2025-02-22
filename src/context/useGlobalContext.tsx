import { createContext, ReactNode } from 'react';
import { useGlobalProvider } from '../hooks/useGlobalProvider';
import { IGlobalContext } from '../interfaces/global';

interface IUseGlobalContext {
  children: ReactNode;
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export function GlobalProvider(props: IUseGlobalContext) {
  const globalProvider = useGlobalProvider();

  return <GlobalContext.Provider value={globalProvider}>{props.children}</GlobalContext.Provider>;
}
