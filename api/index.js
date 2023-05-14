import axios from 'axios';
import { restaurants } from './RestaurantData';

export const getPlaceData = async () => {
    try {
        // const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
        //     {
        //         params: {
        //             query: 'eiffel tower',
        //             lang: 'en_US',
        //             units: 'km'
        //         },
        //         headers: {
        //             'X-RapidAPI-Key': 'abe749ecffmshf1c14216ddbdc6cp18ca9ajsnfeab3b236c35',
        //             'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        //         }
        //     }
        // );

        const data = restaurants;

        console.log(data)
        return data;
    } catch (error) {
        console.error(error);
        return null
    }
}