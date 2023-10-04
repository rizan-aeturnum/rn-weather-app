import { useEffect, useState } from 'react';

import WeatherService from '../services/WeatherService';

function useWeatherData(city: CityData) {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  const loadWeatherData = () => {
    setLoading(true);
    WeatherService.getWeatherDataForCity(city)
      .then(setWeatherData)
      .catch(() => setWeatherData(undefined))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadWeatherData();
  }, []);

  return {
    weatherData,
    loading,

    loadWeatherData,
  };
}

export default useWeatherData;
