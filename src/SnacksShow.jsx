import axios from "axios";
export function SnacksShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateSnack(props.snack.id, params, () => event.target.reset());
  };
  const handleClick = () => {
    props.onDestroySnack(props.snack);
  };
  const handleText = () => {
    let params = {
      phone: "+12144937360",
      text_body: `Hey, there is a new snack out now! snack:${props.snack.name}, snack:${props.snack.brand}`,
    };
    axios.post("http://localhost:3000/twilio.json", params).then((response) => {
      alert("Text sent!");
    });
  };
  return (
    <div>
      <h1>Snack Information:</h1>
      <p>Name: {props.snack.name}</p>
      <p>Brand: {props.snack.brand}</p>
      <p>User ID: {props.snack.user_id}</p>
      <p>Image: {props.snack.snack_image}</p>
      <h2>Update Snack</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input defaultValue={props.snack.name} name="name" type="text" />
        </div>
        <div>
          <input defaultValue={props.snack.brand} name="brand" type="text" />
        </div>
        <div>
          <input defaultValue={props.snack.user_id} name="user_id" type="text" />
        </div>
        <div>
          <input defaultValue={props.snack.image} name="image" type="text" />
        </div>
        <button type="submit" className="btn btn-dark">
          Update snack
        </button>
      </form>
      <button className="btn btn-dark" onClick={handleText}>
        Send Text
      </button>
      <button className="btn btn-dark" onClick={handleClick}>
        Destroy snack
      </button>
    </div>
  );
}
