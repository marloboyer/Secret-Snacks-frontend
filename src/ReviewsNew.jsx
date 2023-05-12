export function ReviewsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateReview(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Snack ID: <input name="snack_id" type="text" />
        </div>
        <div>
          User ID: <input name="user_id" type="text" />
        </div>
        <div>
          Note: <input name="note" type="text" />
        </div>
        <div>
          Snack Rate: <input name="snack_rate" type="text" />
        </div>
        <button type="submit" className="btn btn-dark">
          Create Review
        </button>
      </form>
    </div>
  );
}
