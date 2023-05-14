import { Link } from "react-router-dom";
export function ReviewsIndex(props) {
  return (
    <div>
      <h1>All Reviews</h1>
      <button className="btn btn-dark">
        <Link className="nav-link" to="/reviews/new">
          Add a New Review
        </Link>{" "}
      </button>
      <div className="row">
        {props.reviews ? (
          props.reviews.map((review) => (
            <div key={review.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={review.snack.snack_image} className="card-img-top" alt="..." />
                <div className="card-body">
                  {/* <h5 className="card-title">{review.snack_id}</h5>
                  <h6 className="card-title">{review.user_id}</h6> */}
                  <p className="card-text">{review.snack.name}</p>
                  <button className="btn btn-dark form-button" onClick={() => props.onShowReview(review)}>
                    More info
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
