import { useEffect, useState } from "react";
import { Col, Row, Select } from "antd";
import Info from './components/Info'
const options = [
  {
    value: "tr",
    name: "Türkiyə",
    label: (
      <div className="flex items-center">
        <img src="https://flagcdn.com/w40/tr.png" className="w-6 h-4 mr-2" alt="TR" />
        Türkiyə
      </div>
    ),
  },
];

export default function Index() {
  const [country, setCountry] = useState(undefined);
  const [countryName, setCountryName] = useState(undefined);

  useEffect(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry && 1==2) {
      setCountry(savedCountry);
    }
  }, []);

  const handleChange = (value) => {
    setCountry(value);
    setCountryName(options.find(option=>option.value==value)?.name);
    localStorage.setItem("selectedCountry", value);
  };

  return (
    <div>
      <div
        className={`w-full bg-blue-900 flex justify-center items-center px-4 
          transition-all duration-500 
          ${country ? "h-[200px]" : "h-[400px]"}`}
      >
        <Row className="w-full justify-center">
          <Col span={8}>
            <div className="text-white text-center mb-4">
              <h2 className="text-lg font-semibold">Ölkə seçin və məlumatlara baxın</h2>
              <p className="text-sm opacity-90">
                Seçdiyiniz ölkə üzrə rəsmi məlumatları və əməkdaşlıqları görmək üçün sadəcə seçim edin.
              </p>
            </div>
            <Select
              value={country}
              onChange={handleChange}
              className="w-full !h-[50px] !bg-white rounded-lg shadow-md"
              options={options}
              placeholder="Ölkə seçin"
              dropdownStyle={{ fontSize: "16px" }}
            />
          </Col>
        </Row>
      </div>

      {/* Placeholder - Ölkə seçildikdə alt hissədə məlumat */}
      {country && (
        <Info country={country} countryName={countryName} />
      )}
    </div>
  );
}
