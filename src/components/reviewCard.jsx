import React from "react";

function ReviewCard({review}) {
  return (
    <div className="rounded-md shadow-md p-6 md:col-span-1 col-span-3 bg-white m-6 mt-10">
        <p>
        “Lorem ipsum dolor sit amet consectetur. Habitasse interdum amet eget nunc massa. Commodo sapien nunc et at varius cras orci quisque. Eu ornare magna ultrices odio dolor nulla bibendum elementum ornare. Tincidunt sit ac id vitae sed viverra feugiat.”
        </p>
        <div className="flex items-center mt-4">
            <img src={review.imgSrc} className="w-[40px] h-[40px] rounded" alt="user img"/>
            <div className="ml-3">
                <h3 className="font-bold">{review?.name}</h3>
                <p className="text-[#898384] text-sm font-light">{review?.designation}</p>
                <p className="text-sm font-light">{review.company}</p>
            </div>
        </div>

    </div>
  );
}

export default ReviewCard;
