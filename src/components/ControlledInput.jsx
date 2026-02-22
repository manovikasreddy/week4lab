import { useState } from "react";

const ControlledInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Controlled Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-400 outline-none"
      />
      <p className="text-sm mt-2 text-gray-600">
        Current Value: <span className="font-semibold">{value}</span>
      </p>
    </div>
  );
};

export default ControlledInput;
