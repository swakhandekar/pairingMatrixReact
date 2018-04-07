import {ApiInterface} from "../../../src/services/apiServices/ApiInterface";
import {getPairingData} from "../../../src/services/apiServices/pairApi";

describe('getPairingData', () => {
  it('should call ApiInterface.get with /pairing/all', () => {
    const returnValue = "returned";
    spyOn(ApiInterface, "get").and.returnValue(returnValue);

    const value = getPairingData();

    expect(ApiInterface.get).toHaveBeenCalled();
    expect(value).toBe(returnValue);
  });
});
