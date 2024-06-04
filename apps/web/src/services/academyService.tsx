import axios from "axios";

export const getAcademies = async (): Promise<any> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/academies/get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => resolve(result.data))
      .catch((error) => resolve({ errors: { axios: error } }));
  });
};
