import React from "react";
import Dcard from "./Dcard";

const Design = () => {
  return (
    <div className="w-full  flex flex-col  justify-start items-start py-20 gap-8 ">
      <div className="w-full flex justify-start  items-center text-5xl font-medium ">
        Customized Designs for Your Brand
      </div>
      <div className="w-full grid grid-flow-row grid-cols-2  justify-start  items-center">
        <Dcard
          index={1}
          title="Unique Concepts"
          description={
            "We work closely with you to develop designs that align with your brand identity and messaging."
          }
        />
        <Dcard
          index={2}
          title="High-Quality Artwork"
          description={
            "Our talented designers create professional-grade artwork that looks great on any T-shirt."
          }
        />
        <Dcard
          index={3}
          title="Unlimited Revisions"
          description={
            "We're committed to delivering a design you're happy with, so we offer unlimited revisions until you're satisfied."
          }
        />
        <Dcard
          index={4}
          title="Fast Turnaround Time"
          description={
            "We understand that time is money, so we work quickly to get your designs ready for production."
          }
        />
      </div>
    </div>
  );
};

export default Design;
