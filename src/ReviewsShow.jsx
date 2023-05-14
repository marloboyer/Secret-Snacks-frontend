import "./index.css";
export function ReviewsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateReview(props.review.id, params, () => event.target.reset());
  };
  const handleClick = () => {
    props.onDestroyReview(props.review);
  };
  return (
    <div>
      <h1>Review Information:</h1>
      <p>Snack ID: {props.review.snack_id}</p>
      <p>User ID: {props.review.user_id}</p>
      <p>Note: {props.review.note}</p>
      <p>Snack Rate: {props.review.snack_rate}</p>
      <h2>Update Review:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input defaultValue={props.review.snack_id} name="snack_id" type="text" />
        </div>
        <div>
          <input defaultValue={props.review.user_id} name="user_id" type="text" />
        </div>
        <div>
          <input defaultValue={props.review.note} name="note" type="text" />
        </div>
        <div>
          <input defaultValue={props.review.snack_rate} name="snack_rate" type="text" />
        </div>
        <button type="submit" className="btn btn-dark form-button">
          Update Review
        </button>
      </form>
      <button className="btn btn-dark form-button" onClick={handleClick}>
        Destroy review
      </button>
    </div>
  );
}
