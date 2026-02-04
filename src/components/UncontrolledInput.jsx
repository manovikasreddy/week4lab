import { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef();

  const handleClick = () => {
    alert("Value: " + inputRef.current.value);
  };

  return (
    <div>
      <label className="block text-sm font-semibold mb-1">
        Uncontrolled Input
      </label>

      <div className="flex gap-2">
        <input
          ref={inputRef}
          className="border border-gray-300 focus:ring-2 focus:ring-purple-400 p-2 rounded-lg w-full outline-none"
          type="text"
          placeholder="Type and click button"
        />

        <button
          onClick={handleClick}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition"
        >
          Show
        </button>
      </div>
    </div>
  );
};

export default UncontrolledInput;
