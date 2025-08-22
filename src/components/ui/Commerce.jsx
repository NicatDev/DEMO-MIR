import { Tabs, Card, Table, Typography, Divider } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const { TabPane } = Tabs;
const { Title } = Typography;

// 2.1 İkitərəfli Ticarət Statistikası
const tradeData = [
  { year: "2020", tradeVolume: 1900 },
  { year: "2021", tradeVolume: 2550 },
  { year: "2022", tradeVolume: 3150 },
  { year: "2023", tradeVolume: 3700 },
  { year: "2024", tradeVolume: 4400 },
];

const tradeTableData = [
  {
    key: "1",
    year: "2020",
    exportToAZ: "1.2 milyard USD",
    importFromAZ: "0.7 milyard USD",
    balance: "+0.5 milyard USD",
  },
  {
    key: "2",
    year: "2021",
    exportToAZ: "1.65 milyard USD",
    importFromAZ: "0.9 milyard USD",
    balance: "+0.75 milyard USD",
  },
  {
    key: "3",
    year: "2022",
    exportToAZ: "2 milyard USD",
    importFromAZ: "1.15 milyard USD",
    balance: "+0.85 milyard USD",
  },
  {
    key: "4",
    year: "2023",
    exportToAZ: "2.4 milyard USD",
    importFromAZ: "1.3 milyard USD",
    balance: "+1.1 milyard USD",
  },
  {
    key: "5",
    year: "2024",
    exportToAZ: "2.8 milyard USD",
    importFromAZ: "1.6 milyard USD",
    balance: "+1.2 milyard USD",
  },
];

const tradeColumns = [
  { title: "İl", dataIndex: "year", key: "year" },
  { title: "Azərbaycanla Ticarət", dataIndex: "exportToAZ", key: "exportToAZ" },
  {
    title: "Azərbaycandan İdxal",
    dataIndex: "importFromAZ",
    key: "importFromAZ",
  },
  {
    title: "Ticarət Saldo",
    dataIndex: "balance",
    key: "balance",
  },
];

// 2.3 Gömrük işi sahəsində Əlaqəli Statistik Göstəricilər
const customsStats = [
  {
    key: "1",
    indicator: "Ticarət dövriyyəsində gömrük rüsumlarının payı",
    value: "14.6%",
  },
  {
    key: "2",
    indicator: "Gömrük keçidlərinin sayı (Yol/Dəmir yolu/Hava)",
    value: "29 keçid (17 yol, 8 dəmir yolu, 4 hava)",
  },
  {
    key: "3",
    indicator: "Xüsusi rejimli ticarət razılaşmaları",
    value: "Azad Ticarət Sazişi (ATA), Gömrük İttifaqı (AB ilə)",
  },
  {
    key: "4",
    indicator: "Lojistika Performans İndeksi (LPI)",
    value: "3.42 (Dünya Bankı, 2023)",
  },
  {
    key: "5",
    indicator: "Əlavə qeydlər",
    value: "Gömrük prosedurlarının sadələşdirilməsi təşəbbüsləri mövcuddur",
  },
  {
    key: "6",
    indicator: "Statistik mənbələr",
    value:
      "Dövlət Statistika Komitəsi, Ticarət Nazirliyi, Dünya Bankı, UN COMTRADE",
  },
];

const customsColumns = [
  { title: "Göstərici", dataIndex: "indicator", key: "indicator" },
  { title: "Dəyəri", dataIndex: "value", key: "value" },
];

const EconomicProfileTab = () => {
  return (
    <Card
      bordered={false}
      className="bg-gray-50 max-h-[calc(100vh-300px)] overflow-y-auto"
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Title level={4} className="mb-4 pb-2">
        İqtisadi və Ticarət Göstəriciləri
      </Title>
      <Tabs defaultActiveKey="sub-1" type="card" size="middle">
        <TabPane tab="İkili Ticarət Göstəriciləri" key="sub-1">
          <Title level={5} className="text-blue-900">
            Azərbaycanla İkili Ticarət Statistikası (2020–2024)
          </Title>
          <Table
            dataSource={tradeTableData}
            columns={tradeColumns}
            pagination={false}
            className="mb-6"
          />

          <Divider orientation="left">Ticarət Həcmi üzrə Trendlər</Divider>
          <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={tradeData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="tradeVolume"
                  stroke="#1677ff"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </TabPane>

        <TabPane tab="Gömrük StatistikasI" key="sub-2">
          <Title level={5} className="text-blue-900">
            Gömrük işi sahəsində Əlaqəli Statistik Göstəricilər
          </Title>
          <Table
            dataSource={customsStats}
            columns={customsColumns}
            pagination={false}
          />
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default EconomicProfileTab;
