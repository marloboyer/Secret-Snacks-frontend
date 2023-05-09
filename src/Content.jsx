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
// import { Modal } from "./Modal";

export function Content() {
  const [snacks, setSnacks] = useState([]);
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

  return (
    <div>
      <h1>Secret Snacks!</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <SnacksNew onCreateSnack={handleCreateSnack} />
      <LocationsNew onCreateLocation={handleCreateLocation} />
      <ReviewsNew onCreateReview={handleCreateReview} />
      <SnacksIndex snacks={snacks} />
      <LocationsIndex locations={locations} />
      <ReviewsIndex reviews={reviews} />
    </div>
  );
}
