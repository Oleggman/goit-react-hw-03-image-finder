import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '39209629-f3132ec928ad5cd36f2b712c3';

export const getImageByQuery = async (query, page) => {
  const params = new URLSearchParams({
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page,
    per_page: 12,
  });
  const key = `?key=${API_KEY}`;

  const images = await axios.get(key, { params });
  return images.data;
}
