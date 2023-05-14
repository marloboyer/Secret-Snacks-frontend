export function SnacksNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSnack(params, () => event.target.reset());
  };
  return (
    <div className="container">
      <h1>Add a New Snack:</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="form-group">
          Snack Name: <input className="form-control" name="name" type="text" />
        </div>
        <div className="form-group">
          Brand: <input className="form-control" name="brand" type="text" />
        </div>
        <div className="form-group">
          User ID: <input className="form-control" name="user_id" type="text" />
        </div>
        <div className="form-group">
          Image URL: <input className="form-control" name="image" type="text" />
        </div>
        <button type="submit" className="btn btn-dark">
          Create Snack
        </button>
      </form>
    </div>
  );
}
