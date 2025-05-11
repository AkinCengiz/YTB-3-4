import { Button, Form, Input } from 'antd'
import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCategory = () => {
    const [form] = Form.useForm();
        const formLayout = "vertical";
        const navigate = useNavigate();
        const params = useParams();
        const categoryId = params.id;

    useEffect(() => {
        getCategoryById();
    },[]);
    const getCategoryById = async() => {
        try {
            const response = await fetch(`http://localhost:5000/api/categories/${categoryId}`);
            if(response.ok){
                const data = await response.json();
                if(data){
                    form.setFieldsValue({
                        name : data.name,
                        image : data.image,
                        _id : categoryId
                    });
                }else{
                    console.log("Kategori getirilemedi...");
                }
            }
        } catch (error) {
            console.log("Sunucu hatası : ",error);
        }
    }
    const handleUpdateCategory = async (values) => {
        try {
            const response = await fetch("http://localhost:5000/api/categories",{
                method : "PUT",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(values)
            });
            if(response.ok){
                console.log("Response ok")
                navigate("/admin/categories");
            }else{
                console.log("Kategori güncelleme işlemi başarısız...");
            }
        } catch (error) {
            console.log("Sunucu hatası : ",error);
        }
    }
  return (
    <Form layout={formLayout} form={form} initialValues={{layout:formLayout}} onFinish={handleUpdateCategory}>
        <Form.Item label="Kategori ID" name="_id" style={{display:'none'}}>
            <Input placeholder='Kategori adı...' />
        </Form.Item>
        <Form.Item label="Kategori Adı" name="name">
            <Input placeholder='Kategori adı...' />
        </Form.Item>
        <Form.Item label="Görsel Yolu" name="image">
            <Input placeholder='Görsel yolu...' />
        </Form.Item>
        <Form.Item>
            <Button type='primary' htmlType='submit'>Kategori Güncelle</Button>
        </Form.Item>
    </Form>
  )
}

export default UpdateCategory