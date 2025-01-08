import { createContext, ReactNode } from 'react';
import { useLoadingProvider } from '../hooks/useLoadingProvider';
import { ILoadingContext } from '../interfaces/global';

interface IUseLoadingContext {
  children: ReactNode;
}

export const LoadingContext = createContext({} as ILoadingContext);

export function UseLoadingContext(props: IUseLoadingContext) {
  const globalProvider = useLoadingProvider();

  return <LoadingContext.Provider value={globalProvider}>{props.children}</LoadingContext.Provider>;
}

export default LoadingContext;
