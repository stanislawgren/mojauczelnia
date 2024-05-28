import logo from "./../assets/logo.svg";
import {Link, useSearchParams} from 'react-router-dom';
import {ChangeEvent, useEffect, useState} from "react";

import {EX_CITIES} from "../exampleData.ts";
import {MultiAutocomplete} from "../Facade/MultiAutocomplete.tsx";
import useDebounce from "../hooks/useDebounce.tsx";

export interface IFilters {
  search: string
  cities: string[]
  schools: string
}

export const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [filters, setFilters] = useState<IFilters>({
    search: searchParams.get('search') || '',
    cities: searchParams.getAll('cities') || [],
    schools: searchParams.get('schools') || ''
  })

  const debouncedFilters = useDebounce<IFilters>(filters, 500)

  const handleFiltersChange = (name: string, newRoles: string[] | string) => {
    setFilters(prevState => ({
      ...prevState,
      [name]: newRoles
    }))
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiltersChange(e.target.name, e.target.value)
  }

  useEffect(() => {
    setSearchParams({...debouncedFilters}, {replace: true})
  }, [debouncedFilters, setSearchParams]);

  return (
    <div className="app-container">
      <div className="background-photo"></div>
      <div className="main-page__navbar">
        <div className="main-page__navbar-container">
          <img
            src={logo}
            alt="logo"
            style={{position: "absolute", left: "-20px"}}
          />

          <Link to="/login" className="main-button" style={{}}>
            Zaloguj się
          </Link>
          <div style={{width: "20px"}}>
          </div>
          <Link to="/register" className="main-button" style={{}}>
            Zarejestruj się
          </Link>

        </div>
      </div>
      <div className="main-page__container">
        <div className="main-page__container-search-bar">
          <input type="text" className="main-input" placeholder="Wyszukaj" name='search' value={filters.search}
                 onChange={handleInputChange}
          />
          <MultiAutocomplete values={filters.cities}
                             options={EX_CITIES}
                             stateKey={'cities'}
                             handleChange={handleFiltersChange}
          />
          <input type="text" className="main-input" placeholder="Szkoła" name='schools' value={filters.schools}
                 onChange={handleInputChange}
          />
          <button className="icon-button">
            <span className="material-icons" style={{fontSize: "24px"}}>
              search
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
