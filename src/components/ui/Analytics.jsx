import React from "react";
import { Tabs, Card, Table, Typography } from "antd";

const { TabPane } = Tabs;
const { Title } = Typography;

// D1. XİN-in ölkə arayışı
const foreignMinistryData = [
  {
    key: "1",
    country: "Türkiyə",
    summary:
      "Xarici İşlər Nazirliyi tərəfindən təqdim edilmiş bu arayış Türkiyənin siyasi strukturu, iqtisadi vəziyyəti, xarici əlaqələri və regional rolu haqqında ümumi məlumatları əhatə edir. Arayışda həmçinin ölkənin beynəlxalq təşkilatlarda iştirakı və Azərbaycanla ikitərəfli əlaqələrinə dair statistik və tarixi məlumatlar yer alır.",
    date: "2024-01-10",
    file: "https://example.com/arayis_turkiye_xin.pdf",
  },
];

const foreignMinistryColumns = [
  { title: "Ölkə", dataIndex: "country", key: "country", width:250 },
  { title: "Xülasə", dataIndex: "summary", key: "summary", width:450 },
  { title: "Tarix", dataIndex: "date", key: "date", width:200 },
  {
    title: "Sənəd",
    dataIndex: "file",
    key: "file",
    width: 140,
    render: (text) => (
      <a href={text} target="_blank" rel="noopener noreferrer">
        Yüklə / Bax
      </a>
    ),
  },
];

// D2. DGK-nın gömrük arayışı
const customsOverviewData = [
  {
    key: "1",
    country: "Türkiyə",
    summary:
      "DGK tərəfindən hazırlanan bu analitik arayışda Türkiyənin gömrük sisteminin strukturu, gömrük keçid məntəqələrinin fəaliyyəti, tarif və qeyri-tarif tədbirləri haqqında məlumatlar verilir. Arayışda eyni zamanda malların təsnifatı, idxal-ixrac prosedurları, risklərin idarə olunması və gömrük nəzarəti mexanizmləri detallı şəkildə izah olunmuşdur.",
    date: "2024-03-05",
    file: "https://example.com/arayis_turkiye_dgk.pdf",
  },
];

const customsOverviewColumns = [
  { title: "Ölkə", dataIndex: "country", key: "country" },
  { title: "Xülasə", dataIndex: "summary", key: "summary" },
  { title: "Tarix", dataIndex: "date", key: "date" },
  {
    title: "Sənəd",
    dataIndex: "file",
    key: "file",
    width: 140,
    render: (text) => (
      <a className="w-[100px]" href={text} target="_blank" rel="noopener noreferrer">
        Yüklə / Bax
      </a>
    ),
  },
];

// Yeni Ana Tab - D
const CountryAnalysisTab = () => {
  return (
    <Card
      style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
      bordered={false}
      className="bg-gray-50 p-6 max-h-[calc(100vh-300px)] overflow-y-auto"
    >
      <Title level={4} className="mb-4">Arayış və Analitik Məlumatlar</Title>

      <Tabs defaultActiveKey="d1" type="line">
        <TabPane tab="XİN-in ölkə arayışı" key="d1">
          <Table
            bordered
            dataSource={foreignMinistryData}
            columns={foreignMinistryColumns}
            pagination={false}
          />
        </TabPane>

        <TabPane tab="DGK-nın gömrük arayışı" key="d2">
          <Table
            bordered
            dataSource={customsOverviewData}
            columns={customsOverviewColumns}
            pagination={false}
          />
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default CountryAnalysisTab;
