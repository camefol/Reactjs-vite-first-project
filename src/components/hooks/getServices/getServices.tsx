import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchServices = async () => {
    try {
      const response = await axios.get('/servicesData.json');
      if (!response.data || !Array.isArray(response.data.data)) {
        throw new Error('Invalid data format received from server');
      }
      return response.data.data;
    } catch (error) {
      console.error('Failed to fetch services:', error);
      throw new Error('Failed to fetch services. Please try again later.');
    }
  };

  const getServices = () => {
    return useQuery({
      queryKey: ['services'],
      queryFn: fetchServices,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
      refetchOnWindowFocus: true,
    });
  };
  

export default getServices; 