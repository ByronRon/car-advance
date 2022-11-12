export const cars = [
  {
    id: "1",
    brand: "NISSAN",
    model: "SE",
    year: 2012,
    plate: "PVB-5058",
    cc: 2000,
    color: "grey",
    image: "/images/nissan.jpg",
    purchase_date: "20/03/2012",
    purchase_price: 20000,
    sale_date: 0,
    sale_price: 0,
    last_service: "20/03/2021",
  },
  {
    id: "2",
    brand: "KIA",
    model: "Sportage R",
    year: 2015,
    plate: "PCN-8080",
    cc: 2000,
    color: "blue",
    image: "/images/sportage.jpg",
    purchase_date: "20/03/2015",
    purchase_price: 33000,
    sale_date: 0,
    sale_price: 0,
    last_service: "20/03/2021",
  },
];

export const services = [
  {
    id: 1,
    title: "Cambio de aceite",
    desc: "",
  },
  {
    id: 2,
    title: "Cambio filtro de aceite",
    desc: "",
  },
  {
    id: 3,
    title: "Cambio filtro de aire",
    desc: "",
  },
];

export const maintenances = [
  {
    id: 1,
    title: "Mantenimiento 10000 km",
    date: "20/03/2015",
    total_price: 60,
    mileage: 10000,
    notes: "repuestos comprados en el labrador",
    services: [
      { title: "Cambio de aceite", price: 30, notes: "10w30" },
      {
        title: "Cambio filtro de aceite",
        price: 30,
        notes: "repuesto original",
      },
    ],
  },
  {
    id: 2,
    title: "Mantenimiento 20000 km",
    date: "14/03/2016",
    total_price: 30,
    mileage: 20000,
    notes: "repuestos comprados en el labrador",
    services: [
      { title: "Cambio de aceite", price: 30, notes: "10w30" },
      {
        title: "Cambio filtro de aceite",
        price: 30,
        notes: "repuesto original",
      },
    ],
  },
  {
    id: 3,
    title: "Mantenimiento 20000 km",
    date: "14/03/2016",
    total_price: 30,
    mileage: 20000,
    notes: "repuestos comprados en el labrador",
    services: [
      { title: "Cambio de aceite", price: 30, notes: "10w30" },
      {
        title: "Cambio filtro de aceite",
        price: 30,
        notes: "repuesto original",
      },
    ],
  },
  {
    id: 4,
    title: "Mantenimiento 20000 km",
    date: "14/03/2016",
    total_price: 30,
    mileage: 20000,
    notes: "repuestos comprados en el labrador",
    services: [
      { title: "Cambio de aceite", price: 30, notes: "10w30" },
      {
        title: "Cambio filtro de aceite",
        price: 30,
        notes: "repuesto original",
      },
    ],
  },
];
