

const BASE_URL = 'https://restcountries.com/v3.1';

export const getCountriesByRegion = async () => {
        try {
            //console.log(`${BASE_URL}/region/Americas?fields=name,capital,currencies,flags,region`);
            const response = await fetch(`${BASE_URL}/region/Americas?fields=name,capital,currencies,flags,region,cca2`);
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


export const getCountriesByCCA2 = async (cca2) => {
    try {
        //console.log(`${BASE_URL}/region/Americas?fields=name,capital,currencies,flags,region`);
        const response = await fetch(`${BASE_URL}/alpha/${cca2}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data[0]; 
        //return data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
};

