import { useAuth } from "../hooks/useAuth";
import logo from "./../assets/logo.svg";
import { Link, useSearchParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { MultiAutocomplete } from "../Facade/MultiAutocomplete.tsx";
import useDebounce from "../hooks/useDebounce.tsx";
import { getAcademies, getCitiesFromDb } from "../services/searchService.tsx";
import { AxiosError } from "axios";
import { UserNav } from "../components/UserNav.tsx";
import { NewsCard } from "../components/NewsCard.tsx";

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

  const handleFiltersChange = (
    name: string,
    newRoles: string[] | string | null
  ) => {
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
    //@ts-ignore
    setAcademies(res.academies);
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
          <Link to="/">
            <img src={logo} alt="logo" style={{ marginLeft: "-40px" }} />
          </Link>

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
        <div className="main-page__container-search">
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
          <div className="main-page__container-search-bar-items">
            {academies.map((academy, index) => {
              return (
                <a
                  className="main-page__container-search-bar-item"
                  key={index}
                  href={`/university/${academy.academy_id}`}
                >
                  {academy.academy_name}
                </a>
              );
            })}
          </div>
        </div>
        <section className="news">
          <NewsCard
            title="​Dlaczego studenci UAM wybrali UAM?"
            text="Poznajcie opinie studentów UAM i dowiedzcie się, dlaczego wybrali studia na Uniwersytecie im. Adama Mickiewicza w Poznaniu."
            date="Październik 14, 2024"
            img="https://t4.ftcdn.net/jpg/04/24/15/27/360_F_424152729_5jNBK6XVjsoWvTtGEljfSCOWv4Taqivl.jpg"
          />
          <NewsCard
            title="​XXVII edycja Poznańskiego Festiwalu Nauki i Sztuki"
            text="W dniach 15-20 kwietnia 2024 roku odbędzie się Poznański Festiwal Nauki i Sztuki. Wiodące poznańskie ośrodki akademickie i naukowe zaproszą gości w ka..."
            date="Kwiecień 5, 2024"
            img="https://puls.edu.pl/sites/default/files/styles/large/public/event/640x440_2_0.png?itok=bwX69XxN"
          />
          <NewsCard
            title="Dzień Otwarty UWM - SpotkajMY się w Kortowie"
            text="Uniwersytet Warmińsko-Mazurski w Olsztynie zaprasza na Dzień Otwarty 11 kwietnia 2024 roku. Szczegóły wydarzenia poniżej w treści artykułu."
            date="Maj 3, 2024"
            img="https://uwm.edu.pl/sites/default/files/styles/slider_image/public/2023-11/uwm_slider_2.jpg?itok=FdLIkeTJ"
          />
        </section>
      </div>
    </div>
  );
};
