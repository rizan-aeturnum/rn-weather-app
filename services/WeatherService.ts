import HttpRequest from "./HttpRequest";

class WeatherService {
  static async getWeatherDataForCity(city: CityData) {
    const response = await HttpRequest.get("current.json", {
      q: `${city.lat},${city.lon}`,
    });
    if (response.status !== 200) throw new Error("Something went wrong");
    return response.data;
  }
}

export default WeatherService;
