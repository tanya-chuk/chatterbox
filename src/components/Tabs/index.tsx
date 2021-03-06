import { Tab, Tabs as MuiTabs } from "@material-ui/core";
import React, { FC, useState, ChangeEvent, ReactNode } from "react";

interface ITab {
  label: string;
  value: string | number;
  component: ReactNode;
}

interface IProps {
  tabs: { [key: string]: ITab };
  initialTab?: ITab["value"];
  onChange?: (val: string | number) => void;
}

const Tabs: FC<IProps> = ({ tabs, initialTab, onChange }: IProps) => {
  const initialValue = initialTab || Object.values(tabs)[0].value;
  const [activeTab, setActiveTab] = useState(initialValue);
  const currentTab = tabs[activeTab];

  const handleChange = (e: ChangeEvent<unknown>, tab: string) => {
    if (onChange) {
      onChange(tab);
    }
    setActiveTab(tab);
  };

  return (
    <>
      <MuiTabs value={activeTab} onChange={handleChange}>
        {Object.values(tabs).map(({ label, value }) => (
          <Tab key={value} value={value} label={label} />
        ))}
      </MuiTabs>
      {currentTab.component}
    </>
  );
};

export default Tabs;
