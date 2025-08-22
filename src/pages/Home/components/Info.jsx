import React, { useState } from "react";
import { Radio, Space, Tabs } from "antd";
import CountryProfile from "../../../components/ui/CounrtyProfile";
import Commerce from "../../../components/ui/Commerce";
import Activities from "../../../components/ui/Activities";
import Analytics from "../../../components/ui/Analytics";
import Action from "../../../components/ui/Action";
import Result from "../../../components/ui/Result";

export default function Index({ country, countryName }) {
  const [tabPosition, setTabPosition] = useState("left");

  const tabs = [
    {
      label: `Ölkə profili`,
      key: 1,
      children: (
        <div >
          <CountryProfile />
        </div>
      ),
    },
    {
      label: `İqtisadi və ticarət göstəriciləri`,
      key: 2,
      children: (<div ><Commerce /></div>),
    },
    {
      label: `İki tərəfli fəaliyyətlər və əlaqələr`,
      key: 3,
      children: (<div ><Activities /></div>),
    },
    {
      label: `Arayış və analitik məlumatlar`,
      key: 4,
      children: (<div ><Analytics /></div>),
    },
    {
      label: `Fəaliyyət planlarının icrası`,
      key: 5,
      children: (<div ><Action /></div>),
    },
    {
      label: `Ezamiyyətlər və nəticə monitorinqi`,
      key: 6,
      children: (<div ><Result /></div>),
    },
  ];

  return (
    <>
      <div className=" px-4 py-6 text-center">
        <Tabs tabPosition={tabPosition} items={tabs} />
      </div>
    </>
  );
}
