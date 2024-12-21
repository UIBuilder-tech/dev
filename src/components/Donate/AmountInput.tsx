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
  return (
    <div className="relative flex flex-row justify-center items-center w-full gap-2 md:px-4">
      <div className="">
        <div
          className={`flex items-center justify-center w-6 h-6 ${
            value === 0 ? "bg-[#D3D3D3]" : "bg-secondary"
          } rounded-full`}
        >
          <span className="text-white text-sm">$</span>
        </div>
      </div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        readOnly={readOnly}
        className={`pl-10 pr-3 py-2 border border-gray-200 rounded-lg w-full ${
          readOnly ? "bg-gray-50" : "bg-white"
        } focus:outline-none focus:ring-2 focus:ring-primary/20`}
      />
    </div>
  );
}
