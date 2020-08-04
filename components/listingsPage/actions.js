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
    const filteredPool = pool.filter((value) => Object.keys(value).length != 0);
    // console.log(filteredPool);
    const selectedOfferings = filteredPool.reduce((acc, value) => {
      return acc.filter((offering) =>
        offering[Object.keys(value)].includes(Object.values(value)[0])
      );
    }, offerings);
    console.log(selectedOfferings);
    dispatch({
      type: FILTER_OFFERING,
      payload: selectedOfferings,
    });
  };
};
