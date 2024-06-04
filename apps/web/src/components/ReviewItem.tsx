import StarRatingDisplay from "./StarsDisplay";

export const ReviewItem = ({ review }: any) => {
  console.log(review.user_academy, review.academy_id);

  return (
    <div>
      <div className="university-page__review">
        <div className="university-page__review-header">
          <div className="university-page__review-profile">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=Ash"
              alt="av"
              className="avatar"
              style={{
                minWidth: "40px",
                width: "40px",
                height: "40px",
              }}
            />
            <p>{review.user_name}</p>

            {review.user_academy == review.academy_id ? (
              <p className="user-has-studied-badge">uzytkownik tu studiowal</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            fontSize: "15px",
          }}
        >
          <StarRatingDisplay rating={review.stars} />
          {new Date(review.date).getFullYear() +
            "-0" +
            new Date(review.date).getMonth() +
            "-0" +
            new Date(review.date).getDate() +
            " " +
            new Date(review.date).getHours() +
            ":" +
            new Date(review.date).getMinutes()}
        </div>
        <p>{review.review}</p>
      </div>
    </div>
  );
};
