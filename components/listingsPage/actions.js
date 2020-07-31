import axios from "axios";
import { GET_FIRMS_SUCCESS, GET_OFFERINGS_SUCCESS } from "./constant";

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
