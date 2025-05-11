import React from 'react'
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  LaptopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UserOutlined,
  UserAddOutlined
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const items = [
  { key: '1', icon: <PieChartOutlined />, label: 'Dashboard' },
  {
    key: '2',
    label: 'Ürünler',
    icon: <LaptopOutlined />,
    children: [
      { key: '2-1', label: 'Ürün Listele' },
      { key: '2-2', label: 'Ürün Ekle' }
    ],
  },
  {
    key: '3',
    label: 'Kategoriler',
    icon: <AppstoreOutlined />,
    children: [
      { key: '3-1', label: 'Kategori Listele' },
      { key: '3-2', label: "Kategori Ekle" }
    ],
  },
  {
    key: '4',
    label: 'Kullanıcılar',
    icon: <UserOutlined />,
    children: [
      { key: '4-1', label: 'Kullanıcı Listele', icon:<UserAddOutlined /> },
      { key: '4-2', label: "Kullanıcı Ekle" }
    ],
  },
  {
    key: '5',
    label: 'Kullanıcılar',
    icon: <UserOutlined />,
    children: [
      { key: '5-1', label: 'Kullanıcı Listele', icon:<UserAddOutlined /> },
      { key: '5-2', label: "Kullanıcı Ekle" }
    ],
  }
];


const AdminLayout = ({children}) => {


  return (
    <div className='admin-layout'>
        <Layout style={{minHeight:"100vh"}}>
        <Sider width="20%" style={{color:"#fff"}}>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                items={items}
                style={{ fontSize:"1.25rem",marginTop:60}}
            />
        </Sider>
        <Layout>
            <Header style={{color:"#fff",alignContent:"center", fontSize:"2rem",paddingLeft:0}}>YTB Mern Stack App</Header>
            <Content style={{}}>{children}</Content>
            <Footer style={{backgroundColor:"#001529", color:"#fff"}}>Footer</Footer>
        </Layout>
        </Layout>
    </div>
  )
}

export default AdminLayout