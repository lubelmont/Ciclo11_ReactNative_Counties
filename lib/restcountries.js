

const BASE_URL = 'https://restcountries.com/v3.1';

export const getCountriesByRegion = async () => {
        try {
            //console.log(`${BASE_URL}/region/Americas?fields=name,capital,currencies,flags,region`);
            const response = await fetch(`${BASE_URL}/region/Americas?fields=name,capital,currencies,flags,region`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching countries:', error);
            throw error;
        }
};

