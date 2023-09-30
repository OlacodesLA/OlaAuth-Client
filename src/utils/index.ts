import Cookies from "js-cookie";

export function isAuthenticated(): boolean {
  // Check if the user authentication token cookie exists
  const token = Cookies.get("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}

export function getToken(): boolean | string {
  const token = Cookies.get("token");
  if (token) {
    console.log(token);
    return token;
  } else {
    return false;
  }
}

export function setToken() {
  Cookies.set("token", getToken().toString(), { expires: 7 });
  return true;
}

export function removeToken() {
  Cookies.remove("token");
  return true;
}

export function fmtResponse(responseData: any, error: boolean, toast: any) {
  const { statusText, status, data } = responseData;

  if (error) {
    data.toast && toast.error(data.message);
    console.log(data);

    return {
      status,
      serverResponse: data,
      statusText,
      error: true,
    };
  } else {
    data.toast && toast.success(data.message);
    console.log(data);
    return {
      status,
      serverResponse: data,
      statusText,
      error: false,
    };
  }
}
