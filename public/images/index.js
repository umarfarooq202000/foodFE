const express = require('express');
const axios = require('axios');

const app = express();
const port = 9000;

// Define a route to handle API request
app.get('/fooddata', async (req, res) => {
    const foodData = [
        {
          name: "chicken masala Biryani",
          price: 220,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/biryani.jpg",
          type: "main course non-veg",
        },
        {
          name: "chicken Biryani",
          price: 200,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/biryani.jpg",
          type: "main course non-veg",
        },
        {
          name: "Mutton masala Biryani",
          price: 200,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/biryani.jpg",
          type: "main course non-veg",
        },
        {
          name: "mutton Biryani",
          price: 250,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/biryani.jpg",
          type: "main course non-veg",
        },
        {
          name: "Biryani",
          price: 200,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/biryani.jpg",
          type: "main course non-veg",
        },
        {
          name: "corn pizza",
          price: 100,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/pizza.jpg",
          type: "pizza",
        },
        {
          name: " Cheese pizza",
          price: 100,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/ramen.png",
          type: "pizza",
        },
        {
          name: "FarmHouse pizza",
          price: 200,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/ramen.png",
          type: "pizza",
        },
        {
          name: "Margrete pizza",
          price: 150,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/ramen.png",
          type: "pizza",
        },
        {
          name: "Chicken Tikka masala",
          price: 150,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/chicken.png",
          type: "non-veg",
        },
        { name: "GRILLED CHICKEN",
          price: 200,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/chicken.png",
          type: "non-veg",
        },
        { name: "GRILLED CHICKEN",
          price: 130,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/chicken.png",
          type: "non-veg",
        },
        {
          name: "Mohito",
          price: 70,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "drinks",
        },
        {
          name: "virgin Mohito",
          price: 90,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "drinks",
        },
        {
          name: "Nimbu Paani",
          price: 70,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "drinks",
        },
        {
          name: "BURGER",
          price: 60,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/burger.png",
          type: "burger",
        },
        {
          name: "BURGER",
          price: 50,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/burger.png",
          type: "burger",
        },
        {
          name: "BURGER",
          price: 23,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/burger.png",
          type: "burger",
        },
        {
          name: "CHICKEN BURGER",
          price: 100,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/burger.png",
          type: "burger non-veg",
        },
        {
          name: "Kitkat Shakes",
          price: 60,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/pancake.png",
          type: "shakes",
        },
        {
          name: "Oreo shakes",
          price: 60,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/pancake.png",
          type: "shakes",
        },
        {
          name: "HazleNut",
          price: 95,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/pancake.png",
          type: "shakes",
        },
        {
          name: "Strawberry shakes",
          price: 45,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/pancake.png",
          type: "shakes",
        },
      ];
    
      res.json(foodData);
    });
    


// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
