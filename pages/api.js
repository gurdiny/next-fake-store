const API_URL = "https://dummyjson.com";
export async function loginFun(username, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const json = await response.json();

  return json.token;
}

export async function getAllProducts() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/products`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await response.json();
  return json.products;
}

export async function getSingleProduct(id) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return json;
}
