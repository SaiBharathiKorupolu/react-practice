import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Dropdown, StyledDiv, TextFieldsContainer } from "./styles";

const CountryDetails = () => {
  const [data, setData] = useState({});
  const [sortedData, setSortedData] = useState([]);
  const [array, setArray] = useState([]);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const apiData = async () => {
      await axios
        .get(
          `https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json
       `
        )
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    };
    apiData();
  }, []);

  useEffect(() => {
    setSortedData(Object.values(data));
  }, [data]);

  const changeHandler = (e) => {
    setCountry(e.target.value);
  };

  const dropdownChangeHandler = (e) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    sortedData[0] && setArray(Object.values(sortedData[0]));
  }, [sortedData]);

  useEffect(() => {
    let updatedData = sortedData[0] && Object.values(sortedData[0]);
    if (country) {
      updatedData = updatedData.filter((e) =>
        e.name.toLowerCase().includes(country.toLocaleLowerCase())
      );
    }
    if (region && region !== "All") {
      updatedData = updatedData.filter((e) => e.region === region);
    }

    updatedData && setArray(updatedData);
  }, [country, region, sortedData]);

  return (
    <div>
      <TextFieldsContainer>
        <input type="text" value={country} onChange={changeHandler} />

        <Dropdown onChange={dropdownChangeHandler}>
          <option>All</option>
          <option>Asia</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Europe</option>
        </Dropdown>
      </TextFieldsContainer>
      {sortedData[0] ? (
        <StyledDiv>
          {array.map((e) => (
            <Card>
              <img src={e.flag.medium} alt={`${e.name} flag`} />
              <h4>{e.name}</h4>
              <p>Population : {e.population}</p>
              <p>Region : {e.region}</p>
              <p>Capital : {e.capital}</p>
            </Card>
          ))}
        </StyledDiv>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountryDetails;
