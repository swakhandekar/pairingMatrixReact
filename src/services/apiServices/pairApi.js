import {ApiInterface} from "./ApiInterface";

export const getPairingData = () => {
  return ApiInterface.get("/pairing/all")
};
