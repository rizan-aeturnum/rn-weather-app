import { useEffect, useState } from "react";
import CityService from "../services/CityService";
import { debounce } from "lodash-es";

function useCitySearch() {
  const [searchWord, setSearchWord] = useState<string>("");
  const [searchedCities, setSearchCities] = useState<CityData[]>([]);

  const loadSearchedCities = debounce(() => {
    CityService.getSearchedCity(searchWord)
      .then((cities) => {
        setSearchCities(cities);
      })
      .catch((ex) => console.log(ex));
  }, 500);

  useEffect(() => {
    if (searchWord.length >= 2) {
      loadSearchedCities();
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
