import { SwapiPeopleResponse } from "./Counter-model";
import axios from "axios";

export const getCounterFromSwapi = (): Promise<SwapiPeopleResponse> => {
  return axios("https://swapi.co/api/people/1/")
    .then(res => res.data)
    .catch(err => console.log(err));
};
