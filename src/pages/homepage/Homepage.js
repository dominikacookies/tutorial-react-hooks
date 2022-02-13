import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import AgeInformationCard from "../../components/ageInformationCard/AgeInformationCard";
import "./homepage.css";

const Homepage = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (name) {
      axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
        setAge(response.data.age);
      });
    }
  }, [name]);

  const onSubmit = (data) => setName(data.name);

  return (
    <main>
      <div className="homepage-container">
        <h1>Welcome to NameAge!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true, minLength: 3 })} />
          {errors.name && (
            <span>Please enter a name that's at least 3 letters long.</span>
          )}
          <button type="submit">Get age!</button>
        </form>
        {age ? (
          <AgeInformationCard age={age} name={name} />
        ) : (
          <p> Enter a name and we'll predict your age!</p>
        )}
      </div>
    </main>
  );
};

export default Homepage;
