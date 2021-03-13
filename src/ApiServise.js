import axios from 'axios';
const BASEURL = 'https://pixabay.com/api/';
const APIKEY = '19641016-0771c97f44f84fb3a7a4f0c18';

const fetchImage = (fetchQuery, page) => {
  return axios
    .get(
      `${BASEURL}?q=${fetchQuery}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default fetchImage;
