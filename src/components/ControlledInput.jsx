import { useState } from "react";

const ControlledInput = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <label className="block text-sm font-semibold mb-1">
        Controlled Input
      </label>

      <input
        className="border border-gray-300 focus:ring-2 focus:ring-blue-400 p-2 rounded-lg w-full outline-none"
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p className="mt-2 text-blue-600 font-medium">
        You typed: {text || "Nothing yet"}
      </p>
    </div>
  );
};

export default ControlledInput;
