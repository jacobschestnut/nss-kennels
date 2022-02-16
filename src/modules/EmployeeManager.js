const remoteURL = "http://localhost:8088"

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
    .then(res => res.json())
}

export const getEmployeeById = (employeeId) => {
  return fetch(`${remoteURL}/employees/${employeeId}?_expand=name&_expand=location`)
  .then(res => res.json())
}

export const deleteEmployee = (id) => {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}

export const addEmployee = (newEmployees) => {
  return fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployees)
  }).then(response => response.json())
}

export const updateEmployee = (editedEmployee) => {
  return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedEmployee)
  }).then(data => data.json());
}