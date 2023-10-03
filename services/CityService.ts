import { CITY_STORAGE_KEY } from "../utils/constants/appConstants";
import ApiRequest from "./ApiRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CityService {
  static async getSearchedCity(searchWord: string): Promise<CityData[]> {
    try {
      const res = await ApiRequest.get("search.json", { q: searchWord });
      if (res.status !== 200) return [];
      return res.data;
    } catch (ex) {
      console.log(ex);
      return [];
    }
  }

  static async addCityToStorage(city: CityData): Promise<void> {
    const citiesData = await AsyncStorage.getItem(CITY_STORAGE_KEY);
    const cities = JSON.parse(citiesData || "[]") as CityData[];
    cities.push(city);
    await AsyncStorage.setItem(CITY_STORAGE_KEY, JSON.stringify(cities));
  }
}

export default CityService;
