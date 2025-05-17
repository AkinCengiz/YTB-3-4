import { Button, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [dataSource, setDataSource] = useState([]);
    
    const getProducts = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/products");
            if(response.ok){
                const data = await response.json();
                setDataSource(data);
            }else{
                console.log("Ürünler getirilemedi...");
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts();
    },[]);

    const columns = [
        {
            title : "Ürün Görseli",
            dataIndex : "images",
            key : "images",
            width : "200px",
            render : (img,record) => (<img src={`${record.images[0]}`} alt={`${record.name}`} style={{width : "50%"}} />)
        },
        {
            title : "Marka",
            dataIndex : "brand",
            key : "brand"
        },
        {
            title : "Ürün İsmi",
            dataIndex : "name",
            key : "name"
        },
        {
            title : "Ürün Açıklaması",
            dataIndex : "description",
            key : "description"
        },
        {
            title : "Fiyat",
            dataIndex : "price",
            key : "price"
        },
        {
            title : "Stok Miktarı",
            dataIndex : "stock",
            key : "stock"
        },
        {
            title : "Ürün Renkleri",
            dataIndex : "colors",
            key : "colors",
            render : (colors) => (
                <div style={{display:"flex", flexWrap:"wrap", justifyContent : "center",width : "60px"}}>
                    {
                        colors.map((item,index) => (
                            <div key={index} style={{
                                width : "20px",
                                height : "20px",
                                borderRadius : "50%",
                                marginRight : "5px",
                                marginBottom : "5px",
                                border : "1px solid silver",
                                backgroundColor : item
                            }}></div>
                        ))
                    }
                </div>
            )
        },
        {
            title : "İşlemler",
            key : "actions",
            render : (_,record) => (
                <Space size="middle">
                    <Button onClick={() => {record}} color='cyan' variant='solid'>Güncelle</Button>
                    <Button onClick={() => {}} color='danger' variant='solid'>Sil</Button>
                </Space>
            )
        }
    ]
  return (
    <div>
        <h2>Ürünler</h2>
        <Table columns={columns} dataSource={dataSource} >

        </Table>
    </div>
  )
}

export default ProductList