export function SnacksIndex(props) {
  return (
    <div>
      <h1>All snacks</h1>
      <div className="row">
        {props.snacks ? (
          props.snacks.map((snack) => (
            <div key={snack.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={snack.snack_image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{snack.name}</h5>
                  <p className="card-text">
                    {snack.brand}, {snack.user_id}
                  </p>
                  <button onClick={() => props.onShowSnack(snack)}>More info</button>
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
