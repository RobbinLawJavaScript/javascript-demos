export const getData = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  if (!response.ok) {
    throw new Error('Bad URL or Server is Down')
  }
  const responseData = await response.json()
  return responseData
}

export const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (!response.ok) {
    throw new Error('Bad URL or Server is Down')
  }
  const responseData = await response.json()
  return responseData
}

export const putData = async (url, data) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (!response.ok) {
    throw new Error('Bad URL or Server is Down')
  }
  const responseData = await response.json()
  return responseData
}

export const deleteData = async (url, itemId) =>{
  let fullUrl = `${url}/${itemId}`
  const response = await fetch(fullUrl, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  })
  if (!response.ok) {
    throw new Error('Bad URL or Server is Down')
  }
  const responseData = 'Resource Deleted'
  return responseData
}
