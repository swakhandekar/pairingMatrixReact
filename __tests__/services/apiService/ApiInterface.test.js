import axios from "axios";
import {ApiInterface} from "../../../src/services/apiServices/ApiInterface";

describe('ApiInterface', () => {
  describe('baseUrl', () => {
    it('should return localhost:8080 as base url if env is not set', () => {
      expect(ApiInterface.baseUrl()).toBe("http://localhost:8080");
    });

    it('should return set base url if BASE_URL is set in env', () => {
      process.env.BASE_URL = "http://pairing-go.com";
      expect(ApiInterface.baseUrl()).toBe("http://pairing-go.com");
      delete process.env.BASE_URL;
    });
  });

  describe('get', () => {
    it('should return promise by axios.get', () => {
      let returnValue = "returned";
      spyOn(axios, "get").and.returnValue(returnValue);

      expect(ApiInterface.get()).toBe(returnValue);
    });

    it('should call axios.get with uri appending base url', () => {
      const mockUri = "/mock/data";
      spyOn(axios, "get");

      ApiInterface.get(mockUri);

      expect(axios.get).toHaveBeenCalledWith("http://localhost:8080/mock/data");
    });
  })
});
