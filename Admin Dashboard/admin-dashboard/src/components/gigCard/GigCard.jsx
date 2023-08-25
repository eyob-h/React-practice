import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
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
  return (
    <Fragment>
    {(currentUser._id == item.userId) ? (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={item.cover || "/img/noavatar.jpg"} alt="" />
              <span>{item.name}</span>
            </div>
          )}
          <p>{item.description}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {/* {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)} */}
                {item.averageRating}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
          {/* <img src="./img/heart.png" alt="" /> */}
          <div className="price">
            {/* <span>STARTING AT</span> */}
            {/* <h2>$ {item.price}</h2> */}
          </div>
        </div>
      </div>
    </Link>
    )
    : (
        <div></div>
      )}
    </Fragment>
  );
};

export default GigCard;