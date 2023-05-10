export function SnacksShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateSnack(props.snack.id, params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Snack information</h1>
      <p>Name: {props.snack.name}</p>
      <p>Brand: {props.snack.brand}</p>
      <p>User ID: {props.snack.user_id}</p>
      <p>Image: {props.snack.image}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.snack.name} name="name" type="text" />
        </div>
        <div>
          Brand: <input defaultValue={props.snack.brand} name="brand" type="text" />
        </div>
        <div>
          User ID: <input defaultValue={props.snack.user_id} name="user_id" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.snack.image} name="image" type="text" />
        </div>
        <button type="submit">Update snack</button>
      </form>
    </div>
  );
}
