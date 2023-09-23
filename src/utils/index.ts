import Cookies from "js-cookie";

export function saveToken(token: string) {
  Cookies.set("token", token);
  console.log("token set");

  return true;
}

export function getToken() {
  const token = Cookies.get("token");
  if (token) {
    return token;
  } else {
    return false;
  }
}

export function hasToken() {
  const token = Cookies.get("token");
  if (token) {
    return true;
  } else {
    return false;
  }
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
