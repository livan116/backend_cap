const URL = "https://backend-cap-final.onrender.com/api";
export const register = (data) => {
  return fetch(`${URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const login = (data) =>{
    return fetch(`${URL}/user/login`,{
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
}

export const getJobs = async ({ limit, offset, name, signal }) => {
  try {
    const response = await fetch(`${URL}/job?limit=${limit}&offset=${offset}&name=${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal, // Pass the AbortController signal
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      console.error(`Failed to fetch jobs: ${response.statusText}`);
      throw new Error(`Failed to fetch jobs: ${response.statusText}`);
    }

    // Return the response for further processing
    return response;

  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

export const createJob = (data) =>{
  return fetch(`${URL}/job`,{
    method : 'POST',
    headers:{
      'Content-Type':'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    },
    body:JSON.stringify(data)
  })
}

export const getJobById = (id) =>{
  return fetch(`${URL}/job/${id}`,{
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json',
      'Authorization' : `${localStorage.getItem('token')}`
    },
  })
}

export const updateJob = (id,data) =>{
  return fetch(`${URL}/job/${id}`,{
    method : 'PUT',
    headers : {
      'Content-Type' : 'application/json',
      'Authorization' : `${localStorage.getItem('token')}`
    },
    body:JSON.stringify(data)
  })
}

export const deleteJob = (id) =>{
  return fetch(`${URL}/job/${id}`,{
    method : 'DELETE',
    headers : {
      'Content-Type' : 'application/json',
      'Authorization' : `${localStorage.getItem('token')}`
    }
  })
}
