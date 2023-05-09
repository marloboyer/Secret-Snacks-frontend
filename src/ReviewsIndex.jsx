export function ReviewsIndex(props) {
  return (
    <div>
      <h1>All reviews</h1>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <h2>{review.snack_id}</h2>
          <p>{review.user_id}</p>
          <p>{review.note}</p>
          <p>{review.snack_rate}</p>
        </div>
      ))}
    </div>
  );
}
