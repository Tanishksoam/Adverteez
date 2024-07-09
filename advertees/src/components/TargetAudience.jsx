import React from "react";
import TACard from "./TACard";

const TargetAudience = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20  text-white">
      <div className="w-full flex justify-start items-start  text-5xl font-medium px-4 pb-10 opacity-75 ">
        Reach Your Target Audience
      </div>
      <div className="w-full flex justify-start items-start gap-4">
        <TACard
          title="Targeted Demographics"
          description="Our designs cater to specific audiences, whether it's young adults, professionals, or niche communities."
        />
        <TACard
          title="Engaging Visuals"
          description="We create eye-catching graphics that grab attention and leave a lasting impression."
        />
        <TACard
          title="Strategic Placement"
          description="We understand the importance of promoting your brand in the right places at the right time."
        />
      </div>
    </div>
  );
};

export default TargetAudience;
