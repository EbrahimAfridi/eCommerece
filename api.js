import express from 'express';
import Joi from 'joi';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cors({
  origin: 'https://ebrahimafridi.github.io/sneakearthAPI'
}));


// Array to store the sneaker data
const sneakers = [
    {
      id: 1,
      name: "Air Jordan 1 Mid",
      price: 120,
      description: "A classic basketball shoe that's perfect for everyday wear.",
      sizes: ["UK6", "UL7", "UK8", "UK9", "UK10"],
      image: "https://i.imgur.com/8PR8ZN3.jpg",
    },
    {
      id: 2,
      name: "W BLAZER LOW '77 JUMBO 'SUMMIT'",
      price: 150,
      description: "They say, Don't fix what works. We say, Perfect it. This streetwear superstar gets revamped with jumbo-sized details. Harnessing the old-school look you love, the Nike Blazer Low '77 Jumbo features an oversized Swoosh design, extra-wide laces and thicker stitching. Jumbo laces are much easier to tie and add a bold look to any outfit.Capturing the essence of the classic Blazer, the stitched leather overlays and soft suede accent on the toe add heritage hoops style.",
      sizes: ["UK6", "UL7", "UK8", "UK9", "UK10"],
      image: "https://i.imgur.com/oRlV1nD.jpg",
    },
    {
      id: 3,
      name: "Adidas Superstar",
      price: 100,
      description: "A classic sneaker that's been popular for decades.",
      sizes: ["UK6", "UL7", "UK8", "UK9", "UK10"],
      image: "https://i.imgur.com/enFvY6d.jpg",
    },
    {
      id: 4,
      name: "Vans Old Skool",
      price: 80,
      description: "A versatile sneaker that can be dressed up or down.",
      sizes: ["UK6", "UL7", "UK8", "UK9", "UK10"],
      image: "https://i.imgur.com/gn2Jr1U.jpg",
    },
    {
      id: 5,
      name: "Converse Chuck Taylor All Star",
      price: 60,
      description: "A classic sneaker that's been popular for over 100 years.",
      sizes: ["UK6", "UL7", "UK8", "UK9", "UK10"],
      image: "https://i.imgur.com/NarqHRW.jpg",
    },
    {
      id: 6,
      name: "New Balance 574",
      price: 110,
      description: "A comfortable and stylish running shoe that's perfect for everyday use.",
      sizes: ["UK6", "UL7", "UK8", "UK9", "UK10"],
      image: "https://i.imgur.com/5m4Mu2u.jpeg",
    },
    {
      id: 7,
      name: "Puma Suede Classic",
      price: 90,
      description: "A classic sneaker that's been popular for decades.",
      sizes: ["UK6", "UL7", "UK8", "UK9", "UK10"], 
      image: "https://i.imgur.com/USnpjCD.jpg",
    },
    {
      id: 8,
      name: "Asics Gel-Lyte III",
      price: 130,
      description: "A comfortable and stylish running shoe that's perfect for everyday use.",
      sizes: ["UK6", "UL7", "UK8", "UK9", "UK10"],
      image: "https://i.imgur.com/VN3CRKB.jpg ",
    },
    {
      id: 9,
      name: "On Cloud X",
      price: 160,
      description: "A lightweight and responsive running shoe that's perfect for speedwork.",
      sizes: ["UK6", "UL7", "UK8", "UK9", "UK10"],  
      image: "https://i.imgur.com/9AcUfuA.jpg", 
    },
    {
      id: 10,
      name: "Brooks Ghost 14",
      price: 140,
      description: "A cushioned and supportive running shoe that's perfect for long runs.",
      sizes: ["UK6", "UL7", "UK8", "UK9", "UK10"],   
      image: "https://i.imgur.com/l9oeWaB.jpg" ,
    },
    {
      id: 11,
      name: "Brooks Ghost 14",
      price: 140,
      description: "A cushioned and supportive running shoe that's perfect for long runs.",
      sizes: ["UK6", "UL7", "UK8", "UK9", "UK10"],   
      image: "https://i.imgur.com/29uC8Vw.jpg" ,
    },
  ];

  
// Define the Joi schema for validating sneaker data
const sneakerSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().positive().required(),
    sizes: Joi.array().items(Joi.string()).required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
});

// Endpoint to get all sneakers
app.get('/api/sneakers', (req, res) => {
    res.send(sneakers);
});

// Endpoint to get a single sneaker by ID
app.get('/api/sneakers/:id', (req, res) => {
    const { id } = req.params;
    const sneaker = sneakers.find(s => s.id === parseInt(id));

    if (!sneaker) {
        return res.status(404).send('Sneaker not found');
    }
    
    const { sizes, ...sneakerData } = sneaker; // Destructure sizes from sneaker object

    const response = {
        ...sneakerData,
        sizes: sizes
    };

    res.send(response);
});

// Endpoint to add a new sneaker
app.post('/api/sneakers', (req, res) => {
    const { error } = sneakerSchema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const newSneaker = {
        id: sneakers.length + 1,
        name: req.body.name,
        price: req.body.price,
        sizes: req.body.sizes,
        description: req.body.description,
        image: req.body.image,
    };

    sneakers.push(newSneaker);
    res.send(newSneaker);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
