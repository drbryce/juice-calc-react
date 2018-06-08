class DBController {

  static APIurl = 'https://juice.pod.party/'

  static tryLogin(user, pass) {
    const response = fetch(this.APIurl + 'login', {
      body: JSON.stringify( {
        username: user,
        password: pass
      }),
      headers: {
        'user-agent': 'React Juice Calculator',
        'content-type': 'application/json'
      },
      method: 'POST',
    })
      .then(response => {
        //success
        return response.json()
      })
    return response
  }


  static getRequest(url, token) {
    const response = fetch(url, {
      headers: {
        'user-agent': 'React Juice Calculator',
        'content-type': 'application/json',
        'token': token
      },
      method: 'GET',
    })
      .then(response => {
        //success
        return response.json()
      })
    return response
  }

  static updateBrands(token) {
    return this.getRequest(this.APIurl + 'brand/listjson', token)
  }

  static updateFlavors(token) {
    return this.getRequest(this.APIurl + 'flavor/listjson', token)
  }

  static updateRecipes(token) {
    return this.getRequest(this.APIurl + 'recipe/listjson', token)
  }

  static updateOrders(token) {
    return this.getRequest(this.APIurl + 'flavor/listOrderJSON', token)
  }

}

export default DBController