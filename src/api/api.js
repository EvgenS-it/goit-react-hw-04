import axios from 'axios';

const fetchImages = async (query = 'cat', page = 1) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query,
      page,
      orientation: 'landscape',
    },
    headers: {
      Authorization: 'Client-ID dLBR2aie19Pf8Zk_xUX3vQu4vQ20Et0vPLq_v8BBqmM',
    },
  });
  return response.data;
};

export default fetchImages;

// export default async function fetchImages(query = 'cat', page = 1){
//     return await axios.get("https://api.unsplash.com/search/photos", {
//         params: {
//             query,
//             page,
//             orientation: "landscape",
//         },
//         headers: {
//             Authorization: "Client-ID dLBR2aie19Pf8Zk_xUX3vQu4vQ20Et0vPLq_v8BBqmM",
//         },
//     });
// }
