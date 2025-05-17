import { Button, Checkbox, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const {TextArea} = Input;

const CreateProduct = () => {
    const [categories,setCategories] = useState([]);
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const colors = ["Black","White","Gray","Red","Green","Blue","Brown","Silver","Pink","Orange","Yellow"];
    const initialValues = {
        colors:["Black","White","Red"]
    }

    const getCategories = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/categories");
            if(response.ok){
                const data = await response.json();
                setCategories(data);
            }else{
                console.log("Kategoriler getirilemedi...");
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories();
    },[]);

    const addProduct = async(values) => {
        const imageLinks = values.images.split("\n").map((link) => link.trim());
        try {
            const response = await fetch("http://localhost:5000/api/products",{
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                    ...values,
                    images : imageLinks
                })
            });
            if(response.ok){
                navigate("/admin/products");
            }else{
                console.log("Ürün kaydetme işlemi başarısız...");
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <h2 style={{paddingBottom:"10px"}}>Ürün Ekle</h2>
        <Form form={form} layout='vertical' initialValues={initialValues} onFinish={addProduct}>
            <Form.Item label="Ürün Adı" name="name" rules={[{required : true, message:"Ürün adı boş geçilemez..."}]}>
                <Input placeholder='Ürün adı giriniz...' />
            </Form.Item>
            <Form.Item label="Ürün Görselleri" name="images">
                <TextArea rows={4}/>
            </Form.Item>
            <Form.Item label="Ürün Açıklaması" name="description">
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Fiyat" name="price">
                <Input type='number' placeholder='Ürün fiyatı...' />
            </Form.Item>
            <Form.Item label="Ürün Renkleri" name="colors">
                <Checkbox.Group options={colors} />
            </Form.Item>
            <Form.Item label="Stok Miktarı" name="stock">
                <Input type='number' />
            </Form.Item>
            <Form.Item label="Alış Fiyatı" name="purchasePrice" rules={[{required : true, message:"Alış fiyatı boş geçilemez..."}]}>
                <Input type='number'/>
            </Form.Item>
            <Form.Item label="Marka" name="brand" rules={[{required : true, message:"Marka alanı boş geçilemez..."}]}>
                <Input placeholder='Marka giriniz...' />
            </Form.Item>
            <Form.Item label="Kategori" name="category">
                <Select placeholder="Kategori seçiniz..." >
                    {
                        categories.map((category) => (
                            <Select.Option key={category._id} value={category._id}>
                                {category.name}
                            </Select.Option>
                        ))
                    }
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>Ürün Kaydet</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default CreateProduct