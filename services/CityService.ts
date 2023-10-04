import AsyncStorage from '@react-native-async-storage/async-storage';

import HttpRequest from './HttpRequest';
import { CityData } from '../types/apidata';
import { CITY_STORAGE_KEY } from '../utils/constants/appConstants';

class CityService {
  static async getSearchedCity(searchWord: string): Promise<CityData[]> {
    try {
      const res = await HttpRequest.get('search.json', { q: searchWord });
      if (res.status !== 200) return [];
      return res.data;
    } catch (ex) {
      console.log(ex);
      return [];
    }
  }

  static async addCityToStorage(city: CityData): Promise<void> {
    const cities = await CityService.getCitiesFromStorage();
    const isCityAlreadyAvailable = cities.some((c) => c.url === city.url);
    if (isCityAlreadyAvailable) throw new Error('Already city is exist');
    cities.push(city);
    await AsyncStorage.setItem(CITY_STORAGE_KEY, JSON.stringify(cities));
  }

  static async getCitiesFromStorage(): Promise<CityData[]> {
    const citiesData = await AsyncStorage.getItem(CITY_STORAGE_KEY);
    return JSON.parse(citiesData || '[]') as CityData[];
  }

  static async deleteCityFromStorage(cityUrl: string): Promise<void> {
    const cities = await CityService.getCitiesFromStorage();
    const newCityList = cities.filter((city) => city.url !== cityUrl);
    await AsyncStorage.setItem(CITY_STORAGE_KEY, JSON.stringify(newCityList));
  }
}

export default CityService;
