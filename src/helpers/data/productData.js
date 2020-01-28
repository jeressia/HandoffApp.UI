import axios from 'axios';

const baseUrl = 'https://localhost:44334/api/products';

const getAllProducts = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`)
    .then((result) => {
      resolve(result.data);
    })
    .catch((error) => {
      reject(error);
    })
    .catch((err) => reject(err));
});

export default { getAllProducts };
