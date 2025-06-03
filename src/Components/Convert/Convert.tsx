import { useState } from "react";
const rate = 830500;

const Convert: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [type, setType] = useState<string>("dollarToRial");
  const [result, setResult] = useState<number | null>(null);
  const handleConvert = () => {
    const num = parseFloat(value);
    if (!num || num <= 0) {
      alert("عدد درست وارد کنید");
      setResult(null);
      return;
    }
    if (type === "dollarToRial") {
      setResult(num * rate);
    } else {
      setResult(num / rate);
    }
  };
  return (
    <div className="w-full mx-auto mt-10 p-5 border border-gray-300 rounded-lg  shadow-md max-w-md">
      <h2 className="text-center text-2xl font-bold mb-6">تبدیل دلار و ریال</h2>

      <input
        type="number"
        placeholder="عدد را وارد کنید"
        onChange={(e) => {
          setValue(e.target.value);
          setResult(null);
        }}
        className="w-full p-2 mb-4 border border-gray-300 rounded text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <select
        onChange={(e) => {
          setType(e.target.value);
          setResult(null);
        }}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
      >
        <option value="dollarToRial">دلار به ریال</option>
        <option value="rialToDollar">ریال به دلار</option>
      </select>

      <button
        onClick={handleConvert}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors duration-200"
      >
        تبدیل 
      </button>

      {result !== null && (
        <p className="mt-6 text-center font-semibold text-lg">
          نتیجه:{" "}
          {type === "rialToDollar"
            ? result.toFixed(10)
            : result.toLocaleString()}{" "}
          {type === "dollarToRial" ? "ریال" : "دلار"}
        </p>
      )}
    </div>
  );
};

export default Convert;
