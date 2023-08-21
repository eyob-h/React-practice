import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
const currentUser = JSON.parse(localStorage.getItem("currentUser"))

import { Fragment } from "react";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  // ====================
  // if(item._id == currentUser._id){
  return (
    <Fragment>
      {(currentUser._id == item.userId) ? (
        <div className="gigCard">
          <img src={item.cover} alt="" />
          <div className="info">
            <div className="user">
              <img src={item.images} alt="" />
              <span>{item.name}</span>
              {/* <span>{currentUser._id}</span> */}
            </div>
            <div>
              <span>`User: {currentUser._id}`</span>
            </div>
            <div>
              {/* <span>`Bizn: {item.userId}`</span> */}
              <span>`Bizn: {(currentUser._id == item.userId)? "Same": "Not same"}`</span>
            </div>
            <p>{item.description}</p>
            <div className="star">
              <img src="./img/star.png" alt="" />
              <span>{item.averageRating}</span>
            </div>
          </div>
          <hr />
          <div className="detail">
            <img src="./img/heart.png" alt="" />
            <div className="price">
              <span>STARTING AT</span>
              <h2>
                hi
                {/* {data.username} */}
                {/* $ {item.price} */}
                {/* <sup>99</sup> */}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default GigCard;
