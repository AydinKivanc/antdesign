import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  const { SubMenu } = Menu;
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key={"topMenuItem1"}>
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <SubMenu key="topMenuItem2" title="Components" mode="horizontal">
          <Menu.Item key={"componentsItem1"}>
            <Link to="/buttonsample">ButtonSample</Link>
          </Menu.Item>
          <Menu.Item key={"componentsItem2"}>
            <Link to="/inputsample">InputSample</Link>
          </Menu.Item>
          <Menu.Item key={"componentsItem3"}>
            <Link to="/selectsample">SelectSample</Link>
          </Menu.Item>
          <Menu.Item key="componentsItem4">
            <Link to="/daterangetimepickers">Pickers</Link>
          </Menu.Item>
          <Menu.Item key="componentsItem5">
            <Link to="/spins">Spins & Progress</Link>
          </Menu.Item>
          <Menu.Item key="componentsItem6">
            <Link to="/icons">Icons</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="topMenuItem3" title="Form">
          <Menu.Item key="formsampleitem1">
            <Link to={"/formsample"}>Form Sample</Link>
          </Menu.Item>
          <Menu.Item key="formsampleitem2">
            <Link to={"/formalertsmessages"}>Form Alerts & Messages</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="topMenuItem4" title="Table">
          <Menu.Item key={"tablesampleitem1"}>
            <Link to="/tablesample">Table Sample</Link>
          </Menu.Item>
          <Menu.Item key={"tablesampleitem2"}>
            <Link to="/tablesortfilterpagination">Sort Filter Pagination</Link>
          </Menu.Item>
          <Menu.Item key={"tablesampleitem3"}>
            <Link to="/tablerowselectoptions">Row Select Options</Link>
          </Menu.Item>
          <Menu.Item key={"tablesampleitem4"}>
            <Link to="/adddeleteadit">Add Delete Edit</Link>
          </Menu.Item>
          <Menu.Item key={"tablesampleitem5"}>
            <Link to="/searchfilter">Search Filter</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Header;
