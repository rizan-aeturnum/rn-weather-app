class ApiRequest {
  static baseUrl = process.env.EXPO_PUBLIC_API_URL;
  static apiKey = process.env.EXPO_PUBLIC_API_KEY;

  static async request(
    url: string,
    requestMethod: RequestInit["method"],
    queryParams?: Record<string, string>
  ) {
    const queryUrl = new URLSearchParams({
      key: ApiRequest.apiKey || "",
      ...queryParams,
    });
    const response = await fetch(
      `${ApiRequest.baseUrl}/${url}?${queryUrl.toString()}`,
      {
        method: requestMethod,
      }
    );
    return {
      status: response.status,
      data: await response.json(),
    };
  }

  static async get(endpoint: string, queryParams?: Record<string, string>) {
    return ApiRequest.request(endpoint, "GET", queryParams);
  }
}

export default ApiRequest;
