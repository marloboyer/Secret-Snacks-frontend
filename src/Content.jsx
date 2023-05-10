import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { SnacksIndex } from "./SnacksIndex";
import { LocationsIndex } from "./LocationsIndex";
import { ReviewsIndex } from "./ReviewsIndex";
import { SnacksNew } from "./SnacksNew";
import { LocationsNew } from "./LocationsNew";
import { ReviewsNew } from "./ReviewsNew";
import { Modal } from "./Modal";
import { SnacksShow } from "./SnacksShow";
import { LocationsShow } from "./LocationsShow";
import { ReviewsShow } from "./ReviewsShow";

export function Content() {
  const [snacks, setSnacks] = useState([]);
  const [isSnacksShowVisible, setIsSnacksShowVisible] = useState(false);
  const [currentSnack, setCurrentSnack] = useState({});
  const [isReviewsShowVisible, setIsReviewsShowVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState({});
  const [isLocationsShowVisible, setIsLocationsShowVisible] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({});
  const handleIndexSnacks = () => {
    console.log("handleIndexSnacks");
    axios.get("http://localhost:3000/snacks.json").then((response) => {
      console.log(response.data);
      setSnacks(response.data);
    });
  };
  useEffect(handleIndexSnacks, []);

  const [locations, setLocations] = useState([]);

  const handleIndexLocations = () => {
    console.log("handleIndexLocations");
    axios.get("http://localhost:3000/locations.json").then((response) => {
      console.log(response.data);
      setLocations(response.data);
    });
  };
  useEffect(handleIndexLocations, []);

  const [reviews, setReviews] = useState([]);

  const handleIndexReviews = () => {
    console.log("handleIndexReviews");
    axios.get("http://localhost:3000/reviews.json").then((response) => {
      console.log(response.data);
      setReviews(response.data);
    });
  };
  useEffect(handleIndexReviews, []);

  const handleCreateSnack = (params, successCallback) => {
    console.log("handleCreateSnack", params);
    axios.post("http://localhost:3000/snacks.json", params).then((response) => {
      setSnacks([...snacks, response.data]);
      successCallback();
    });
  };

  const handleCreateLocation = (params, successCallback) => {
    console.log("handleCreateLocation", params);
    axios.post("http://localhost:3000/locations.json", params).then((response) => {
      setLocations([...locations, response.data]);
      successCallback();
    });
  };

  const handleCreateReview = (params, successCallback) => {
    console.log("handleCreateReview", params);
    axios.post("http://localhost:3000/reviews.json", params).then((response) => {
      setLocations([...reviews, response.data]);
      successCallback();
    });
  };

  const handleShowSnack = (snack) => {
    console.log("handleShowSnack", snack);
    setIsSnacksShowVisible(true);
    setCurrentSnack(snack);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsSnacksShowVisible(false);
    setIsReviewsShowVisible(false);
    setIsLocationsShowVisible(false);
  };

  const handleShowReview = (review) => {
    console.log("handleShowReview", review);
    setIsReviewsShowVisible(true);
    setCurrentReview(review);
  };

  const handleShowLocation = (location) => {
    console.log("handleShowLocation", location);
    setIsLocationsShowVisible(true);
    setCurrentLocation(location);
  };

  const handleUpdateSnack = (id, params, successCallback) => {
    console.log("handleUpdateSnack", params);
    axios.patch(`http://localhost:3000/snacks/${id}.json`, params).then((response) => {
      setSnacks(
        snacks.map((snack) => {
          if (snack.id === response.data.id) {
            return response.data;
          } else {
            return snack;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleUpdateReview = (id, params, successCallback) => {
    console.log("handleUpdateReview", params);
    axios.patch(`http://localhost:3000/reviews/${id}.json`, params).then((response) => {
      setReviews(
        reviews.map((review) => {
          if (review.id === response.data.id) {
            return response.data;
          } else {
            return review;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleUpdateLocation = (id, params, successCallback) => {
    console.log("handleUpdateLocation", params);
    axios.patch(`http://localhost:3000/locations/${id}.json`, params).then((response) => {
      setLocations(
        locations.map((location) => {
          if (location.id === response.data.id) {
            return response.data;
          } else {
            return location;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  return (
    <div>
      <h1>Secret Snacks!</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <SnacksNew onCreateSnack={handleCreateSnack} />
      <LocationsNew onCreateLocation={handleCreateLocation} />
      <ReviewsNew onCreateReview={handleCreateReview} />
      <SnacksIndex snacks={snacks} onShowSnack={handleShowSnack} />
      <LocationsIndex locations={locations} onShowLocation={handleShowLocation} />
      <ReviewsIndex reviews={reviews} onShowReview={handleShowReview} />
      <Modal show={isSnacksShowVisible} onClose={handleClose}>
        <SnacksShow snack={currentSnack} onUpdateSnack={handleUpdateSnack} />
      </Modal>
      <Modal show={isReviewsShowVisible} onClose={handleClose}>
        <ReviewsShow review={currentReview} onUpdateReview={handleUpdateReview} />
      </Modal>
      <Modal show={isLocationsShowVisible} onClose={handleClose}>
        <LocationsShow location={currentLocation} onUpdateLocation={handleUpdateLocation} />
      </Modal>
    </div>
  );
}
