import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Dropdown, Menu, Select } from "antd";
import { DownOutlined, PhoneOutlined } from "@ant-design/icons";
import tg from "../../shared/assets/icons/tg.svg";
import wtsp from "../../shared/assets/icons/wtsp.svg";
import message from "../../shared/assets/icons/message.svg";
import bar from "../../shared/assets/icons/menubar.svg";
const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="shadow-[0_2px_35px_0_rgba(91,91,91,0.1)] bg-white">
      <div className="container1 py-3 flex items-center gap-0 justify-between ">
        <div className="flex items-center gap-20">
          <Link className="font-bold text-[20px]">Nimbus</Link>
          <div className="flex items-center gap-7 max-[746px]:hidden">
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                  <Menu.Item key="3">Option 3</Menu.Item>
                </Menu>
              }>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}>
                Портфолио
                <DownOutlined />
              </a>
            </Dropdown>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                  <Menu.Item key="3">Option 3</Menu.Item>
                </Menu>
              }>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}>
                Цены
                <DownOutlined />
              </a>
            </Dropdown>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                  <Menu.Item key="3">Option 3</Menu.Item>
                </Menu>
              }>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}>
                Услуги
                <DownOutlined />
              </a>
            </Dropdown>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                  <Menu.Item key="3">Option 3</Menu.Item>
                </Menu>
              }>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}>
                Контакты
                <DownOutlined />
              </a>
            </Dropdown>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                  <Menu.Item key="3">Option 3</Menu.Item>
                </Menu>
              }>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}>
                О нас
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 max-[1024px]:hidden">
            <img src={tg} alt="" />
            <img src={wtsp} alt="" />
            <div className="w-[18px] flex items-center justify-center h-[18px] rounded-full bg-[#3D2322]">
              <img src={message} alt="" />
            </div>
          </div>
          <Link className="text-pink-500 flex items-center gap-1">
            <PhoneOutlined className=" !text-pink-500  " />{" "}
            <p className=" max-[887px]:hidden">8 (965) 016-54-31</p>
          </Link>
          <Link className="hidden max-[746px]:flex" onClick={showDrawer}>
            <img src={bar} alt="" />
          </Link>

          <Drawer title="Basic Drawer" onClose={onClose} open={open}>
            <div className="flex flex-col gap-3 ">
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                  </Menu>
                }>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}>
                  Портфолио
                  <DownOutlined />
                </a>
              </Dropdown>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                  </Menu>
                }>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}>
                  Цены
                  <DownOutlined />
                </a>
              </Dropdown>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                  </Menu>
                }>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}>
                  Услуги
                  <DownOutlined />
                </a>
              </Dropdown>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                  </Menu>
                }>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}>
                  Контакты
                  <DownOutlined />
                </a>
              </Dropdown>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                  </Menu>
                }>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}>
                  О нас
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
