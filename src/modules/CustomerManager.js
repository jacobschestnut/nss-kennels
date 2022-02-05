const remoteURL = "http://localhost:8088"

export const getCustomerById = (customerId) => {
  return fetch(`${remoteURL}/customers/${customerId}?_expand=animalId_expand=address`)
  .then(res => res.json())
}

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers`)
  .then(res => res.json())
}