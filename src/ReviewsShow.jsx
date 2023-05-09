export function ReviewsShow(props) {
  return (
    <div>
      <h1>Review information</h1>
      <p>Snack ID: {props.review.snack_id}</p>
      <p>User ID: {props.review.user_id}</p>
      <p>Note: {props.review.note}</p>
      <p>Snack Rate: {props.review.snack_rate}</p>
    </div>
  );
}