import React from "react";
import { Tabs, Card, Table, Typography } from "antd";

const { TabPane } = Tabs;
const { Title } = Typography;

// 1. Sorğular
const inquiriesData = [
  {
    key: "1",
    date: "2025-01-15",
    subjectEntity: "ABC Ltd.",
    sender: "DGK",
    result: "Uyğunluq aşkarlandı",
    note: "İdxal sənədlərinə uyğunluq təsdiqləndi.",
  },
  {
    key: "2",
    date: "2025-03-12",
    subjectEntity: "DEF Trading",
    sender: "DGK",
    result: "Fərq aşkarlandı",
    note: "Fatura məlumatları ilə real göndəriş arasında fərq var.",
  },
];

const inquiriesColumns = [
  { title: "Göndərilmə Tarixi", dataIndex: "date", key: "date" },
  { title: "Sorğu Edilən Subyekt", dataIndex: "subjectEntity", key: "subjectEntity" },
  { title: "Göndərən Qurum", dataIndex: "sender", key: "sender" },
  { title: "Nəticə", dataIndex: "result", key: "result" },
  { title: "Qeyd", dataIndex: "note", key: "note" },
];

// 2. Rəsmi Yazışmalar
const correspondenceData = [
  {
    key: "1",
    number: "DGK/2025/023",
    date: "2025-04-01",
    subject: "Əməkdaşlığın genişləndirilməsi",
    note: "Yeni əməkdaşlıq sahələri üzrə qarşılıqlı təkliflər təqdim edilib.",
  },
];

const correspondenceColumns = [
  { title: "Nömrə", dataIndex: "number", key: "number" },
  { title: "Tarix", dataIndex: "date", key: "date" },
  { title: "Mövzu və Qısa Məzmun", dataIndex: "subject", key: "subject" },
  { title: "Əlavə Qeyd", dataIndex: "note", key: "note" },
];

// 3. Beynəlxalq Müqavilələr
const agreementsData = [
  {
    key: "1",
    name: "Gömrük sahəsində əməkdaşlıq və qarşılıqlı yardım Protokolu",
    type: "Protokol",
    signedDate: "1994-02-09 / Ankara",
    status: "Qüvvədədir (09.08.1997)",
  },
  {
    key: "2",
    name: "Sadələşdirilmiş gömrük dəhlizi haqqında Anlaşma Memorandumu",
    type: "Anlaşma Memorandumu",
    signedDate: "2019-10-11 / Ankara",
    status: "Qüvvədədir (14.01.2020)",
  },
];

const agreementsColumns = [
  { title: "Sənədin Adı", dataIndex: "name", key: "name" },
  { title: "Növü", dataIndex: "type", key: "type" },
  { title: "İmzalanma Tarixi və Yeri", dataIndex: "signedDate", key: "signedDate" },
  { title: "Statusu", dataIndex: "status", key: "status" },
];

// 4. İkitərəfli Görüşlər
const meetingsData = [
  {
    key: "1",
    date: "2025-04-15 - 2025-04-16",
    location: "Macarıstan, Budapeşt",
    summary: "TDT Gömrük Rəhbərlərinin qeyri-rəsmi iclası çərçivəsində ikitərəfli görüş.",
    report: "Azərbaycan Respublikası Prezidentinin Administrasiyasına hesabat: 19.05.2025 / 3-33/2-006015/2025",
  },
];

const meetingsColumns = [
  { title: "Tarix", dataIndex: "date", key: "date" },
  { title: "Keçirildiyi Yer", dataIndex: "location", key: "location" },
  { title: "Qısa Məzmun", dataIndex: "summary", key: "summary" },
  { title: "Hesabat/Protokol", dataIndex: "report", key: "report" },
];

// 5. Təlim və Təcrübə Mübadiləsi
const trainingsData = [
  {
    key: "1",
    title: "Gömrük sahəsində təcrübə mübadiləsi",
    dateLocation: "27 may 2025-ci il / Naxçıvan Baş Gömrük İdarəsinin “Sədərək” gömrük postu",
    purpose:
      "Azərbaycan Respublikası Dövlət Gömrük Komitəsinin və Türkiyə Respublikası Ticarət Nazirliyinin əməkdaşları arasında “Azərbaycan Respublikası Dövlət Gömrük Komitəsi və Türkiyə Respublikası Ticarət Nazirliyi arasında gömrük sahəsində əməkdaşlığın inkişafı üzrə 2025-ci il Fəaliyyət Planı”nın 1-ci bəndinə uyğun olaraq gömrük işinin müxtəlif sahələri üzrə təcrübə mübadiləsi məqsədilə görüş",
    participants:
      `Əsgər MƏMMƏDOV - Komitə Sədrinin müşaviri, Azərbaycan Respublikasının Türkiyə Respublikasında gömrük nümayəndəsi (Heyət rəhbəri)
Vüqar ƏLİYEV - Naxçıvan Baş Gömrük İdarəsinin rəisi
Rəşad BAYRAMOV - Naxçıvan Baş Gömrük İdarəsinin rəis müavini
Hacı-Murad ƏLİYEV - Əməliyyat-İstintaq Baş İdarəsinin rəis müavini
Fərid ƏHMƏDOV - Əməliyyat-İstintaq Baş İdarəsinin Xarici tərəfdaşlarla əməkdaşlıq şöbəsinin rəisi
Tale MƏHƏRRƏMOV - Bakı Baş Gömrük İdarəsinin Əməliyyat və Təhqiqat İdarəsinin rəisi
Novruz HACIYEV - Naxçıvan Baş Gömrük İdarəsinin Əməliyyat və İstintaq İdarəsinin rəisi
Kənan HEYDƏRLİ - Naxçıvan Baş Gömrük İdarəsinin “Sədərək” Gömrük Postunun rəisi
Cəfər CƏFƏROV - Gömrük İnzibatçılığı Baş İdarəsinin Buraxılış məntəqələri üzrə iş şöbəsinin rəisi`,
  },
];

const trainingsColumns = [
  { title: "Təlimin Adı", dataIndex: "title", key: "title", width:250 },
  { title: "Tarix və Yer", dataIndex: "dateLocation", key: "dateLocation", width:250 },
  { title: "Məqsəd", dataIndex: "purpose", key: "purpose", width:350 },
  {
    title: "İştirakçılar",
    dataIndex: "participants",
    key: "participants",
    render: (text) => (
      <>
        {text.split('\n').map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </>
    ),
  },
];

// 6. Birgə Layihələr
const projectsData = [
  {
    key: "1",
    name: "İlkin Elektron Məlumat Mübadiləsi Sistemi",
    field: "Rəqəmsallaşma",
    status: "Qüvvədədir",
    info: "Avtomobil nəqliyyatı ilə tranzit daşımalar üzrə ilkin məlumatların paylaşılması",
    partners: "DGK, Türkiyə Gömrük İdarəsi",
  },
];

const projectsColumns = [
  { title: "Layihənin Adı", dataIndex: "name", key: "name" },
  { title: "Tətbiq Sahəsi", dataIndex: "field", key: "field" },
  { title: "Status", dataIndex: "status", key: "status" },
  { title: "Qısa Məlumat", dataIndex: "info", key: "info" },
  { title: "Donor və Tərəfdaşlar", dataIndex: "partners", key: "partners" },
];

// Component
const BilateralActivitiesTab = () => {
  return (
    <Card
      style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
      bordered={false}
      className="bg-gray-50 p-6 max-h-[calc(100vh-300px)] overflow-y-auto"
    >
      <Title level={4} className="mb-4 pb-2">
        İki Tərəfli Fəaliyyətlər və Əlaqələr
      </Title>

      <Tabs defaultActiveKey="1" type="card" size="middle" tabPosition="top">
        <TabPane tab="Sorğular (İdxal/İxrac)" key="1">
          <Table
            bordered
            dataSource={inquiriesData}
            columns={inquiriesColumns}
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
          />
        </TabPane>

        <TabPane tab="Rəsmi Yazışmalar" key="2">
          <Table
            bordered
            dataSource={correspondenceData}
            columns={correspondenceColumns}
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
          />
        </TabPane>

        <TabPane tab="Beynəlxalq Müqavilələr" key="3">
          <Table
            bordered
            dataSource={agreementsData}
            columns={agreementsColumns}
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
          />
        </TabPane>

        <TabPane tab="İkitərəfli Görüşlər" key="4">
          <Table
            bordered
            dataSource={meetingsData}
            columns={meetingsColumns}
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
          />
        </TabPane>

        <TabPane tab="Təlim və Təcrübə Mübadiləsi" key="5">
          <Table
            bordered
            dataSource={trainingsData}
            columns={trainingsColumns}
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
          />
        </TabPane>

        <TabPane tab="Birgə Layihələr" key="6">
          <Table
            bordered
            dataSource={projectsData}
            columns={projectsColumns}
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
          />
        </TabPane>     </Tabs>
    </Card>
  );
};

export default BilateralActivitiesTab;