import {
  GET_FIRMS_SUCCESS,
  GET_OFFERINGS_SUCCESS,
  FILTER_OFFERING,
} from "./constants";

const algoliasearch = require("algoliasearch");
const client = algoliasearch(
  process.env.NEXT_PUBLIC_APPLICATION_ID,
  process.env.NEXT_PUBLIC_API_KEY
);

const firms = client.initIndex("travel-firms");
const offerings = client.initIndex("travel-firm-offerings");

export const getAlgoFirms = () => {
  return (dispatch) =>
    firms.search("").then((res) => {
      dispatch(getFirmsSuccess(res));
    });
};

export const getAlgoOfferings = () => {
  return (dispatch) =>
    offerings.search("").then((res) => {
      dispatch(getOfferingsSuccess(res));
    });
};

export const getFirmsSuccess = (firms) => ({
  type: GET_FIRMS_SUCCESS,
  payload: firms,
});

export const getOfferingsSuccess = (offerings) => ({
  type: GET_OFFERINGS_SUCCESS,
  payload: offerings,
});

export const filterOfferings = (pool) => {
  return (dispatch, getState) => {
    // get data from the state
    const offerings = getState().listings.offerings.hits;
    const firms = getState().listings.firms.hits;

    // remove empty object from dispatched filter values
    const filteredPool = pool.filter((value) => Object.keys(value).length != 0);

    //  dispatch firm if filteredPool is empty
    if (filteredPool.length == 0) {
      dispatch({
        type: FILTER_OFFERING,
        payload: firms,
      });
    }

    // if filteredPool is not empty .....
    if (filteredPool.length > 0) {
      // obtain the selected offering through filteredPool
      const selectedOfferings = filteredPool.reduce((acc, value) => {
        return acc.filter((offering) => {
          for (var key in value) {
            if (typeof value[key] === "number") {
              let subtitle = parseInt(offering[Object.keys(value)]);
              return Object.values(value)[0] <= subtitle;
            }
            return offering[Object.keys(value)].includes(
              Object.values(value)[0]
            );
          }
        });
      }, offerings);

      // collected the ids of the selected offering into an array of array
      const offered = selectedOfferings.map((offering) => {
        let id = parseInt(offering.objectID);
        let arr = [];
        arr.push(id);
        return arr;
      });

      // flaten the collected offering into a single array
      const flatOffered = offered.flat();

      // use the selected ids for filter firms
      const selectedFirm = firms.map((firm) => {
        if (firm.offering_ids.some((ele) => flatOffered.includes(ele))) {
          return firm;
        }
      });

      // filtered empty object out of the selectedFirm
      const filteredFirm = selectedFirm.filter((selected) => {
        return selected != null;
      });

      // dispatch the result
      dispatch({
        type: FILTER_OFFERING,
        payload: filteredFirm,
      });
    }
  };
};
