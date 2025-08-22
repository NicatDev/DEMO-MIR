import React from "react";
import { Card, Table, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Title } = Typography;

const businessTripsData = [
  {
    key: "1",
    employee: "Əli Əliyev – Beynəlxalq Əməkdaşlıq Şöbəsinin mütəxəssisi",
    purpose: "Təlimdə iştirak və tərəfdaşlarla görüşlər",
    dateDuration: "15-20 iyul 2025 / Türkiyə, Ankara (6 gün)",
    event: "Türkiyə Gömrük Xidməti ilə əməkdaşlıq təlimi",
    outcome:
      "Beynəlxalq təcrübə əldə olundu, birgə layihələr üçün ilkin razılaşmalar aparıldı.",
    documents: "ali-eliyev-teqdimat.pdf",
  },
  {
    key: "2",
    employee: "Lalə Qasımova – Hüquqi təminat şöbəsinin baş məsləhətçisi",
    purpose: "İkili hüquqi müqavilələrin müzakirəsi",
    dateDuration: "5-9 iyun 2025 / İstanbul, Türkiyə (5 gün)",
    event: "Türkiyə Ticarət Nazirliyi ilə hüquqi görüş",
    outcome: "Gömrük hüququ sahəsində əməkdaşlıq sənədinə yaxınlaşma əldə olundu.",
    documents: "lale-qasimova-gorus.pdf",
  },
  {
    key: "3",
    employee: "Kamran Məmmədov – Təhlükəsizlik və Audit İdarəsinin rəhbəri",
    purpose: "Təhlükəsizlik sistemlərinin müqayisəli təhlili",
    dateDuration: "1-4 iyul 2025 / Ankara, Türkiyə",
    event: "Təhlükəsizlik və audit üzrə işgüzar görüş",
    outcome: "Məlumat mübadiləsi və risk modellərinin uyğunlaşdırılması barədə razılıq əldə olundu.",
    documents: "kamran-memmedov-audit.pdf",
  },
  {
    key: "4",
    employee: "Zəhra Əlizadə – Tədris Mərkəzinin təlimçi eksperti",
    purpose: "Təlim təcrübələrinin öyrənilməsi",
    dateDuration: "12-17 iyun 2025 / Bursa, Türkiyə",
    event: "Tədris metodikası və proqramlarının nəzərdən keçirilməsi",
    outcome: "Yeni təlim modullarının hazırlanması üçün ideyalar toplanıb.",
    documents: "zehra-elizade-tedris.pdf",
  },
  {
    key: "5",
    employee: "Rauf Səfərov – İT departamentinin proqram təminatı mütəxəssisi",
    purpose: "İnteqrasiya sistemləri ilə bağlı texniki təhlil",
    dateDuration: "8-13 iyun 2025 / İstanbul",
    event: "Rəqəmsal gömrük sistemləri konfransı",
    outcome: "Yeni API texnologiyalarına dair biliklər əldə olundu.",
    documents: "rauf-safarov-konfrans.pdf",
  },
  {
    key: "6",
    employee: "Aynur Vəliyeva – Strateji inkişaf şöbəsinin eksperti",
    purpose: "Əməkdaşlıq strategiyalarının inkişafı",
    dateDuration: "20-24 iyun 2025 / İzmir",
    event: "İdarəetmə və strategiya planlaması seminarı",
    outcome: "Ortaq layihələrin qiymətləndirilməsi üçün yeni meyarlar hazırlandı.",
    documents: "aynur-veliyeva-strategiya.pdf",
  },
  {
    key: "7",
    employee: "Elnur Həsənov – Maliyyə və Büdcə İdarəsinin baş mühasibi",
    purpose: "Gömrük maliyyəsinin şəffaflığı ilə bağlı müzakirələr",
    dateDuration: "3-7 iyul 2025 / Ankara",
    event: "Türkiyə Gömrük Maliyyəsi Forumu",
    outcome: "Büdcə planlaması və hesabatlılıq sahəsində təkliflər toplanıb.",
    documents: "elnur-hesenov-maliyye.pdf",
  },
];

const businessTripsColumns = [
  {
    title: "Ezam olunan əməkdaş",
    dataIndex: "employee",
    key: "employee",
  },
  {
    title: "Ezamiyyətin məqsədi",
    dataIndex: "purpose",
    key: "purpose",
  },
  {
    title: "Tarix və müddət",
    dataIndex: "dateDuration",
    key: "dateDuration",
  },
  {
    title: "Tədbirin adı",
    dataIndex: "event",
    key: "event",
  },
  {
    title: "Nəticələr və təkliflər",
    dataIndex: "outcome",
    key: "outcome",
  },
  {
    title: "Ezam sənədləri",
    dataIndex: "documents",
    key: "documents",
    render: (text) => (
      <a href={`#`} download={text} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <DownloadOutlined /> {text}
      </a>
    ),
  },
];

const Result = () => {
  return (
    <Card
      className="max-h-[calc(100vh-300px)] overflow-y-auto bg-white p-6"
      style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
      bordered={false}
    >
      <Title level={4} className="mb-4">
        6. Ezamiyyətlər və Nəticə Monitorinqi
      </Title>

      <Table
        bordered
        dataSource={businessTripsData}
        columns={businessTripsColumns}
        pagination={false}
        scroll={{ x: "max-content" }}
      />
    </Card>
  );
};

export default Result;
