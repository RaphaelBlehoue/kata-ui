import { useState } from "react";


type TFixedRateInputProps = {
  onRateChange: (rate: number | null) => void;
}
export const FixedExChangeRateInput = ({ onRateChange }: TFixedRateInputProps) => {
  const [rate, setRate] = useState<string>("");

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRate(value);
    const numericRate = parseFloat(value);
    onRateChange(isNaN(numericRate) ? null : numericRate);
  };

  return (
    <div className="flex items-center space-x-4 border border-gray-300 rounded-lg px-4 py-2 mr-4">
      <label
        htmlFor="taux"
        className="block text-left text-sm font-medium text-gray-700"
      ></label>
      <input
        id="amount"
        type="text"
        placeholder="Entrez un Taux fixe"
        value={rate}
        onChange={handleRateChange}
        className="flex-1 bg-transparent outline-none text-lg text-gray-900 rounded"
      />
    </div>
  );
};
