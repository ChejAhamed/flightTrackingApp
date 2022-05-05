/* eslint-disable max-len */
import React, { useState } from 'react';
import { DatePicker, InputNumber, Select } from 'antd';

function Index() {
  const { Option } = Select;
  const [data, setData] = useState({});
  const [date, setDate] = useState('');
  const [carrier, setCarrier] = useState('');
  const [flightNumber, setFlightNumber] = useState('');

  const onFlightNumbChange = (value) => {
    setFlightNumber(value);
    console.log('change to', value);
  };
  const onCarrierChange = (value) => {
    setCarrier(value);
    console.log(value);
  };
  const onChangeDate = (date, dateString) => {
    setDate(dateString);
    console.log(dateString);
  };
  const search = () => {
    if (!carrier || !flightNumber || !date) {
      alert('Carrier, flight Number and is required');
      return;
    }
    const firstFormat = date.replace('-', '/');
    const formattedDate = firstFormat.replace('-', '/');
    console.log(date, formattedDate);
    fetch(
      ` https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrier}/${flightNumber}/dep/${formattedDate}`,
      {
        method: 'GET',
        headers: {
          appID: 'e2116426',
          appKey: 'a47153b4eab7efc06ff7483243da3999',
        },
      },
    ).then((data) => data.json())
      .then((finalData) => {
        setData(finalData);
        console.log(finalData);
      });
  };
  return (
    <div>
      Index
      <div className="indexSub">
        <div className="Carrier">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onCarrierChange}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="EY">Emirates</Option>
            <Option value="ET">Etihad</Option>
            <Option value="QT">Gatar</Option>
          </Select>
        </div>
        <div className="FlightNumber"><InputNumber onChange={onFlightNumbChange} placeholder="ex 245,311" /></div>
        <div className="DepartureDate"><DatePicker onChange={onChangeDate} /></div>
        <button type="button" onClick={search}>Search</button>
      </div>
      {data.flightSatutes && (
      <div className="statuees">
        <h1 className="searcResult">Search Result</h1>
        <h1>{data.flightSatutes[0].status}</h1>
      </div>
      )}
    </div>
  );
}

export default Index;

/*
  const search = () => {
    fetch(
      ` https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus//v2/json/flight/status/${carrier}/${flight}/arr/${year}/${month}/${day}`,
      {
        method: 'GET',
        headers: {
          appID: 'e2116426',
          appKey: 'a47153b4eab7efc06ff7483243da3999',
        },
      },
    ).then((data) => data.json())
      .then((finalData) => {
        console.log(finalData);
      });
  };
  */
