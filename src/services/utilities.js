export function authHeader(accessToken) {
  if (accessToken) {
    return { Authorization: "Bearer " + accessToken };
  } else {
    let user = JSON.parse(sessionStorage.getItem("mmsgUser"));
    if (user && user.token) {
      return { Authorization: "Bearer " + user.token };
    } else {
      return {};
    }
  }
}

export async function query(url, options = {}, accessToken) {
  try {
    const { headers, ...others } = options;
    const fetchOptions = {
      headers: {
        ...authHeader(accessToken),
        ...headers,
      },
      ...others,
    };
    const response = await fetch(url, fetchOptions);
    const text = await response.text();
    let data = text;
    //just in case middleware doesn't return json
    try {
      data = JSON.parse(text);
    } catch (err) {
      //do nothing
    }

    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        //logout();
        if (!window.location.pathname.startsWith("/login")) {
          window.location.href = "/login";
        }
      }

      const error = (data && data.message) || response.statusText;
      throw new Error(`${response.status} ${error}`);
    }
    return data;
  } catch (err) {
    return Promise.reject(err.message);
  }
}

export const saveUser = (user) =>
  window.sessionStorage.setItem("toeknAppUser", JSON.stringify(user));

export const logoutUser = () => {
  window.sessionStorage.removeItem("toeknAppUser");
  window.location.href = "/login";
};
