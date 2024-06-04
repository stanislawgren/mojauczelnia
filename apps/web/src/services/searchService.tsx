import axios from "axios";
import { IAcademy } from "../pages";

export const getCitiesFromDb = async (): Promise<any> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/search/cities",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => resolve(result.data))
      .catch((error) => resolve({ errors: { axios: error } }));
  });
};

export const getAcademies = async ({
  schools,
  cities,
}: {
  schools: string;
  cities: string[];
}): Promise<IAcademy[]> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/search/academies",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        schools: schools,
        cities: cities,
      },
    })
      .then((result) => resolve(result.data))
      .catch((error) => resolve({ errors: { axios: error } }));
  });
};
