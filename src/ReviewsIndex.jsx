export function ReviewsIndex(props) {
  return (
    <div>
      <h1>All reviews</h1>
      <div className="row">
        {props.reviews ? (
          props.reviews.map((review) => (
            <div key={review.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{review.snack_id}</h5>
                  <h6 className="card-title">{review.user_id}</h6>
                  <p className="card-text">
                    {review.note}, {review.snack_rate}
                  </p>
                  <button onClick={() => props.onShowReview(review)}>More info</button>
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
