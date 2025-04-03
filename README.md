# 🚀 ABC Company Website

This project is a **responsive website** for **Company ABC** with a **Content Management System (CMS)** that allows users to update the website's main heading dynamically. The website is built with **React.js** for the frontend and **Spring Boot** for the backend, using **PostgreSQL** as the database.

---

## 📂 **Project Structure**
abc-company-website/ ├── client/ (React Front-End) │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ ├── styles/ │ │ ├── App.js │ │ ├── index.js │ │ ├── config.js (stores backend URL) │ ├── package.json │ ├── server/ (Spring Boot Back-End) │ ├── src/main/java/com/companyabc/ │ │ ├── model/ │ │ ├── repository/ │ │ ├── service/ │ │ ├── controller/ │ ├── src/main/resources/application.properties │ ├── pom.xml │ ├── database/ (PostgreSQL Setup) │ ├── init.sql ├── README.md


---

## 🚀 **Tech Stack**
### **Frontend:**
- React.js
- Tailwind CSS
- Fetch API (No Axios)
- Responsive Design (Mobile & Desktop)

### **Backend:**
- Spring Boot
- RESTful API
- PostgreSQL Database
- Spring Data JPA

---
## 🔧 **Setup Instructions**

### **1️⃣ Clone the Repository**
git clone https://github.com/your-username/abc-company-website.git cd abc-company-website


---
### **2️⃣ Backend Setup (Spring Boot)**

📌 **Install Java & Maven if not installed**
- [Java JDK 17+](https://adoptium.net/)  
- [Maven](https://maven.apache.org/download.cgi)  

📌 **Navigate to `server/` and run the backend**
cd server mvn spring-boot:run

📌 **Backend Runs on:** `http://localhost:8080`


---
### **3️⃣ Database Setup (PostgreSQL)**

📌 **Install PostgreSQL and Create Database**
CREATE DATABASE abc_company_db;

📌 **Run the init.sql script**
psql -U postgres -d abc_company_db -f database/init.sql

📌 **Configure `application.properties` in `server/src/main/resources/`**
spring.datasource.url=jdbc:postgresql://localhost:5432/abc_company_db 
spring.datasource.username=postgres spring.datasource.password=your_password


---
### **4️⃣ Frontend Setup (React)**

📌 **Install Dependencies**
cd ../client npm install

📌 **Start React Frontend**
npm start

📌 **Frontend Runs on:** `http://localhost:3000`

---
## 📡 **API Endpoints**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/heading` | Fetch the current heading from DB |
| **POST** | `/api/heading` | Update the heading in DB |

---
## 🚀 **Deployment Instructions**

### **1️⃣ Deploy Backend (Spring Boot)**
- Use **Docker** or **Heroku**
- Example:
mvn package java -jar target/server-0.0.1-SNAPSHOT.jar

### **2️⃣ Deploy Frontend (React)**
- Use **Vercel**, **Netlify**, or **GitHub Pages**
- Example:
npm run build




