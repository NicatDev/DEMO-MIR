import { Tabs, Card, Descriptions, Divider, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const CountryProfile = () => {
  return (
    <div
      className="max-h-[calc(100vh-300px)] overflow-y-auto w-full bg-white rounded-2xl p-8 text-black"
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex items-center mb-8">
        <img
          src="https://flagcdn.com/w80/tr.png"
          alt="Türkiyə Bayrağı"
          className="w-14 h-10 mr-4 rounded shadow-md"
        />
        <h1 className="text-3xl font-bold text-gray-800">Türkiyə</h1>
      </div>

      <Tabs defaultActiveKey="1-1" type="line">
        {/* Ölkə Profili */}
        <TabPane tab="Ölkənin təqdimatı" key="1-1">
          <Descriptions
            title="1.1. Ölkənin Ümumi Məlumatları"
            bordered
            column={1}
            size="middle"
            className="mb-6"
            labelStyle={{ textAlign: "left" }}
          >
            <Descriptions.Item label="Ölkənin adı (AZ/ENG)">
              Türkiyə Respublikası / Republic of Türkiye
            </Descriptions.Item>
            <Descriptions.Item label="Milli bayramı">
              29 oktyabr - Respublika Günü (Republic Day) (1923)
            </Descriptions.Item>
            <Descriptions.Item label="Paytaxtı">Ankara</Descriptions.Item>
            <Descriptions.Item label="Əhali və ÜDM">
              Əhali: 85,664,944 (2024) <br />
              ÜDM (nominal): $1.437 trilyon (2025)
            </Descriptions.Item>
          </Descriptions>

          <Divider orientation="left">Qısa Tanıtım</Divider>
          <p className="text-gray-800 leading-relaxed">
            Türkiyə Cümhuriyyəti, Avropa və Asiya qitələrinin qovşağında
            yerləşən, zəngin tarixi və mədəni irsi ilə seçilən dövlətdir. Qədim
            dövrlərdən bəri sivilizasiyalara ev sahibliyi etmiş bu ölkədə həm
            Osmanlı, həm də Roma dövrünə aid izlərə rast gəlmək mümkündür.
            Geostrateji mövqeyi sayəsində iqtisadi və siyasi baxımdan da
            regionda mühüm rol oynayır.
          </p>
        </TabPane>

        {/* Gömrük Xidməti */}
        <TabPane tab="Gömrük orqanı" key="1-2">
          <Card bordered={false} className="bg-gray-50">
            <Descriptions
              title="1.2. Gömrük Xidməti Məlumatları"
              bordered
              column={1}
              size="middle"
              labelStyle={{ textAlign: "left" }}
            >
              <Descriptions.Item label="Rəsmi adı (AZ/ENG)">
                Türkiyə Respublikasının Ticarət Nazirliyi / Ministry of Trade of the Republic of Türkiye
              </Descriptions.Item>
              <Descriptions.Item label="Rəsmi sayt">
                <a href="https://www.trade.gov.tr" target="_blank" rel="noopener noreferrer">
                  https://www.trade.gov.tr
                </a>
              </Descriptions.Item>
              <Descriptions.Item label="Əlaqə">
                Söğütözü Mahallesi Nizami Gencevi Caddesi 63/1 06530, Çankaya / ANKARA <br />
                Tel: +90 312 204 75 00 <br />
                Email: ticaretbakanligi@hs01.kep.tr
              </Descriptions.Item>
              <Descriptions.Item label="Beynəlxalq əlaqələr üzrə məsul şəxslər">
                <strong>Sevil Karaca</strong> - Baş İdarə Rəisi <br />
                <strong>Yavuz İlkan Karahan</strong> - Ticarət Eksperti
              </Descriptions.Item>
            </Descriptions>




          </Card>
        </TabPane>

<TabPane tab="Gömrük Xidməti Rəhbərliyi" key="1-3">
  <Card bordered={false} className="bg-gray-50">
    <Descriptions
      title="Gömrük Xidməti Rəhbərliyi"
      bordered
      column={1}
      size="middle"
      labelStyle={{ textAlign: "left" }}
    >
      <Descriptions.Item label="Sədrin adı">
        <strong>Sezai Uçarmak</strong>
      </Descriptions.Item>
      <Descriptions.Item label="Vəzifəsi">
        Türkiyə Respublikası ticarət nazirinin müavini /
        <em> Deputy Minister of the Trade of the Republic of Türkiye</em>
      </Descriptions.Item>

      <Descriptions.Item label="Bioqrafiya">
        <p className="text-sm text-gray-700 leading-relaxed">
          Sezai UÇARMAK 1964-cü ildə Ordu vilayətinin Korgan rayonunda anadan
          olmuşdur. İbtidai təhsilini Korganda, orta və ali məktəb təhsilini
          isə 1983-cü ildə Samsunda tamamlamışdır. 1987-ci ildə İstanbul
          Universitetinin Siyasi Elmlər Fakültəsinin Dövlət İdarəçiliyi (Kamu
          Yönetimi) ixtisası üzrə bakalavr dərəcəsi ilə bitirmişdir.
          <br />
          Peşə fəaliyyətinə 1987-ci ildə Türkiyə Respublikası Maliyyə və Gömrük
          Nazirliyində gömrük müfəttişi köməkçisi olaraq başlamışdır. Daha sonra
          Gömrük Direktorluğunda (Müsteşarlıq) gömrük müfəttişi və baş gömrük
          müfəttişi vəzifələrində çalışmışdır. İstanbul Universitetinin
          İqtisadiyyat Fakültəsindən Maliyyə ixtisası üzrə magistr dərəcəsi
          almışdır. 1994–1998-ci illər arasında İstanbul Universitetinin Sosial
          Elmlər üzrə Yüksək Peşə Məktəbində “Gömrük və Xarici Ticarət”
          fənnindən dərs demişdir. 2000-ci ildə ABŞ-a bir illik işgüzar səfər
          edərək “Gömrük rəsmiləşdirməsindən sonrakı nəzarət” mövzusunda
          araşdırmalar aparmışdır.
          <br />
          2003–2005-ci illərdə Baş Gömrük İdarəsinin rəisi, 2005–2008-ci illərdə
          baş gömrük müfəttişi, 2011-ci ilə qədər Təhqiqat İdarəsinin rəisi
          olmuşdur. 2011–2018-ci illərdə Gömrük və Ticarət Nazirliyində nazir
          müavini vəzifəsində çalışmış, 2019-cu ilin yanvarında isə Ticarət
          Nazirliyinin müavini təyin olunmuşdur.
          <br />
          Evlidir, üç övladı var, ingilis dilini sərbəst bilir.
        </p>
      </Descriptions.Item>
    </Descriptions>

    <Divider orientation="left">Gömrük üzrə Beynəlxalq Əlaqələr Məsul Şəxsləri</Divider>

    <Descriptions
      bordered
      column={1}
      size="middle"
      labelStyle={{ textAlign: "left" }}
    >
      <Descriptions.Item label="Sevil Karaca">
        <strong>Vəzifəsi:</strong> Türkiyə Respublikası Ticarət Nazirliyinin
        Beynəlxalq Müqavilələr və Aİ üzrə Baş Direktorluğunun İkitərəfli Gömrük
        Əlaqələri və Əməkdaşlıq İdarəsinin rəisi
        <br />
        <strong>İngiliscə:</strong> Head of the Department of Bilateral Customs
        Relations and Cooperation, DG International Agreements and EU, Ministry
        of Trade of the Republic of Türkiye
      </Descriptions.Item>

      <Descriptions.Item label="Yavuz İlkan Karahan">
        <strong>Vəzifəsi:</strong> Türkiyə Respublikası Ticarət Nazirliyinin
        Beynəlxalq Müqavilələr və Aİ üzrə Baş Direktorluğunun İkitərəfli Gömrük
        Əlaqələri və Əməkdaşlıq İdarəsinin ticarət eksperti
        <br />
        <strong>İngiliscə:</strong> Trade Expert of the Department of Bilateral
        Customs Relations and Cooperation, DG International Agreements and EU,
        Ministry of Trade of the Republic of Türkiye
      </Descriptions.Item>
    </Descriptions>
  </Card>
</TabPane>

        {/* Səfirliklər */}
        <TabPane tab="Səfirlik məlumatları" key="1-4">
          <Card bordered={false} className="bg-gray-50 mb-6">
            <Descriptions
              title="1.4. Azərbaycanın Türkiyədəki Səfirliyi"
              bordered
              column={1}
              size="middle"
              labelStyle={{ textAlign: "left" }}
            >
              <Descriptions.Item label="Səfir">
                Rəşad Eynəddin oğlu Məmmədov
              </Descriptions.Item>
              <Descriptions.Item label="Ünvan">
                Diplomatik Site, Baku Sok. No:1, 06450 Oran, Ankara
              </Descriptions.Item>
              <Descriptions.Item label="Əlaqə">
                (0312) 490 69 13 (konsulluq) <br />
                (0312) 491 16 81 <br />
                ankara@mission.mfa.gov.az <br />
                consul_ankara@mission.mfa.gov.az
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Card bordered={false} className="bg-gray-50">
            <Descriptions
              title="1.5. Türkiyənin Azərbaycandakı Səfirliyi"
              bordered
              column={1}
              size="middle"
              labelStyle={{ textAlign: "left" }}
            >
              <Descriptions.Item label="Səfir">
                Prof. Dr. Birol Akgün
              </Descriptions.Item>
              <Descriptions.Item label="Ünvan">
                Səməd Vurğun küçəsi 134, Bakı/Azərbaycan, Poçt indeksi: 1022
              </Descriptions.Item>
              <Descriptions.Item label="Əlaqə">
                +994 12 444 73 20/21 <br />
                Konsulluq: +994 12 444 73 43 <br />
                Email: embassy.baku@mfa.gov.tr
              </Descriptions.Item>
              <Descriptions.Item label="Əlaqələndirici şəxs">
                Elşən Əbülhəsənli <br />
                Email: elsenmtt@gmail.com <br />
                Mobil: 0994502455868
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CountryProfile;
