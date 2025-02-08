import React, { useState, useEffect } from "react";

interface AmountInputProps {
  value: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
}

export default function AmountInput({
  value,
  onChange,
  readOnly = false,
}: AmountInputProps) {
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Allow empty string or positive numbers
    if (
      newValue === "" ||
      (/^\d*\.?\d*$/.test(newValue) && parseFloat(newValue) >= 0)
    ) {
      setInputValue(newValue);
      onChange?.(newValue === "" ? 0 : parseFloat(newValue));
    }
  };

  return (
    <div className="relative flex flex-row justify-center items-center w-full gap-2 md:px-4">
      <div className="">
        <div
          className={`flex items-center justify-center w-6 h-6 ${
            parseFloat(inputValue) === 0 ? "bg-[#D3D3D3]" : "bg-secondary"
          } rounded-full`}
        >
          <span className="text-white text-sm">$</span>
        </div>
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        readOnly={readOnly}
        className={`pl-3 md:pl-10 pr-3 py-2 border border-gray-200 rounded-lg w-full ${
          readOnly ? "bg-gray-50" : "bg-white"
        } focus:outline-none focus:ring-2 focus:ring-primary/20`}
      />
    </div>
  );
}
