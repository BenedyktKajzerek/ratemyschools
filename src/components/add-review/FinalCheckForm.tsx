import React from "react";
import { FaStar } from "react-icons/fa";

type RatingData = {
  teachers: number;
  learning: number;
  facilities: number;
  building: number;
  location: number;
};

type FinalCheckFormProps = {
  relationship: string;
  ratings: RatingData;
  comment: string;
};

export const FinalCheckForm: React.FC<FinalCheckFormProps> = ({
  relationship,
  ratings,
  comment,
}) => {
  return (
    <div>
      <div>
        <h2 className="text-3xl">
          Confirm your review for{" "}
          <span className="text-primary">Some School</span> at Some City
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          All reviews are subject to approval.
        </p>
      </div>

      <div className="mt-8 flex w-full space-x-20 rounded-lg bg-gray-100 p-10">
        <div className="text-xl">
          {/* School connection */}
          <div className="flex">
            <div className="w-56">Relationship</div>
            <div className="text-nowrap">{relationship}</div>
          </div>

          {/* School rating */}
          {Object.entries(ratings).map(([key, value]) => (
            <div key={key} className="mt-6 flex items-center">
              <p className="w-56 capitalize">{key}</p>

              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= value ? "text-yellow-500" : "text-gray-400"
                    }
                  >
                    <FaStar size={18} />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-xl">Comment</p>
            <p className="mt-2 text-wrap">{comment}</p>
          </div>
          <div>
            <p className="text-xl">Photos</p>
            <p className="mt-2">{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
