import React from "react";
import { Tabs, Card, Table, Typography, Progress, Tag } from "antd";

const { TabPane } = Tabs;
const { Title } = Typography;

// E1. Hökumətlərarası Komissiya üzrə Fəaliyyət
const intergovernmentalPlanData = [
  {
    key: "1",
    item: "Azərbaycan Respublikası ilə Türkiyə Respublikası arasında İqtisadi Əməkdaşlıq üzrə Birgə Hökumətlərarası Komissiyanın 11-ci iclasının Protokolu",
    status: "Qismən icra edilib",
    responsible: "Pərvanə Hüseynova - DGK-nın Beynəlxalq Əməkdaşlıq idarəsinin Beynəlxalq müqavilələrlə iş şöbəsinin böyük inspektoru",
    desc: `DGK-a dair bəndlər: 12, 13, 14, 15, qismən 9 və 112`,
    note: `12 - Gömrük sahəsində əməkdaşlığın gücləndirilməsi  
13 - Gömrük sahəsində fəaliyyət planının hazırlanması  
14 - Risk idarəetmə sistemlərinin uyğunlaşdırılması  
15 - Xarici ticarət statistikalarının mübadiləsi  
9 - Preferensial Ticarət Sazişinin genişləndirilməsi  
112 - Sərhəd idarəçiliyi sahəsində əməkdaşlıq`,
    lastMeeting: "7-8 may 2025-ci il",
  },
];

const intergovernmentalPlanColumns = [
  { title: "Sənəd / Maddə", dataIndex: "item", key: "item", width: 350 },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      const color =
        status === "Tamamlanıb"
          ? "green"
          : status === "İcra olunur"
          ? "blue"
          : "orange";
      return <Tag color={color}>{status}</Tag>;
    },
  },
  { title: "Məsul Şəxs / Qurum", dataIndex: "responsible", key: "responsible", width: 350 },
  { title: "DGK bəndlər", dataIndex: "desc", key: "desc" },
  { title: "Bəndlərin Məzmunu", dataIndex: "note", key: "note", width: 350 },
  { title: "Keçirilən görüş qeydləri", dataIndex: "lastMeeting", key: "lastMeeting" },
];

// E2. Gömrük Əməkdaşlığı üzrə Fəaliyyət Planı
const customsServicesPlanData = [
  {
    key: "1",
    task: "Azərbaycan Respublikası Dövlət Gömrük Komitəsi və Türkiyə Respublikası Ticarət Nazirliyi arasında 2025-ci il Fəaliyyət Planı",
    progress: 40,
    lastMeeting: "2025-05-08",
    note: "Fəaliyyətin istiqaməti: Gömrük işinin müxtəlif sahələri",
    status: "Qismən icra edilmişdir",
  },
];

const customsServicesPlanColumns = [
  { title: "Fəaliyyət Planı", dataIndex: "task", key: "task", width:250 },
  {
    title: "İcra Səviyyəsi",
    dataIndex: "progress",
    key: "progress",
    render: (value) => (
      <Progress
        percent={value}
        status={
          value < 40
            ? "exception"
            : value === 100
            ? "success"
            : "active"
        }
      />
    ),
  },
  { title: "Son Görüş", dataIndex: "lastMeeting", key: "lastMeeting" },
  { title: "Qeyd", dataIndex: "note", key: "note", width:250 },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
   width:250,
    render: (status) => (
      <Tag color={status === "Qismən icra edilmişdir" ? "orange" : "green"}>
        {status}
      </Tag>
    ),
  },
];

// Component
const ActionPlansTab = () => {
  return (
    <Card
      className="max-h-[calc(100vh-300px)] overflow-y-auto bg-gray-50 p-6"
      style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
      bordered={false}
    >
      <Title level={4} className="mb-4">
        Fəaliyyət Planlarının İcrası
      </Title>

      <Tabs defaultActiveKey="e1" type="line">
        <TabPane tab="Hökumətlərarası Komissiya üzrə Fəaliyyət" key="e1">
          <Table
            bordered
            dataSource={intergovernmentalPlanData}
            columns={intergovernmentalPlanColumns}
            pagination={false}
            scroll={{ x: "max-content" }}
          />
        </TabPane>

        <TabPane tab="Gömrük Əməkdaşlığı üzrə Fəaliyyət Planı" key="e2">
          <Table
            bordered
            dataSource={customsServicesPlanData}
            columns={customsServicesPlanColumns}
            pagination={false}
            scroll={{ x: "max-content" }}
          />
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default ActionPlansTab;
