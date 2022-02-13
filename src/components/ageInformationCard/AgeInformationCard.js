import React from "react";

import { usePersonContext } from "../../context/PersonContext";

const AgeInformationCard = () => {
  const { name, age } = usePersonContext();
  return (
    <h2>
      {name} is {age} years old!
    </h2>
  );
};

export default AgeInformationCard;
