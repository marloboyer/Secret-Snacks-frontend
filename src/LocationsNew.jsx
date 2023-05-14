export function LocationsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateLocation(params, () => event.target.reset());
  };
  return (
    <div className="container">
      <h1>Add a New Location:</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="form-group">
          Name of Location: <input className="form-control" name="name" type="text" />
        </div>
        <div className="form-group">
          Snack ID: <input className="form-control" name="snack_id" type="text" />
        </div>
        <div className="form-group">
          Address: <input className="form-control" name="address" type="text" />
        </div>
        <button type="submit" className="btn btn-dark">
          Create Location
        </button>
      </form>
    </div>
  );
}
