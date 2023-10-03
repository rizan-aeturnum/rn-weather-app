import { useEffect, useState } from "react";
import CityService from "../services/CityService";

function useCitySearch() {
  const [searchWord, setSearchWord] = useState<string>("");
  const [searchedCities, setSearchCities] = useState<CityData[]>([]);

  useEffect(() => {
    if (searchWord.length >= 2) {
      CityService.getSearchedCity(searchWord)
        .then((cities) => {
          setSearchCities(cities);
        })
        .catch((ex) => console.log(ex));
    } else {
      setSearchCities([]);
    }
  }, [searchWord]);
  return {
    searchWord,
    searchedCities,

    setSearchWord,
  };
}

export default useCitySearch;
