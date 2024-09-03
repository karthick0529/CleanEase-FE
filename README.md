# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# 🧹 CleanEase Site Frontend

## 🚀 Overview
This repository contains the frontend of a functional cleaning service booking platform. The application is designed with a focus on providing a smooth and intuitive user experience. Built with React.js, it features a responsive design, interactive components, and an elegant UI.

**NETLIFY-URL --> https://regal-tartufo-ceec92.netlify.app/**

## 🧰 Tech Stack
- **React.js** ⚛️: JavaScript library for building user interfaces.
- **HTML5** 📝: Markup language for structuring web content.
- **CSS3** 🎨: Styling for the application, ensuring responsive design.
- **JavaScript** 💻: Adds interactivity and logic to the frontend.


## 🖼️ Key Conditions
- **Bookings** 🧾:
  1. User cannot able to book same service at same time.
  2. User cannot able to book services to past date.
  3. User cannot able to edit or delete when the service at on-going stage.
  4. User can give reviews about service only after service got completed.
- **RazorPay** 💵:
  1. RazorPay integrated as test-mode, somethimes when user pay via UPI number, payments will get not success, try use different pay options within the RazorPay.
- **Node-Mailer** 📧:
  1. User will get registeration link and password reset link via mail, sometimes mail generated from nodemailer land inside span box in users mail.
- **Body Background Image** :
  1. Sometimes user might face the blank white space while login/signup its because of the body background image is not loaded.
  2. This might happen because user not using the latest version of browser.
- **Notification** 🔔:
  1. User only get notification when admin changes there bookings status.

## 🌐 Responsive Design
- **Mobile-First Approach** 📲: The application is designed to function smoothly on small screens, ensuring a good user experience on mobile devices.
- **Flexible Layouts** 🖥️: The design adapts to different screen sizes, providing a consistent experience across all devices.

## 🧪 How to Run the Frontend
1. **Install Dependencies** 📦
   ```bash
   npm install react-router-dom
   npm install axios
   npm install jwt-decode
   npm install @mui/material @emotion/react @emotion/styled
   npm install @fontsource/roboto
   npm install @mui/icons-material
   npm install react-bootstrap
   npm install react-toastify
   npm install formik
   npm install yup
   ```
2. **Web Fonts CDN inside index.html**
```bash
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
   <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```
3. **Adding Script Tag for RazorPay inside index.html**
```bash
   <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```
4. **Run the Server** ▶️
   ```bash
   npm run dev
   ```
5. **Build for Production** 🏗️
   ```bash
   npm run build
   ```
   
