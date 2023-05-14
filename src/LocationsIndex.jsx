import { Link } from "react-router-dom";
export function LocationsIndex(props) {
  return (
    <div>
      <h1>All Locations</h1>
      <Link className="nav-link" to="/locations/new">
        Add a New Location
      </Link>
      <div className="row">
        {props.locations ? (
          props.locations.map((location) => (
            <div key={location.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={location.snack.snack_image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{location.name}</h5>
                  <p className="card-text">
                    {location.snack_id}, {location.address}
                  </p>
                  <button className="btn btn-dark" onClick={() => props.onShowLocation(location)}>
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
