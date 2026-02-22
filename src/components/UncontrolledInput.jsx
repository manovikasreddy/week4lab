import { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef();

  const handleClick = () => {
    alert("Entered Value: " + inputRef.current.value);
  };

  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Uncontrolled Input"
        ref={inputRef}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400 outline-none"
      />
      <button
        onClick={handleClick}
        className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Show Value
      </button>
    </div>
  );
};

export default UncontrolledInput;
