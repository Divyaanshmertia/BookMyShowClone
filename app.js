const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");
const adminRoutes = require("./Routes/adminRoutes");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Connecting Database to API to store data
mongoose
  .connect("mongodb://localhost:27017/BookMyShowClone", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.info("[MongoDB Connected Succesfully]");
  })

  .catch((error) => {
    console.error("There was error while connecting to DATABASE");
  });

app.use(userRoutes);
app.use(adminRoutes);

// For Seats Booking and Invoice

let cinemaSeat = [];
for (let i = 0; i < 10; i++) {
  let SeatChar, SeatPrice;
  if (i === 0) SeatChar = "A";
  else if (i === 1) SeatChar = "B";
  else if (i === 2) SeatChar = "C";
  else if (i === 3) SeatChar = "D";
  else if (i === 4) SeatChar = "E";
  else if (i === 5) SeatChar = "F";
  else if (i === 6) SeatChar = "G";
  else if (i === 7) SeatChar = "H";
  else if (i === 8) SeatChar = "I";
  else if (i === 9) SeatChar = "J";
  if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4) SeatPrice = 190;
  else SeatPrice = 120;
  for (let j = 0; j < 12; j++) {
    cinemaSeat.push({
      seatNumber: SeatChar + (j + 1),
      price: SeatPrice,
      available: true,
      disabilityAccessible: true,
    });
  }
}

app.get("/seatData", (req, res) => {
  res.status(200).json(cinemaSeat);
});

const getSeat = (seatNumber, selectedSeat) =>
  selectedSeat.filter((currentSeat) => currentSeat.seatNumber === seatNumber);

app.post("/bookSeat", (req, res) => {
  let Price = 0;
  const { seats } = req.body;

  cinemaSeat = cinemaSeat.map((currentSeat) => {
    if (getSeat(currentSeat.seatNumber, seats).length) {
      Price = Price + parseFloat(currentSeat.price);
      return getSeat(currentSeat.seatNumber, seats)[0];
    }
    return currentSeat;
  });
  res.status(200).json({ msg: "success" });
});

app.get("/invoice", (req, res) => {
  let Price = 0;
  const TotalSeat = [];
  for (let i = 0; i < cinemaSeat.length; i++) {
    if (cinemaSeat[i].available === false) {
      TotalSeat.push(cinemaSeat[i].seatNumber);
      Price = Price + parseFloat(cinemaSeat[i].price);
    }
  }
  res.status(200).json({
    Seats: TotalSeat,
    totalSeats: TotalSeat.length,
    totalPrice: Price,
  });
});

app.get("*", (req, res) => {
  res.status(200).json({ msg: "hello" });
});

//Port Number for API calling
const PORT = 9160;
app.listen(PORT, () => {
  console.log(`Connection Established with port number: ${PORT}`);
});
