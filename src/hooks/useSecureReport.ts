import { useState } from 'react';

export const useSecureReport = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      // Simula una llamada a un servicio o API
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, fetchData };
};