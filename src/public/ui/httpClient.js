class HttpClient {
  async post(url) {
    const response = await fetch(url, {
      method: 'POST'
    })

    return response.json()
  }

  async put(url) {
    const response = await fetch(url, {
      method: 'PUT'
    })

    return response.json()
  }
}

export { HttpClient }
