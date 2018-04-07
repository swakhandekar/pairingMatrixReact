import {fetchMatrix, buildMatrix, MatrixActions} from "../../../src/components/Matrix/actions";
import {LoadingState} from "../../../src/components/utils/enums";
import * as pairApi from "../../../src/services/apiServices/pairApi";

describe('Matrix actions', () => {
  describe('fetchMatrix', () => {
    const mockDispatch = jest.fn();

    it('should dispatch LOADING state on start', async () => {
      spyOn(pairApi, 'getPairingData').and.returnValue(Promise.reject());
      await fetchMatrix()(mockDispatch);

      expect(mockDispatch.mock.calls[0][0]).toEqual({type: MatrixActions.LOADING_MATRIX});
    });

    it('should call getPairingData', async () => {
      spyOn(pairApi, "getPairingData").and.returnValue(Promise.resolve());

      await fetchMatrix()(mockDispatch);

      expect(pairApi.getPairingData).toHaveBeenCalledTimes(1);
    });

    it('should dispatch FAILED state on failed api call', async () => {
      spyOn(pairApi, 'getPairingData').and.returnValue(Promise.reject());

      await fetchMatrix()(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith({type: MatrixActions.LOAD_MATRIX_FAILED});
    });

    it('should dispatch FINISHED state with users and pairs on successful api call', async () => {
      const responseData = {
        data: {
          users: [{Name: "testUser"}],
          pairs: [{UserOne: 23, UserTwo: 44, Count: 5}],
        }
      };
      spyOn(pairApi, 'getPairingData').and.returnValue(Promise.resolve(responseData));

      await fetchMatrix()(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: MatrixActions.BUILD_MATRIX,
        users: responseData.data.users,
        pairs: responseData.data.pairs
      });
    });
  });
});
