class HttpClient {
  async post(url) {
    const response = await fetch(url, {
      method: 'POST'
    })

    return response.json()
  }
}

export { HttpClient }
