import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './redux/actions'
import * as types from './redux/constants'
import firmsReducer from "./redux/reducer";
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const firms = [
    {
        id : 21,
        company:"Test 1 Insurance Company",
        online: {
            website: "test1.com",
            email: "test1@tes12.com",
            phone: "083736333535"
        }
    },
    {
        id : 22,
        company:"Test 2 Insurance Company",
        online: {
            website: "test2.com",
            email: "test2@test2.com",
            phone: "0037575733535"
        }
    }
]

const offerings = [
    {
        trip_type: ['Single Trip'],
        cover_area: "Worldwide including USA, Canada & Caribbean",
        land_30_days_max_age: 1000,
        cruise_30_days_max_age: 75,
        cruis_45_days_max_age: 86,
        land_45_days_max_age: 58,

    },
    {
        trip_type: ['Annual Multi Trip'],
        cover_area: "UK & Europe",
        land_30_days_max_age: 98,
        cruise_30_days_max_age: 57,
        cruis_45_days_max_age: 67,
        land_45_days_max_age: 51,

    }
]

describe("Actions Tests", ()=>{
  
        it('should return all firms', () => {
          const testFirms = firms;
          const expectedAction = {
            type: types.GET_FIRMS_SUCCESS,
            payload: testFirms
          }
          expect(actions.getFirmsSuccess(firms)).toEqual(expectedAction)
        })

        it('should return all offerings', () => {
            const testOffering = offerings;
            const expectedAction = {
              type: types.GET_OFFERINGS_SUCCESS,
              payload: testOffering
            }
            expect(actions.getOfferingsSuccess(offerings)).toEqual(expectedAction)
          })
})

describe("Reducers Tests", ()=> {
    it("should return the initial state", () => {
        const newState = firmsReducer(undefined, {});
        expect(newState.firms).toEqual([]);
      });
      it("should return new state if it recieves type", () => {
        const newState = firmsReducer(undefined, {
            type: types.GET_FIRMS_SUCCESS,
            payload: firms,
          });
          expect(newState.firms).toEqual(firms);
        });
      
})
