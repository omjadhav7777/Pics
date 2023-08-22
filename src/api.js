import axios from "axios";

const SearchImages = async (term) => {
    const page = 1;
    const per_page = 30;
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID oJ56J2_axK9L0O3RxXehDei6d1r9P7rrDA1boUWANaA',
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