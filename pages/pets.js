import Image from "next/image";
import React from "react";

const PetsPage = () => {
  return (
    <div>
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="image" width="280" height="420" />
          </div>
        );
      })}
    </div>
  );
};

export default PetsPage;
