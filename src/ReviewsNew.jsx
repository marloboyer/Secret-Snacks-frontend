export function ReviewsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateReview(params, () => event.target.reset());
  };
  return (
    <div className="container">
      <h1>Add a New Review:</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="form-group">
          Snack ID: <input className="form-control" name="snack_id" type="text" />
        </div>
        <div className="form-group">
          User ID: <input className="form-control" name="user_id" type="text" />
        </div>
        <div className="form-group">
          Review: <input className="form-control" name="note" type="text" />
        </div>
        <div className="form-group">
          Snack Rate (1-5): <input className="form-control" name="snack_rate" type="text" />
        </div>
        <button type="submit" className="btn btn-dark">
          Create Review
        </button>
      </form>
    </div>
  );
}
