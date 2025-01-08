import { useContext } from 'react';
import { LoadingContext } from '../context/useLoadingContext';

export function useLoadingContext() {
  const context = useContext(LoadingContext);

  if (typeof LoadingContext === 'undefined') {
    throw new Error('Erro no contexto');
  }

  return context;
}
