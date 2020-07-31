import axios from "axios";
import { GET_FIRMS_SUCCESS, GET_OFFERINGS_SUCCESS } from "./constant";

const algoliasearch = require("algoliasearch");
const client = algoliasearch("0K37IDKMFY", "e86ea9a6aba13065305eb793da96f481");
const firms = client.initIndex("travel-firm");

export const getAlgoFirms = () => {
  return (dispatch) =>
    firms.search("").then((res) => {
      dispatch(getFirmsSuccess(res));
      console.log(res.hits);
    });
};

export const getFirmsSuccess = (firms) => ({
  type: GET_FIRMS_SUCCESS,
  payload: firms,
});
