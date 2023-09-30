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
    return token;
  } else {
    return false;
  }
}

export function removeToken(): void {
  Cookies.remove("token");
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
