const desertBox  = require.context('./assets', true)



export const sliderItems = [
    {
      id: 1,
      img: desertBox(`./desert1.png`),
      title: "AUTUMN COLLECTION",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fcf1ed",
    },
    {
      id: 2,
      img: desertBox(`./desert2.png`),
      title: "LOUNGEWEAR LOVE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fbf0f4",
    },
  ];

  export const categories = [
    {
      id: 1,
      img: desertBox(`./desert3.jpeg`),
      title: "CAKES!",
    },
    {
      id: 2,
      img:desertBox(`./desert4.jpeg`),
      title: "BROWNIES",
    },
  ];

  export const popularProducts = [
    {
      id:1,
      img:desertBox(`./desert6.png`),
    },
    
    {
      id:2,
      img:desertBox(`./desert7.png`),
    },
    {
      id:3,
      img:desertBox(`./desert8.png`),
    },
    {
      id:4,
      img:desertBox(`./desert9.png`),
    },
    {
      id:5,
      img:desertBox(`./desert10.png`),
    },
    
    {
      id:6,
      img:desertBox(`./desert11.png`),
    },
    {
      id:7,
      img:desertBox(`./desert12.png`),
    },
    {
      id:8,
      img:desertBox(`./desert13.png`),
    },
  ]