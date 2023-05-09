export function SnacksShow(props) {
  return (
    <div>
      <h1>Snack information</h1>
      <p>Name: {props.snack.name}</p>
      <p>Brand: {props.snack.brand}</p>
      <p>User ID: {props.snack.user_id}</p>
      <p>Image: {props.snack.image}</p>
    </div>
  );
}
