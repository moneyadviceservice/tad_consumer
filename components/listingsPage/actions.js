import axios from "axios";
import {
  GET_FIRMS_SUCCESS,
  GET_OFFERINGS_SUCCESS,
  FILTER_OFFERING,
} from "./constant";

const algoliasearch = require("algoliasearch");
const client = algoliasearch("0K37IDKMFY", "e86ea9a6aba13065305eb793da96f481");
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
    const offerings = getState().data.offerings.hits;
    const firms = getState().data.firms.hits;
    // console.log(pool);
    const filteredPool = pool.filter((value) => Object.keys(value).length != 0);
    console.log(filteredPool);
    console.log(offerings);
    if (filteredPool.length == 0) {
      dispatch({
        type: FILTER_OFFERING,
        payload: firms,
      });
    }

    if (filteredPool.length > 0) {
      const selectedOfferings = filteredPool.reduce((acc, value) => {
        return acc.filter((offering) =>
          // console.log(offering[Object.keys(value)], Object.values(value))
          offering[Object.keys(value)].includes(Object.values(value)[0])
        );
      }, offerings);
      console.log(selectedOfferings);
      const offered = selectedOfferings.map((offering) => {
        let id = parseInt(offering.objectID);
        let arr = [];
        arr.push(id);
        return arr;
      });
      const flatOffered = offered.flat();
      console.log(flatOffered);
      const selectedFirm = firms.map((firm) => {
        if (firm.offering_ids.some((ele) => flatOffered.includes(ele))) {
          return firm;
        }
      });
      const filteredFirm = selectedFirm.filter((selected) => {
        return selected != null;
      });
      dispatch({
        type: FILTER_OFFERING,
        payload: filteredFirm,
      });
    }
  };
};
