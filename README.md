# 🎉 Culrav-Avishkar 2k24 Official Website


![Screenshot (500)](client/src/assets/Readme/homePage.png)

Welcome to the Official Culrav-Avishkar 2k25 Website Repository ! This project was built as part of the annual techno-cultural fest of our institute, combining cutting-edge web technologies and teamwork to deliver a seamless user experience.

## Intro
The Website starts off with a sleek animated video asset that was provided by the MHM Team.
![Screenshot (501)](client/src/assets/Readme/duality_page.png)

## Sneak peak into different Sections of the website :

## We had a sleek gallery section on the home page to show past culrav-avishkar memories
![Screenshot (516)](client/src/assets/Readme/gallery.png)

## Events Page , with a captivating and engaging design
![Screenshot (509)](client/src/assets/Readme/Event.png)

## A vibrant banner section showcasing the logos of both the Cultural and Technical fest !

![Screenshot (513)](client/src/assets/avishkarrr.png)
![Screenshot (513)](client/src/assets/CULRAV%20LOGO.png)

## Team
Introducing you to the Incredible Web Team behind the success. It would not have been possible without them !

![image (4)](client/src/assets/Readme/team.png)


## Technologies Used

## React JS
![Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s)

## Express JS
![Logo](https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png)

## Redux Toolkit
![Logo](https://redux-toolkit.js.org/img/redux-logo-landscape.png)

## Tailwind CSS
![Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s)

## GSAP 
![Logo](https://images.prismic.io/toyfight/65e1e07d27237c2bb829b9dc_GSAP-Meta-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C2400%2C1260&w=10800&h=1260)

## Framer Motion
![Logo](https://tsh.io/wp-content/uploads/fly-images/32664/framer-motion-logo-1-312x211.png)




## Run Locally

Clone the project

```bash
git clone https://github.com/UjjwalBaranwal/culrav-avishkar-2k25.git
```

Go to the project directory

```bash
cd culrav-avishkar-2k25
```

Install dependencies for both frontend and backend :

```bash
cd server
npm install
cd ..
cd client
npm install

```

Start the backend server:

```bash
cd server
npm start
```
Start the frontend development server:

```bash
cd client
npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file inside server folder

`MONGO`

`JWT_SECRET`

`SMTP_USER`

`SMTP_HOST`

`CONFIRM_TOKEN_EXPIRES_MIN`

## Vite Configuration
### The vite.config.js file has to be configured according to the proxy API requests to the backend server

```bash
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

```

