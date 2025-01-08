import { useState } from 'react';

export function useLoadingProvider() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return {
    isLoading,
    setIsLoading,
  };
}
