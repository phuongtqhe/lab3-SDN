db.categories.insertMany([
    {
      id: 1,
      name: "Electronics",
      description: "Products related to electronics",
      timestamp: Date.now()
    },
    {
      id: 2,
      name: "Books",
      description: "Products related to books",
      timestamp: Date.now()
    },
    {
      id: 3,
      name: "Clothes",
      description: "Products related to clothes",
      timestamp: Date.now()
    },
    {
      id: 4,
      name: "Sports",
      description: "Products related to sports",
      timestamp: Date.now()
    }
  ])

db.products.insertMany([
    {
      id: 1,
      name: "Laptop",
      price: 500,
      category: 1,
      description: "A portable computer",
      images: [
        { id: 1, url: "laptop1.jpg" },
        { id: 2, url: "laptop2.jpg" }
      ],
      comments: [
        { id: 1, rate: 4, text: "Good laptop", author: "Alice" },
        { id: 2, rate: 3, text: "Average laptop", author: "Bob" }
      ],
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: 2,
      name: "Phone",
      price: 300,
      category: 1,
      description: "A smart phone",
      images: [
        { id: 3, url: "phone1.jpg" },
        { id: 4, url: "phone2.jpg" }
      ],
      comments: [
        { id: 3, rate: 5, text: "Great phone", author: "Charlie" },
        { id: 4, rate: 4, text: "Nice phone", author: "David" }
      ],
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: 3,
      name: "Tablet",
      price: 400,
      category: 1,
      description: "A touch screen device",
      images: [
        { id: 5, url: "tablet1.jpg" },
        { id: 6, url: "tablet2.jpg" }
      ],
      comments: [
        { id: 5, rate: 3, text: "Decent tablet", author: "Eve" },
        { id: 6, rate: 2, text: "Poor tablet", author: "Frank" }
      ],
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: 4,
      name: "Keyboard",
      price: 50,
      category: 1,
      description: "A wireless keyboard",
      images: [
        { id: 7, url: "keyboard1.jpg" },
        { id: 8, url: "keyboard2.jpg" }
      ],
      comments: [
        { id: 7, rate: 4, text: "Good keyboard", author: "Grace" },
        { id: 8, rate: 3, text: "Okay keyboard", author: "Harry" }
      ],
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: 5,
      name: "Mouse",
      price: 20,
      category: 1,
      description: "A wireless mouse",
      images: [
        { id: 9, url: "mouse1.jpg" },
        { id: 10, url: "mouse2.jpg" }
      ],
      comments: [
        { id: 9, rate: 5, text: "Excellent mouse", author: "Ivy" },
        { id: 10, rate: 4, text: "Very good mouse", author: "Jack" }
      ],
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
        id: 6,
        name: "Harry Potter",
        price: 15,
        category: 2,
        description: "A fantasy novel series",
        images: [
          { id: 21, url: "harrypotter1.jpg" },
          { id: 22, url: "harrypotter2.jpg" }
        ],
        comments: [
          { id: 21, rate: 5, text: "Magical book", author: "Ron" },
          { id: 22, rate: 4, text: "Enjoyable book", author: "Hermione" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 7,
        name: "Lord of the Rings",
        price: 20,
        category: 2,
        description: "An epic fantasy novel",
        images: [
          { id: 23, url: "lordoftherings1.jpg" },
          { id: 24, url: "lordoftherings2.jpg" }
        ],
        comments: [
          { id: 23, rate: 5, text: "Amazing book", author: "Frodo" },
          { id: 24, rate: 4, text: "Wonderful book", author: "Sam" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 8,
        name: "Game of Thrones",
        price: 25,
        category: 2,
        description: "A fantasy novel series",
        images: [
          { id: 25, url: "gameofthrones1.jpg" },
          { id: 26, url: "gameofthrones2.jpg" }
        ],
        comments: [
          { id: 25, rate: 4, text: "Thrilling book", author: "Jon" },
          { id: 26, rate: 3, text: "Gory book", author: "Arya" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 9,
        name: "The Hunger Games",
        price: 15,
        category: 2,
        description: "A dystopian novel series",
        images: [
          { id: 27, url: "hungergames1.jpg" },
          { id: 28, url: "hungergames2.jpg" }
        ],
        comments: [
          { id: 27, rate: 4, text: "Exciting book", author: "Katniss" },
          { id: 28, rate: 3, text: "Sad book", author: "Peeta" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 10,
        name: "The Da Vinci Code",
        price: 10,
        category: 2,
        description: "A mystery thriller novel",
        images: [
          { id: 29, url: "davincicode1.jpg" },
          { id: 30, url: "davincicode2.jpg" }
        ],
        comments: [
          { id: 29, rate: 4, text: "Intriguing book", author: "Robert" },
          { id: 30, rate: 3, text: "Controversial book", author: "Sophie" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 11,
        name: "T-shirt",
        price: 10,
        category: 3,
        description: "A casual shirt",
        images: [
          { id: 31, url: "tshirt1.jpg" },
          { id: 32, url: "tshirt2.jpg" }
        ],
        comments: [
          { id: 31, rate: 4, text: "Comfortable shirt", author: "Quinn" },
          { id: 32, rate: 3, text: "Simple shirt", author: "Ryan" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 12,
        name: "Jeans",
        price: 20,
        category: 3,
        description: "A pair of denim pants",
        images: [
          { id: 33, url: "jeans1.jpg" },
          { id: 34, url: "jeans2.jpg" }
        ],
        comments: [
          { id: 33, rate: 4, text: "Good quality jeans", author: "Sara" },
          { id: 34, rate: 3, text: "Okay fit jeans", author: "Tom" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 13,
        name: "Jacket",
        price: 30,
        category: 3,
        description: "A warm jacket",
        images: [
          { id: 35, url: "jacket1.jpg" },
          { id: 36, url: "jacket2.jpg" }
        ],
        comments: [
          { id: 35, rate: 5, text: "Cozy jacket", author: "Uma" },
          { id: 36, rate: 4, text: "Stylish jacket", author: "Victor" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 14,
        name: "Dress",
        price: 25,
        category: 3,
        description: "A beautiful dress",
        images: [
          { id: 37, url: "dress1.jpg" },
          { id: 38, url: "dress2.jpg" }
        ],
        comments: [
          { id: 37, rate: 5, text: "Gorgeous dress", author: "Wendy" },
          { id: 38, rate: 4, text: "Elegant dress", author: "Xavier" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 15,
        name: "Shoes",
        price: 15,
        category: 3,
        description: "A pair of shoes",
        images: [
          { id: 39, url: "shoes1.jpg" },
          { id: 40, url: "shoes2.jpg" }
        ],
        comments: [
          { id: 39, rate: 4, text: "Comfortable shoes", author: "Yara" },
          { id: 40, rate: 3, text: "Nice shoes", author: "Zack" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 16,
        name: "Football",
        price: 15,
        category: 4,
        description: "A spherical ball used in soccer",
        images: [
          { id: 41, url: "football1.jpg" },
          { id: 42, url: "football2.jpg" }
        ],
        comments: [
          { id: 41, rate: 5, text: "Fun ball", author: "Alex" },
          { id: 42, rate: 4, text: "Durable ball", author: "Ben" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 17,
        name: "Basketball",
        price: 20,
        category: 4,
        description: "An orange ball used in basketball",
        images: [
          { id: 43, url: "basketball1.jpg" },
          { id: 44, url: "basketball2.jpg" }
        ],
        comments: [
          { id: 43, rate: 5, text: "Bouncy ball", author: "Cara" },
          { id: 44, rate: 4, text: "Good grip ball", author: "Dan" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 18,
        name: "Tennis Racket",
        price: 25,
        category: 4,
        description: "A racket used in tennis",
        images: [
          { id: 45, url: "tennisracket1.jpg" },
          { id: 46, url: "tennisracket2.jpg" }
        ],
        comments: [
          { id: 45, rate: 4, text: "Lightweight racket", author: "Eva" },
          { id: 46, rate: 3, text: "Okay racket", author: "Finn" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 19,
        name: "Golf Club",
        price: 30,
        category: 4,
        description: "A club used in golf",
        images: [
          { id: 47, url: "golfclub1.jpg" },
          { id: 48, url: "golfclub2.jpg" }
        ],
        comments: [
          { id: 47, rate: 4, text: "Good swing club", author: "Gina" },
          { id: 48, rate: 3, text: "Average club", author: "Hank" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        id: 20,
        name: "Bicycle",
        price: 50,
        category: 4,
        description: "A two-wheeled vehicle",
        images: [
          { id: 49, url: "bicycle1.jpg" },
          { id: 50, url: "bicycle2.jpg" }
        ],
        comments: [
          { id: 49, rate: 5, text: "Fast bicycle", author: "Iris" },
          { id: 50, rate: 4, text: "Smooth bicycle", author: "Jake" }
        ],
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
  ])
  