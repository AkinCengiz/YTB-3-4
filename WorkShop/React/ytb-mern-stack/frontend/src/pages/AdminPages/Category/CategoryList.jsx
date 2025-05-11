import { Button, Space, Table } from 'antd'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {
    const [dataSource,setDataSource] = useState([]);
    const navigate = useNavigate();

    const getCategories = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/categories");
            if(response.ok){
                const data = await response.json();
                setDataSource(data);
            }else{
                console.log("Veri getirilirken hata oluştu...");
            }
        } catch (error) {
            console.log("Sunucu hatası : ",error);
        }
    }
    useEffect(() => {
        getCategories();
    },[dataSource])

    const deleteCategory = async (categoryid) => {
        try {
            const response = await fetch("http://localhost:5000/api/categories",{
                method : "DELETE",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({_id:categoryid})
            });
            if(response.ok){
                navigate("/admin/categories");
            }else{
                console.log("Silme işlemi sırasında hata oluştu...");
            }
        } catch (error) {
            console.log("Sunucu hatası : ",error);
        }
    }



    const columns = [
        {
            title : "Görsel",
            dataIndex : "image",
            key : "image",
            width : "25%",
            render : (img,record) => (
                <img src={`${record.image}`} style={{width:"50%"}} alt="Category image"/>
            )
        },
        {
            title : "Kategori Adı",
            dataIndex : "name",
            key : "name",
            width : "50%",
            render : (text) => (<a>{text}</a>)
        },
        {
            title : "İşlemler",
            key : "action",
            render : (_,record) => (
                <Space size="middle">
                    <Button onClick={() => {navigate(`/admin/categories/update/${record._id}`)}} color='success'>Güncelle</Button>
                    <Button onClick={() => deleteCategory(record._id)} color='danger'>Sil</Button>
                </Space>
            )
        }
    ]
  return (
    <div>
        <h2>Kategoriler</h2>
        <Table columns={columns} dataSource={dataSource} rowKey={(record) => record._id}/>
    </div>
  )
}

export default CategoryList