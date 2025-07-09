import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getServices = () => {
    return useQuery({
        queryKey: ['services'],
        queryFn: async() => {
            try {
                const response = await axios.get('servicesData.json'); // Added leading slash
                return response.data.data || [];
            } catch (error) {
                console.error('Failed to fetch services:', error);
                throw error; // Re-throw so React Query can handle it
            }
        },
        staleTime: 5 * 60 * 1000,
        retry: 3,
        refetchOnWindowFocus: true,
    });
};

export default getServices; 