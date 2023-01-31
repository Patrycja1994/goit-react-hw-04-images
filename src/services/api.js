import axios from 'axios'; 


export const fetchImages = async ( query, page) => {
    const response = await axios.get (`https://pixabay.com/api/`, {
        method: 'get',
        params: {
            q: query,
            page: page,
            key: '31081943-fde7852d3c642a63447541410',
            orientation: 'horizontal',
            per_page: 12,
            image_type: 'photo',
            safesearch: true,
       },
    });
    return response.data.hits;
};