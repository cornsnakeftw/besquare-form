import { setDefaultResultOrder } from "dns";
import * as React from "react";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("Red");
  const [gender, setGender] = React.useState<string | undefined>("Male");

  const is_male = gender === "male";
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const changeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, gender, age, color);
  };

  const reset = () => {
    setName("");
    setAge("");
    setColor("");
    setGender("");
  };

  return (
    <div className="pa-16">
      <div className="d-flex v-center h-center">
        <div className="w-50">
          <h2>Fill the Form!</h2>
          <form onSubmit={handleSubmit}>
            <Input name="Name" value={name} onChange={changeName} />
            <Radio name="Gender" onChange={changeGender} />
            <Input name="Age" value={age} onChange={changeAge} />
            <Select
              name="Favourite Color"
              value={color}
              onChange={changeColor}
            />
            <button type="submit" className="btn-primary mb-16">
              Submit
            </button>
            <button onClick={reset} className="btn-secondary">
              Clear
            </button>
          </form>
          <div className="w-50 pa-16">
            <p className="print">
              {name} is {age} years old, and {is_male ? "he" : "she"} likes{" "}
              {color} color.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="pink">Pink</option>
        <option value="cyan">Cyan</option>
        <option value="grey">Grey</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="skyblue">Skyblue</option>
      </select>
    </div>
  );
};

type RadioClick = {
  name: string;
  /*value: string | undefined;*/ /*Value should not be needed cus we not using select element*/
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
/*Line 85 should be using InputElement*/

const Radio = ({ onChange, name }: RadioClick) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input type="radio" value="male" name="gender" onChange={onChange} />
      <label>Male</label>
      <input type="radio" value="female" name="gender" onChange={onChange} />
      <label>Female</label>
      {/* <input type="radio" value="other" name="gender" onChange={onChange} />
      <label>Other</label> */}
    </div>
  );
};
