const remoteURL = "http://localhost:8088"

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
    .then(res => res.json())
}

export const deleteEmployee = (id) => {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}