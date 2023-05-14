import { Link } from "react-router-dom";
export function SnacksIndex(props) {
  return (
    <div>
      <h1>All Snacks</h1>
      <button className="btn btn-dark">
        <Link className="nav-link" to="/snacks/new">
          Add a New Snack
        </Link>{" "}
      </button>
      <div className="row gy-3">
        {props.snacks ? (
          props.snacks.map((snack) => (
            <div key={snack.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card pb-3 h-100" style={{ width: "18rem" }}>
                <img src={snack.snack_image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{snack.name}</h5>
                  <p className="card-text">{snack.brand}</p>
                  <button className="btn btn-dark" onClick={() => props.onShowSnack(snack)}>
                    More info
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
