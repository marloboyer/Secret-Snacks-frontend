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
    <div>
      <h1>Location information</h1>
      <p>Name: {props.location.name}</p>
      <p>Snack ID: {props.location.snack_id}</p>
      <p>Address: {props.location.address}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.location.name} name="name" type="text" />
        </div>
        <div>
          Snack ID: <input defaultValue={props.location.snack_id} name="snack_id" type="text" />
        </div>
        <div>
          Address: <input defaultValue={props.location.address} name="address" type="text" />
        </div>
        <button type="submit">Update location</button>
      </form>
      <button onClick={handleClick}>Destroy location</button>
    </div>
  );
}
