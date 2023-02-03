export const getData = async (setData, url, body) => {
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((data) => data.json())
    .then((response) => setData(response.data));
};

export const postData = async (url, body) => {
  let resp = {};
  await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    .then((response) => response.json())
    .then((data) => {
     resp = data;
    })
    return resp;
  };