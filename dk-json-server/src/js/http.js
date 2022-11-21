class HTTPServices {


  async get(url) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
				'Content-Type': 'application/json'
			},
    });
    console.log(`response: ${response}`);
    const responseData = await response.json();
    console.log(`responseData: ${responseData}`);
    return responseData;
  }

  async post(url, data) {
    console.log(`raw data: ${data}`);
    const tempData = JSON.stringify(data);
    console.log(`stringified data: ${tempData}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(`response: ${response}`);
    const responseData = await response.json();
    console.log(`responseData: ${responseData}`);
    return responseData;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  }

  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const responseData = 'Resource Deleted';
    return responseData;
  }

 }

 export default HTTPServices;