import axios from "axios";

export const postReview = async (data: any): Promise<any> => {
  return new Promise((resolve) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/review/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((result) => resolve(result.data))
      .catch((error) => resolve({ errors: { axios: error } }));
  });
};

export const getReviews = async (academy_id: number): Promise<any> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/review/get",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        academy_id: academy_id,
      },
    })
      .then((result) => resolve(result.data))
      .catch((error) => resolve({ errors: { axios: error } }));
  });
};
