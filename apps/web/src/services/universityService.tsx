import axios, {AxiosError} from "axios";
import { IUniversity } from "../interfaces/IUniversity";

interface IUniversityResponse {
    data?: IUniversity
    errors?: {
        axios: AxiosError;
    };
}

export const getUniversityData = async (
  uniId: string
): Promise<IUniversityResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: `http://localhost:3000/university/${uniId}`,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((result) => resolve(result.data))
      .catch((error) => resolve({errors: {axios: error}}));
  });
};