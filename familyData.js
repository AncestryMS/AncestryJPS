

const family = 

{
  name: "Anna's mother",
  gender: "female",
  image: "images/p1.jpg",
  info: "Born 1940 • Founder of the dynasty",
  spouse: {
    name: "Anna's father",
    gender: "male",
    image: "images/p2.jpg",
    info: "Born 1938 • Military leader"
  },
  children: [
    {
      name: "Maria",
      gender: "female",
      image: "images/p3.jpg",
      info: "Born 1965",
      spouse: {
        name: "Carlos",
        gender: "male",
        image: "images/p4.jpg",
        info: "Architect"
      },
      

      children: [
        {
          name: "Elena",
          gender: "female",
          image: "images/p5.jpg",
          info: "Born 1990",
          children: []
        }
      ]
    },
    {
        name: "John",
        gender: "male",
        image: "images/p6.jpg",
        info: "Born 1970",
        spouse: {
          name: "Sarah",
          gender: "female",
          image: "images/p7.jpg",
          info: "Born 1972"
        }
      }
  ]
};