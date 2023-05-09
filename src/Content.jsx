import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { SnacksIndex } from "./SnacksIndex";
import { LocationsIndex } from "./LocationsIndex";
import { ReviewsIndex } from "./ReviewsIndex";

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

  return (
    <div>
      <h1>Secret Snacks!</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <SnacksIndex snacks={snacks} />
      <LocationsIndex locations={locations} />
      <ReviewsIndex reviews={reviews} />
    </div>
  );
}
