
import  { useState } from 'react';

function Passvalid() {
  const [isValid, setIsValid] = useState({
    letter: false,
    capital: false,
    number: false,
    length: false,
  });

  const handlePasswordChange = (event) => {
    const password = event.target.value;

    setIsValid({
      letter: /[a-z]/.test(password),
      capital: /[A-Z]/.test(password),
      number: /\d/.test(password),
      length: password.length >= 8,
    });
  };

  return (
    <div>
      <input
        type="password"
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        className="border p-2 mb-4"
      />
      <div id="message">
        <h3>Password must contain the following:</h3>
        <p
          id="letter"
          className={`relative before:content-['✔'] before:absolute before:left-[-35px] ml-5 text-sm mt-2 ${
            isValid.letter ? 'text-green-500' : isValid.letter === false ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          -A <b>lowercase</b> letter
        </p>
        <p
          id="capital"
          className={`ml-5 text-sm mt-2 ${
            isValid.capital ? 'text-green-500' : isValid.capital === false ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          -A <b>capital (uppercase)</b> letter
        </p>
        <p
          id="number"
          className={`ml-5 text-sm mt-2 ${
            isValid.number ? 'text-green-500' : isValid.number === false ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          -A <b>number</b>
        </p>
        <p
          id="length"
          className={`ml-5 text-sm mt-2 ${
            isValid.length ? 'text-green-500' : isValid.length === false ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          -Minimum <b>8 characters</b>
        </p>
      </div>
    </div>
  );
}

export default Passvalid;