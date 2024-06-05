import { ReviewItem } from "../components/ReviewItem";
import StarRating from "../components/Stars";
import { UserNav } from "../components/UserNav";
import { useAuth } from "../hooks/useAuth";
import { IUniversity } from "../interfaces/IUniversity";
import { getReviews, postReview } from "../services/ratingService";
import logo from "./../assets/logo.svg";
import university from "./../assets/university.jpg";
import universitylogo from "./../assets/university_logo.png";
import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

export const UniversityOpinionsPage = () => {
  const universityObj = useOutletContext<IUniversity>();

  const [review, setReview] = useState<any>("");
  const [stars, setStars] = useState<number>(0);
  const [reviews, setReviews] = useState<any>([]);

  const handleReviewsGet = async () => {
    let res = await getReviews(universityObj.academy_id);

    if (res?.reviews) {
      setReviews(res.reviews);
    }
  };

  useEffect(() => {
    handleReviewsGet();
  }, []);

  const setRating = (index: number) => {
    setStars(index);
  };

  const auth = useAuth();

  const handlePostReview = async () => {
    if (!stars) {
      alert("Musisz podać ocene w gwiazdkach!");
      return;
    }

    let res = await postReview({
      stars: stars,
      review: review,
      academy_id: universityObj.academy_id,
      user_id: auth.user?.user_id,
    });

    if (res.status == "OK") {
      setReviews((reviews: any) => [
        ...reviews,
        {
          stars: stars,
          review: review,
          academy_id: universityObj.academy_id,
          user_id: auth.user?.user_id,
          date: new Date(),
          user_name: auth.user?.user_name,
          user_academy: auth.user?.academy_id,
        },
      ]);

      setStars(0);
      setReview("");
    }
  };

  return (
    <div className="app-container">
      <div className="university-page">
        <div className="university-page__navbar">
          <div className="university-page__navbar-container">
            <img src={logo} alt="logo" />

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
        <div className="university-page__hero-section">
          <img
            className="university-page__hero-section__background"
            src={university}
          />
          <div className="university-page__hero-section__title">
            <img
              className="university-page__hero-section__title__logo"
              src={universitylogo}
            />
            <h1 className="university-page__hero-section__title__text">
              <Link to={`/university/${universityObj.academy_id}`}>
                {universityObj.academy_name}
              </Link>
            </h1>
          </div>
        </div>
        <div className="university-page__main">
          <div className="university-page__main__nav">
            <Link
              to="../opinions"
              className="university-page__main__nav__button"
            >
              Opinie o uczelni
            </Link>
            <Link
              to="../contact"
              className="university-page__main__nav__button"
            >
              Kontakt
            </Link>
            <a
              href={universityObj.recrutment}
              target="_blank"
              className="university-page__main__nav__button"
            >
              Rekrutacja
            </a>
          </div>
          <div className="university-page__main__content">
            <h2 className="university-page__main__content__title university-page__main__content__title--blue">
              Opinie
            </h2>
            {auth?.user ? (
              <div className="university-page__review__form">
                <div className="university-page__review__form-header">
                  <div className="university-page__review__form-profile">
                    <img
                      src="https://avatar.iran.liara.run/public/boy?username=Ash"
                      alt="av"
                      className="avatar"
                    />
                    <p>{auth.user.user_name}</p>
                  </div>
                  <button onClick={handlePostReview}>Wyślij</button>
                </div>
                <StarRating setRating={setRating} rating={stars} />
                <textarea
                  name="review"
                  id="review"
                  placeholder="Napisz opinie..."
                  value={review}
                  onChange={(e) => {
                    setReview(e.target.value);
                  }}
                  maxLength={255}
                ></textarea>
              </div>
            ) : (
              <div className="university-page__review__form">
                <div className="university-page__review__form-header">
                  Aby dodać opinie musisz stworzyc konto!
                </div>
              </div>
            )}
            {reviews.toReversed().map((review: any, index: any) => {
              return <ReviewItem key={index} review={review} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
