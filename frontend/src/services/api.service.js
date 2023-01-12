import axios from "axios";

export const callApi = async (options) => {
  try {
    return await axios(options);
  } catch (error) {
    console.log(error);
  }
};

// export const callApi = async (options) => {
//   try {
//     const response = await axios(options);
//     const { data } = response;

//     return {
//       data,
//       error: null,
//     };
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       const axiosError = error;
//       const { response } = axiosError;
//       let message = "http request failed";
//       if (response && response.statusText) {
//         message = response.statusText;
//       }

//       if (axiosError.message) {
//         message = axiosError.message;
//       }

//       if (response && response.data && response.data.message) {
//         message = response.data.message;
//       }

//       return {
//         data: null,
//         error: {
//           message,
//         },
//       };
//     }

//     return {
//       data: null,
//       error: {
//         message: error.message,
//       },
//     };
//   }
// };
