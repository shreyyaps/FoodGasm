import React from 'react';
import styled from 'styled-components';
import { IMAGE_ID } from "../utils/helper";

const RestaurentCard = ({ props }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img className="restaurant-image" src={IMAGE_ID + props.info.cloudinaryImageId} alt={props.info.name} />
        <div className="content">
          <h2>{props.info.name}</h2>
          <h3>{props.info.cuisines.join(", ")}</h3>
          <h4>{props.info.avgRatingString} ⭐ rating</h4>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 290px; 
    height: 430px; 
    border-radius: 20px;
    background: #f8f8f8;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .restaurant-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  .content {
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  h3 {
    color: gray;
    font-size: 14px;
  }

  h4 {
    color: #ff9800;
    font-weight: bold;
    font-size: 16px;
  }
`;

export default RestaurentCard;
