// import React, { useState } from "react";
// import StarRatingComponent from "react-star-rating-component";

// const MovieRatingComponent = ({ initialRating }) => {
//   const [rating, setRating] = useState(initialRating);

//   return (
//     <div>
//       <StarRatingComponent
//         name="productRating"
//         starCount={5}
//         value={rating}
//         renderStarIcon={() => <span className="text-xl">★</span>} // Customize star icon if desired
//       />
//     </div>
//   );
// }

// export default MovieRatingComponent;

import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const MovieRatingComponent = ({ initialRating }) => {
  const fullStars = Math.round(initialRating);
  // const halfStars = initialRating % 1 >= 0.5 ? 1 : 0;
  let stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
  }
  // if (halfStars === 1) {
  //   stars.push(
  //     <i key="half" className="fas fa-star-half-alt text-yellow-500"></i>
  //   );
  // }
  return <div>{stars}</div>;
};

export default MovieRatingComponent;
