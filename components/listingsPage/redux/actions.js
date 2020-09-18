import {
  GET_FIRMS_SUCCESS,
  GET_OFFERINGS_SUCCESS,
  FILTER_OFFERING,
} from "./constants";

const algoliasearch = require("algoliasearch");
const client = algoliasearch(
  process.env.NEXT_PUBLIC_APP_ID,
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
    const filteredPool = pool.filter((value) => Object.keys(value).length > 0);

    let age = 0;
    let insuranceOption;

    filteredPool.map((fill) => {
      if (fill.cruise_30_days_max_age) {
        age = fill.cruise_30_days_max_age;
      }
      if (fill.singleOption || fill.annualOption) {
        insuranceOption = fill.singleOption || fill.annualOption;
      }
    });

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
            // filter age
            if (typeof value[key] === "number") {
              let subtitle = parseInt(offering[Object.keys(value)]);
              return (
                subtitle === 1000 ||
                Object.values(value)[0] <= offering.cruise_30_days_max_age ||
                Object.values(value)[0] <= offering.cruise_45_days_max_age ||
                Object.values(value)[0] <= offering.cruise_55_days_max_age ||
                Object.values(value)[0] <= offering.land_30_days_max_age ||
                Object.values(value)[0] <= offering.land_45_days_max_age ||
                Object.values(value)[0] <= offering.land_55_days_max_age
              );
            }
            // filter when travelling
            if (key === "how_far_in_advance_trip_cover_weeks") {
              return Object.values(value)[0] <= parseInt(offering[key]);
            }
            // filter length of trip
            if (key === "singleOption" || key === "annualOption") {
              let land = "land_" + Object.values(value)[0] + "_days_max_age";
              let cruise =
                "cruise_" + Object.values(value)[0] + "_days_max_age";

              return (
                (parseInt(`${offering[land]}`) != -1 ||
                  parseInt(`${offering[cruise]}`) != -1) &&
                (age <= parseInt(`${offering[land]}`) ||
                  age <= parseFloat(`${offering[cruise]}`) ||
                  parseInt(`${offering[land]}`) === 1000 ||
                  parseFloat(`${offering[cruise]}`) === 1000)
              );
            }
            // // filter cruise without insurance option
            if (
              key === "cruise" &&
              Object.values(value)[0] === "Yes" &&
              typeof insuranceOption === "undefined"
            ) {
              return (
                offering.cruise_30_days_max_age >= 0 ||
                offering.cruise_45_days_max_age >= 0 ||
                offering.cruise_55_days_max_age >= 0
              );
            }
            // filter non cruise without insurance option
            if (
              key === "cruise" &&
              Object.values(value)[0] === "No" &&
              typeof insuranceOption === "undefined"
            ) {
              return (
                offering.land_30_days_max_age >= 0 ||
                offering.land_45_days_max_age >= 0 ||
                offering.land_55_days_max_age >= 0
              );
            }
            // filter cruise
            if (
              key === "cruise" &&
              Object.values(value)[0] === "Yes" &&
              typeof insuranceOption !== "undefined"
            ) {
              let cruise = "cruise_" + insuranceOption + "_days_max_age";
              return (
                (age <= offering[cruise] && offering[cruise] != -1) ||
                (offering[cruise] === 1000 && offering[cruise] > -1)
              );
            }
            // filter non cruise
            if (
              key === "cruise" &&
              Object.values(value)[0] === "No" &&
              typeof insuranceOption !== "undefined"
            ) {
              let land = "land_" + insuranceOption + "_days_max_age";
              return (
                (age <= offering[land] && offering[land] != -1) ||
                (offering[land] === 1000 && offering[land] > -1)
              );
            }

            // filter terminal prognosis not covered
            if (
              key === "will_cover_terminal_prognosis" &&
              Object.values(value)[0] === "No"
            ) {
              return (
                offering[Object.keys(value)].includes("Yes") ||
                offering[Object.keys(value)].includes("No") ||
                offering[Object.keys(value)].includes(null)
              );
            }
            // filter specialist equipment not covered
            if (
              key === "will_cover_specialist_equipment" &&
              Object.values(value)[0] === "No"
            ) {
              return (
                offering[Object.keys(value)].includes("Yes") ||
                offering[Object.keys(value)].includes("No") ||
                offering[Object.keys(value)].includes(null)
              );
            }
            // filter others
            return offering[Object.keys(value)].includes(
              Object.values(value)[0]
            );
          }
        });
      }, offerings);

      // console.log(selectedOfferings);
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

      // console.log(randomizeResult(filteredFirm));

      // console.log(filteredFirm);
      // dispatch the result
      dispatch({
        type: FILTER_OFFERING,
        payload: filteredFirm,
      });
    }
  };
};
