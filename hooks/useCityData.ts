import { useEffect, useState } from 'react';

import CityService from '../services/CityService';

function useCityData() {
  const [cities, setCities] = useState<CityData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadCities = () => {
    setLoading(true);
    CityService.getCitiesFromStorage()
      .then((cities) => setCities(cities))
      .catch(() => setCities([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadCities();
  }, []);

  return {
    cities,
    loading,

    loadCities,
  };
}

export default useCityData;
