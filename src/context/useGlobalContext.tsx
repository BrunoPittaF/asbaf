import { createContext, ReactNode } from 'react';
import { useGlobalProvider } from '../hooks/useGlobalProvider';
import { IGlobalContext } from '../interfaces/global';

interface IUseGlobalContext {
  children: ReactNode;
}

export const GlobalContext = createContext({} as IGlobalContext);

export function UseGlobalContext(props: IUseGlobalContext) {
  const globalProvider = useGlobalProvider();

  return <GlobalContext.Provider value={globalProvider}>{props.children}</GlobalContext.Provider>;
}

export default GlobalContext;
