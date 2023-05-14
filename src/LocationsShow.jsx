import "./index.css";
export function LocationsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateLocation(props.location.id, params, () => event.target.reset());
  };
  const handleClick = () => {
    props.onDestroyLocation(props.location);
  };
  return (
    <div className="container">
      <h1>Location Information:</h1>
      <p>Name: {props.location.name}</p>
      <p>Snack ID: {props.location.snack_id}</p>
      <p>Address: {props.location.address}</p>
      <h2>Update Location:</h2>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="form-group">
          <input className="form-control" defaultValue={props.location.name} name="name" type="text" />
        </div>
        <div className="form-group">
          <input className="form-control" defaultValue={props.location.snack_id} name="snack_id" type="text" />
        </div>
        <div className="form-group">
          <input className="form-control" defaultValue={props.location.address} name="address" type="text" />
        </div>
        <button type="submit" className="btn btn-dark">
          Update location
        </button>
      </form>
      <button className="btn btn-dark" onClick={handleClick}>
        Destroy location
      </button>
    </div>
  );
}
