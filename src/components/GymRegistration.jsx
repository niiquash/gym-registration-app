import { useState } from "react";
import "./gymRegistration.css";

const GymRegistration = () => {
  // State to manage form data and registered gyms
  const [formData, setFormData] = useState({
    name: "",
    address: "",
  });
  const [registeredGyms, setRegisteredGyms] = useState([]);

  const handleInputChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setRegisteredGyms((prevGyms) => [...prevGyms, formData]);

    // clear form fields
    setFormData({
      name: "",
      address: "",
    });
  };

  return (
    <>
      <h2 className="gym-reg-heading">Gym Registration</h2>
      <form className="gym-form" onSubmit={handleSubmit}>
        <label className="gym-form-label" htmlFor="name">
          Gym Name:
        </label>
        <input
          className="gym-form-input"
          type="text"
          name="name"
          id="name"
          onChange={handleInputChange}
          value={formData.name}
          required
        />
        <label className="gym-form-label" htmlFor="address">
          Address:
        </label>
        <input
          className="gym-form-input"
          type="text"
          name="address"
          onChange={handleInputChange}
          value={formData.address}
          required
        />
        <button className="gym-form-btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default GymRegistration;
