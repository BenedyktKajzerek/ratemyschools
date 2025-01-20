import React from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui";

interface Ratings {
  [key: string]: number;
}

interface ReviewProps {
  key: number;
  reviewData: any;
}

export const Review: React.FC<ReviewProps> = ({ reviewData }) => {
  const ratingsOrder = [
    "teachers",
    "learning",
    "facilities",
    "building",
    "location",
  ];

  const ratings: Ratings = reviewData.ratings || {};
  const overallRating = ratings
    ? (
        Object.values(ratings).reduce((a: number, b: number) => a + b, 0) /
        Object.values(ratings).length
      ).toFixed(1)
    : "N/A";

  return (
    <div className="flex max-w-[800px] flex-col space-y-8 bg-gray-100 p-6">
      <div className="flex space-x-8">
        {/* Overall + Ratings */}
        <div>
          <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl bg-green-500">
            <span>Overall</span>
            <p className="text-3xl font-medium">
              {reviewData.overall || overallRating}
            </p>
          </div>

          {ratingsOrder.map((key) => (
            <div key={key} className="mt-4 flex flex-col">
              <p className="capitalize">{key}</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= (ratings[key] || 0)
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }
                  >
                    <FaStar size={18} />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Review */}
        <div className="relative space-y-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-medium">
                {reviewData.schoolName}
              </span>
              <span className="text-xs">{reviewData.city}</span>
            </div>
            <span>
              {reviewData.date
                ? new Date(reviewData.date.seconds * 1000).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "short", day: "numeric" },
                  )
                : "N/A"}
            </span>
          </div>

          <div>
            Relationship:{" "}
            <span className="font-medium">{reviewData.relationship}</span>
          </div>

          <div>{reviewData.comment}</div>

          <div className="bottom-0 flex w-fit items-center rounded-full bg-gray-200">
            <button className="rounded-full p-2 hover:bg-gray-300 hover:text-green-500">
              <BiUpvote size={18} />
            </button>
            <div className="mx-1 text-sm">{reviewData.upvotes || 0}</div>

            <button className="rounded-full p-2 hover:bg-gray-300 hover:text-red-400">
              <BiDownvote size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* 
<div className="flex justify-end space-x-4">
  <Button className="">Approve</Button>
  <Button className="bg-red-500 hover:bg-red-600">Reject</Button>
</div> */
}
