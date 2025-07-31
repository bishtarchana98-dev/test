import { useState } from "react";

const MultiFieldForm = () => {
  const [selectDate, setSelectDate] = useState([]);
  const [textInput, setTextInput] = useState([]);
  const [dropdown, setDropdown] = useState([]);

  const currentDate = new Date().toISOString().split("T")[0];

  const handleDateChange = (index, value) => {
    const newDates = [...selectDate];
    newDates[index] = value;
    setSelectDate(newDates);
  };

  return (
    <form className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-2 sm:p-4 lg:p-6 space-y-4">
      {/* Row 1: 4 Date Pickers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
        {[1, 2, 3, 4].map((n) => (
          <div key={`date${n}`}>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Date {n}
            </label>
            <input
              type="date"
              min={currentDate}
              onChange={(e) => handleDateChange(n - 1, e.target.value)}
              className="w-full px-1 py-0.5 h-7 border rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
      </div>

      {/* Row 2: 4 Text Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
        {[1, 2, 3, 4].map((n) => (
          <div key={`text${n}`}>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Text {n}
            </label>
            <input
              type="text"
              placeholder="Enter text"
              className="w-full px-2 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        ))}
      </div>

      {/* Row 3: 4 Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
        {[1, 2, 3, 4].map((n) => (
          <div key={`dropdown${n}`}>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Dropdown {n}
            </label>
            <select className="w-full px-2 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-400">
              <option value="">Select option</option>
              <option value={`A${n}`}>Option A</option>
              <option value={`B${n}`}>Option B</option>
            </select>
          </div>
        ))}
      </div>
    </form>
  );
};

export default MultiFieldForm;
