import { FETCH_BRANDS, FETCH_FLAVORS, FETCH_RECIPES, FETCH_ORDERS, SET_TOKEN } from '../actions/types'

const initialState = {
  brandList: [],
  flavorList: [],
  recipeList: [],
  orderList: [],
  token: '',
  loggedIn: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        loggedIn: true
      }
    case FETCH_BRANDS:
      return {
        ...state,
        brandList: action.payload
      }
    case FETCH_FLAVORS:
      return {
        ...state,
        flavorList: action.payload
      }
    case FETCH_RECIPES:
      return {
        ...state,
        recipeList: action.payload
      }
      case FETCH_ORDERS:
      return {
        ...state,
        orderList: action.payload
      }
    default:
      return state
  }
}