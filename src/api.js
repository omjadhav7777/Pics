import axios from "axios";

const SearchImages = async (term) => {
    const page = 1;
    const per_page = 30; //Max Limit 30
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID GYLy61M4Zi8iG_T4WTUs0D4NLQPmchkNLNYG2P9QI8o',
        },
        params: {
            query: term,
            page: page,
            per_page: per_page,
        },
    });

    // console.log(response);

    return response.data.results;
}

export default SearchImages;