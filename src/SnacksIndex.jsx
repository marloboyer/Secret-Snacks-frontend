export function SnacksIndex(props) {
  return (
    <div>
      <h1>All snacks</h1>
      {props.snacks.map((snack) => (
        <div key={snack.id}>
          <h2>{snack.name}</h2>
          <p>{snack.brand}</p>
          <p>{snack.user_id}</p>
          <img src={snack.snack_image} />
          <button onClick={() => props.onShowSnack(snack)}>More info</button>
        </div>
      ))}
    </div>
  );
}
