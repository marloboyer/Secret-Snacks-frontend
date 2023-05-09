export function SnacksNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSnack(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Snack</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Brand: <input name="brand" type="text" />
        </div>
        <div>
          User ID: <input name="user_id" type="text" />
        </div>
        <div>
          Image: <input name="imgae" type="text" />
        </div>
        <button type="submit">Create Snack</button>
      </form>
    </div>
  );
}
