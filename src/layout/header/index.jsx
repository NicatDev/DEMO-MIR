import { Global, Logo } from "@/components/icons";
import { Avatar, Button, Dropdown, Popover, Typography } from "antd";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import LanguageContent from "@/components/ui/LanguageContent";
import Languages from "@/config/Languages";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/context/AuthContext";

export default function Header({}) {
  const { user, logout } = useAuth();
  const { Text, Title } = Typography;
  const { t } = useTranslation();

  const handleLanguageChange = (code) => {
    Languages.ChangeLanguage(code);
  };

  const handleLogout = () => {
    alert("Logout");
    logout();
    window.location.href = import.meta.env.VITE_HOME;
  };

  return (
    <div className="flex items-center justify-between h-[58px] w-full px-4 bg-white border-b border-gray-200">
      {/* Left section: Logo or Title */}
      <div className="flex items-center w-[200px] pr-4">
        <h1 className="text-lg font-semibold text-gray-800">Ana səhifə </h1>
      </div>

      {/* Right section: User info, Dropdown, Language */}
      <div className="flex items-center gap-4">
        {/* Avatar + Dropdown */}
        <Dropdown
          menu={{
            items: [
              {
                key: "logout",
                label: (
                  <Button
                    icon={<LogoutOutlined />}
                    type="text"
                    danger
                    block
                    onClick={handleLogout}
                  >
                    {t("HeaderContent.logout")}
                  </Button>
                ),
              },
            ],
          }}
          placement="bottom"
          arrow={{ pointAtCenter: true }}
        >
          <div className="flex items-center gap-2 cursor-pointer">
            <Avatar icon={<UserOutlined />}>
              {user?.FullName?.[0] || "N"}
            </Avatar>
            <Text>{user?.FullName ?? "Nijat Mammadov"}</Text>
          </div>
        </Dropdown>

        {/* Language Switcher */}
        <Popover
          trigger="click"
          placement="bottomLeft"
          content={
            <div className="min-w-[120px]">
              <LanguageContent onLanguageChange={handleLanguageChange} />
            </div>
          }
        >
          <div className="cursor-pointer text-xl" aria-label="Select Language">
            <Global />
          </div>
        </Popover>
      </div>
    </div>
  );
}
