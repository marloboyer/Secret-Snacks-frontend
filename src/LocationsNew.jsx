export function LocationsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateLocation(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Location</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Snack ID: <input name="snack_id" type="text" />
        </div>
        <div>
          Address: <input name="address" type="text" />
        </div>
        <button type="submit">Create Location</button>
      </form>
    </div>
  );
}
