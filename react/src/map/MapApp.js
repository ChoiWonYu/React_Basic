import React from "react";

const MapApp = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      {numbers.map((num) => (
        <MakeList key={num.toString()} props={num} />
      ))}
    </>
  );
};

export default MapApp;
