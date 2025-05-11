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
  UserAddOutlined,
  BookOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;




const AdminLayout = ({children}) => {

    const navigate = useNavigate();
    const items = [
  { key: '1', icon: <PieChartOutlined />, label: 'Dashboard', onClick : () => navigate("/admin") },
  {
    key: '2',
    label: 'Ürünler',
    path : "/",
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
    path : "/",
    children: [
      { key: '3-1', label: 'Kategori Listele', path:"/admin/categories",onClick : () => {navigate("/admin/categories")} },
      { key: '3-2', label: "Kategori Ekle",path:"/admin/categories/create", onClick : () => {navigate("/admin/categories/create")} }
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
    label: 'Dersler',
    icon: <BookOutlined />,
    children: [
      { key: '5-1', label: 'Dersleri Listele' },
      { key: '5-2', label: "Ders Ekle" }
    ],
  }
];

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