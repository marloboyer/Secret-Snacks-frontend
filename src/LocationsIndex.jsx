export function LocationsIndex(props) {
  return (
    <div>
      <h1>All locations</h1>
      {props.locations.map((location) => (
        <div key={location.id}>
          <h2>{location.name}</h2>
          <p>{location.snack_id}</p>
          <p>{location.adress}</p>
        </div>
      ))}
    </div>
  );
}
