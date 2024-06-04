import { useAuth } from "../hooks/useAuth";
import logo from "./../assets/logo.svg";
import { Link, useSearchParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";

import { EX_CITIES } from "../exampleData.ts";
import { MultiAutocomplete } from "../Facade/MultiAutocomplete.tsx";
import useDebounce from "../hooks/useDebounce.tsx";
import { getAcademies, getCitiesFromDb } from "../services/searchService.tsx";
import { AxiosError } from "axios";
import { UserNav } from "../components/UserNav.tsx";

export interface IFilters {
  search: string;
  cities: string[];
  schools: string;
}

export interface IAcademy {
  academy_description: string;
  academy_id: number;
  academy_name: string;
  address: string;
  city: string;
  recrutment: string;
  errors?: {
    axios: AxiosError;
  };
}

export const MainPage = () => {
  const auth = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [cities, setCities] = useState<string[]>([]);
  const [academies, setAcademies] = useState<IAcademy[]>([]);

  const getCities = async () => {
    const res = await getCitiesFromDb();
    if (res.cities) {
      const arr: string[] = [];
      res.cities.forEach((city: { city: string }) => {
        arr.push(city.city);
      });

      setCities(arr);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  const [filters, setFilters] = useState<IFilters>({
    search: searchParams.get("search") || "",
    cities: searchParams.getAll("cities") || [],
    schools: searchParams.get("schools") || "",
  });

  const debouncedFilters = useDebounce<IFilters>(filters, 500);

  const handleFiltersChange = (name: string, newRoles: string[] | string | null) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: newRoles,
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiltersChange(e.target.name, e.target.value);
  };

  const handleAcademies = async () => {
    const res = await getAcademies(filters);
    console.log(res);
    setAcademies(res);
  };

  useEffect(() => {
    setSearchParams({ ...debouncedFilters }, { replace: true });
    handleAcademies();
  }, [debouncedFilters, setSearchParams]);

  return (
    <div className="app-container">
      <div className="background-photo"></div>
      <div className="main-page__navbar">
        <div className="main-page__navbar-container">
          <img
            src={logo}
            alt="logo"
            style={{ marginLeft: '-40px' }}
          />

          <div className="university-page__navbar__buttons">
            {auth.token ? (
              <UserNav />
            ) : (
              <>
                <Link to="/login" className="main-button" style={{}}>
                  Zaloguj się
                </Link>
                <div style={{ width: "20px" }}></div>
                <Link to="/register" className="main-button" style={{}}>
                  Zarejestruj się
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="main-page__container">
        <div className="main-page__container-search-bar">
          <MultiAutocomplete
            values={filters.cities}
            options={cities}
            stateKey={"cities"}
            handleChange={handleFiltersChange}
            multiple
          />
          <input
            type="text"
            className="main-input"
            placeholder="Szkoła"
            name="schools"
            value={filters.schools}
            onChange={handleInputChange}
          />
          <button className="icon-button">
            <span className="material-icons" style={{ fontSize: "24px" }}>
              search
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
