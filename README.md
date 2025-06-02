# 🛍️ MyShop - Simple eCommerce Website

Welcome to **MyShop**, a responsive and lightweight eCommerce website built with HTML, CSS, and JavaScript.

👉 **Live Demo**: [https://22MH1A4242.github.io/my-shop](https://22MH1A4242.github.io/my-shop)

## 🚀 Features

- ✅ Responsive design for desktop and mobile
- ✅ Dynamic product grid
- ✅ Banner carousel (excluding specified banners)
- ✅ Feature highlights section
- ✅ Login/Logout using `localStorage`
- ✅ Clickable product cards (linked to `sproduct.html`)
- ✅ Built with vanilla HTML/CSS/JS

## 📁 Folder Structure

my-shop/
├── index.html
├── style.css
├── sproduct.html (optional)
├── img/
│ ├── logo.png
│ ├── banner/
│ │ └── b1.jpg ... b20.jpg (except 3, 5, 8, 9, 11-15)
│ ├── features/
│ │ └── f1.png to f4.png
│ └── products/
│ └── f1.jpg to f8.jpg


## 🧠 How It Works

- **Login/Logout:** Uses `localStorage` to store username and update UI.
- **Product Cards:** Dynamically generated from `f1–f8.jpg` and `n1–n8.jpg` with pricing logic.
- **Banner Section:** Loads all `b1–b20.jpg` except removed images using a filtered loop.

## 🛠️ How to Run Locally

```bash
git clone https://github.com/22MH1A4242/my-shop.git
cd my-shop
# Open index.html in any browser
