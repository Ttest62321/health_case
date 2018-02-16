const handleResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusText: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
}

const getMedicalHistory = () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/medical_histories`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getUserMedicalHistory = () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/1/medical_histories`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}
const patchHeaders = (note) => {
  return {
    method: `PATCH`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({note: note})
  }
}

const updateMedicalHistory =(note) => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/medical_histories`, patchHeaders(note))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

module.exports ={
  getMedicalHistory,
  updateMedicalHistory,
  getUserMedicalHistory,
}