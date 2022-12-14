const BASE_URL = "https://northwind.vercel.app/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

const instance = {
  getAll: async (url) => {
    let responseData = [];

    await axiosInstance
      .get(`${url}`)
      .then((res) => {
        responseData = res.data;
        // console.log("instance", responseData);
      })
      .catch((err) => {
        console.log("error", err);
        throw err;
      });

    return responseData;
  },
};
