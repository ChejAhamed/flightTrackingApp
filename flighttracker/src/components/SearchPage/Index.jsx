/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import React from 'react';
import { DatePicker, InputNumber, Select } from 'antd';

function Index() {
  const { Option } = Select;
  function onFlightNumbChange(value) {
    console.log('change to', value);
  }
  function onCarrierChange(value) {
    console.log(value);
  }
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
        <div className="DepartureDate"><DatePicker /></div>
      </div>
    </div>
  );
}

export default Index;
