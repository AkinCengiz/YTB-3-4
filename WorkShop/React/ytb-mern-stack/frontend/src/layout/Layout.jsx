import React from 'react'
import AdminLayout from "./AdminLayout"
import MainLayout from "./MainLayout"

export const isAdmin = window.location.pathname.startsWith("/admin");

export const Layout = isAdmin ? AdminLayout : MainLayout;