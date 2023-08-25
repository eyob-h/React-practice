import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";

function Gig() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/biz/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
            {/* <span className="breadcrumbs">
              Fiverr {">"} Graphics & Design {">"}
            </span> */}
            {/* <h1>{data.title}</h1> */}
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user">
                {/* <img
                  className="pp"
                  src={dataUser.img || "/img/man.jpg"}
                  alt=""
                /> */}
                {/* <span>{dataUser.username}</span> */}
                <span></span>
            
                  {/* <div className="stars">
                    {Array(data.averageRating)
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div> */}
                
              </div>
            )}
            {/* <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </Slider> */}
            {/* <h2>About the business</h2>
            <p>{data.description}</p> */}
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="seller">
                <h2>About The Business</h2>
                <div className="user">
                  <img src={data.cover || "/img/hi.png"} alt="" />
                  <div className="info">
                    <span>{data.name}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/img/star.png" alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>View on Map</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">Location</span>
                      <span className="desc">{data.location}</span>
                    </div>
                    <div className="item">
                      <span className="title">Established In</span>
                      <span className="desc">Aug 2003</span>
                    </div>
                    <div className="item">
                      <span className="title">Working Hours</span>
                      <span className="desc">{data.workingHours}</span>
                    </div>
                    <div className="item">
                      <span className="title">Category</span>
                      <span className="desc">{data.category}</span>
                    </div>
                  </div>
                  <hr />
                  <p>{data.description}</p>
                </div>
              </div>
            )}
            <Reviews businessId={id} />
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Gig;