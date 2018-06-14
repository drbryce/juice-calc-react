import { FETCH_BRANDS, FETCH_FLAVORS, FETCH_RECIPES, FETCH_ORDERS, SET_TOKEN } from './types'

let APIurl = 'https://juice.pod.party/'

//should be done like this
/* let getRequest = (url, token) => {
  fetch(url, {
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'GET',
  })
    .then(response => response.json())
}

export const fetchBrands = (token) => dispatch => {
  getRequest(APIurl + 'brand/listjson', token)
    .then(brands => {
      dispatch({
        type: FETCH_BRANDS,
        payload: brands
      })
    })
}
*/

export const fetchBrands = (token) => dispatch => {
  fetch(APIurl + 'brand/listjson', {
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then(brands => {
      dispatch({
        type: FETCH_BRANDS,
        payload: brands
      })
    })
}

export const fetchFlavors = (token) => dispatch => {
  fetch(APIurl + 'flavor/listjson', {
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then(flavors => {
      dispatch({
        type: FETCH_FLAVORS,
        payload: flavors
      })
    })
}

export const fetchRecipes = (token) => dispatch => {
  fetch(APIurl + 'recipe/listjson', {
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then(recipes => {
      dispatch({
        type: FETCH_RECIPES,
        payload: recipes
      })
    })
}

export const fetchOrders = (token) => dispatch => {
  fetch(APIurl + 'flavor/listOrderJSON', {
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then(orders => {
      dispatch({
        type: FETCH_ORDERS,
        payload: orders
      })
    })
}

export const addBrand = (token, body) => dispatch => {
  fetch(APIurl + 'brand/add', {
    body: JSON.stringify(body),
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'POST',
  })
    .then(() => {
      dispatch(fetchBrands(token))
    })
}

export const addFlavor = (token, body) => dispatch => {
  fetch(APIurl + 'flavor/add', {
    body: JSON.stringify(body),
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'POST',
  })
    .then(() => {
      dispatch(fetchFlavors(token))
    })
}

export const addRecipe = (token, body) => dispatch => {
  fetch(APIurl + 'recipe/add', {
    body: JSON.stringify(body),
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'POST',
  })
    .then(() => {
      dispatch(fetchRecipes(token))
    })
}

export const deleteBrand = (token, itemID) => dispatch => {
  fetch(APIurl + 'brand/delete/' + itemID, {
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'DELETE',
  })
    .then(() => {
      dispatch(fetchBrands(token))
    })
}

export const deleteFlavor = (token, itemID) => dispatch => {
  fetch(APIurl + 'flavor/delete/' + itemID, {
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'DELETE',
  })
    .then(() => {
      dispatch(fetchFlavors(token))
    })
}

export const deleteRecipe = (token, itemID) => dispatch => {
  fetch(APIurl + 'recipe/delete/' + itemID, {
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'DELETE',
  })
    .then(() => {
      dispatch(fetchRecipes(token))
    })
}

export const setOrderFlavor = (token, itemID) => dispatch => {
  fetch(APIurl + 'flavor/order/flag/' + itemID, {
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'POST',
  })
    .then(() => {
      dispatch(fetchOrders(token))
    })
}

export const unsetOrderFlavor = (token, itemID) => dispatch => {
  fetch(APIurl + 'flavor/order/unflag/' + itemID, {
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'POST',
  })
    .then(() => {
      dispatch(fetchOrders(token))
    })
}

export const setMixDate = (token, itemID) => dispatch => {
  fetch(APIurl + 'recipe/mixed/' + itemID, {
    headers: {
      'user-agent': 'React Juice Calculator',
      'content-type': 'application/json',
      'token': token
    },
    method: 'POST',
  })
    .then(() => {
      dispatch(fetchOrders(token))
    })
}


export const setToken = (token) => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  })
}