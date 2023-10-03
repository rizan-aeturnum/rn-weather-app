import ApiRequest from "./ApiRequest";

class WeatherService {
  static async getWeatherDataForCity(city: CityData) {
    const response = await ApiRequest.get("current.json", {
      q: `${city.lat},${city.lon}`,
    });
    if (response.status !== 200) throw new Error("Something went wrong");
    return response.data;
  }
}

export default WeatherService;
