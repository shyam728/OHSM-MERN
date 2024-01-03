import { useState, useEffect } from "react";
import "./property.css";
import { postData } from "../services/FetchNodeService";
import Swal from "sweetalert2";

const Property = () => {
  const [img, setImg] = useState("");
  const [registerBrandName, setRegisterBrandName] = useState("");
  const [numOfProperty, setNumofProperty] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  console.log(numOfProperty);

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm); // Toggle the form's visibility
  };
  const handleClear = () => {
    alert("KJHGFD")
    setImg("");
    setRegisterBrandName("");
    setNumofProperty("");
    setPropertyName("");
    setPropertyType("");
    setPhoneNumber("");
    setEmailAddress("");
    setAddress("");
    setState("");
    setCity("");
    setPincode("");
  };
  const handleSubmit = async () => {
    var body = {
      imageUrl: img,
      RbrandName: registerBrandName,
      propertyType: propertyType,
      nOP: numOfProperty,
      propertyName: propertyName,
      phoneNo: phoneNumber,
      emailId: emailAddress,
      address: address,
      state: state,
      city: city,
      pinCode: pincode,
    };
    let result = await postData("property/createproperty", body);
    console.log(result);
    if (result) {
      handleClear();
      Swal.fire({
        icon: "success",
        title: "Property Added",
        text: result.message,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.message,
      });
    }
    // Optionally, you can reset the form fields after successful submission
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Property setup
          </h2>

          <div>
            <div className="mt-2 flex justify-center rounded-lg border  border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      value={img}
                      type="file"
                      className="sr-only"
                      onChange={(e) => setImg(e.target.value)}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Register Brand Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setRegisterBrandName(e.target.value)}
                  type="text"
                  value={registerBrandName}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="properties"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number of properties
              </label>
              <div className="mt-2">
                <select
                  onChange={(e) => setNumofProperty(e.target.value)}
                  value={numOfProperty}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="state1">1</option>
                  <option value="state2"> 2</option>
                  <option value="state3">3</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="Name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                property Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setPropertyName(e.target.value)}
                  type="text"
                  required
                  value={propertyName}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Property type
              </label>
              <div className="mt-2">
                <select
                  onChange={(e) => setPropertyType(e.target.value)}
                  value={propertyType}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="state1">private</option>
                  <option value="state2">Business</option>
                  <option value="state3">others</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="Number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="Number"
                  value={phoneNumber}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setEmailAddress(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={emailAddress}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  value={address}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State
              </label>
              <div className="mt-2">
                <select
                  onChange={(e) => setState(e.target.value)}
                  required
                  value={state}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="state1">Delhi</option>
                  <option value="state2">Up</option>
                  <option value="state3">Gujrat</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <select
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="city1">New Delhi</option>
                  <option value="city2">Gorakhpur</option>
                  <option value="city3">Surat</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="pincode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pin code
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setPincode(e.target.value)}
                  type="text"
                  placeholder="15698"
                  value={pincode}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleButtonClick}
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-green shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Property Details
              </button>

              {showForm && (
                <div>
                  <input
                    type="text"
                    id="propertyName"
                    name="propertyName"
                    placeholder="Dorimentro-201"
                    className="text-gray-900 border-zinc-950 border-1 ml-7 rounded"
                  />
                  <button className="p-5">cancel</button>

                  <input
                    type="text"
                    id="propertyName"
                    name="propertyName"
                    placeholder="common area"
                    className="text-gray-900 border-zinc-950 border-1 ml-7 rounded"
                  />
                  <button className="p-5">cancel</button>

                  <input
                    type="text"
                    id="propertyName"
                    name="propertyName"
                    placeholder="Kitchen"
                    className="text-gray-900 border-zinc-950 border-1 ml-7 rounded"
                  />
                  <button className="p-5">cancel</button>
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Complete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
