import { useContext } from 'react';
import { GlobalContext } from '../context/useGlobalContext';

export function useAppContext() {
  const context = useContext(GlobalContext);

  if (typeof GlobalContext === 'undefined') {
    throw new Error('Erro no contexto');
  }

  return context;
}
