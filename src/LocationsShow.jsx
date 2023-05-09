export function LocationsShow(props) {
  return (
    <div>
      <h1>Location information</h1>
      <p>Name: {props.location.name}</p>
      <p>Snack ID: {props.location.snack_id}</p>
      <p>Adress: {props.location.address}</p>
    </div>
  );
}
