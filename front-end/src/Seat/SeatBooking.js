import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Legenda } from "./legenda";
import { TableHeader } from "./tableHeader";
// seats
const SeatBooking = ({ history }) => {
  const [selectingSeats, setSelectingSeats] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user == null) {
      return history.push("/login");
    } else {
      history.push(`/movieseat/seatBooking`);
    }

    axios.get("http://localhost:9160/seatData").then((res) => {
      setSelectingSeats(
        res.data.map((currentSeat) => {
          currentSeat.disabled = false;
          if (!currentSeat.available) {
            currentSeat.disabled = true;
          }
          return currentSeat;
        })
      );
    });
  }, []);

  const choiceSeat = (seatNumber) => {
    const newBookedSeats = [...selectingSeats].map((currentSeat) => {
      if (currentSeat.seatNumber === seatNumber) {
        return { ...currentSeat, available: !currentSeat.available };
      }
      return currentSeat;
    });
    setSelectingSeats(newBookedSeats);
  };

  const getSeatObject = (seatNumber) => {
    if (selectingSeats.length > 0) {
      return selectingSeats.filter(
        (thisSeat) => thisSeat.seatNumber === seatNumber
      )[0];
    }
  };
  const selectSeats = () => {
    const selected = selectingSeats.filter(
      (currentSeat) => currentSeat.available === false
    );
    if (selected.length !== 0) {
      axios
        .post("http://localhost:9160/bookSeat", { seats: selected })
        .then((res) => {
          if (res.status === 200) {
            history.push("/invoice");
          } else {
            // TODO MANAGE ERROR
          }
        });
    } else {
      alert("Please Select Seats");
    }
  };

  const seatsColumns = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const seatsRows = ["A", "B", "C", "D", "E", "", "F", "G", "H", "I", "J"];
  const seatsGenerator = () => {
    return (
      <table id="seatsBlock">
        <tbody>
          <TableHeader seatsColumns={seatsColumns} />
          {seatsRows.map((row, index) =>
            row === "" ? (
              <tr key={index} className="seatVGap" />
            ) : (
              <tr key={index}>
                <td>{row}</td>
                {seatsColumns.map((column, index) => {
                  return column === "" ? (
                    <td key={index} className="seatGap" />
                  ) : (
                    <td key={index}>
                      <input
                        onClick={() => choiceSeat(`${row}${column}`)}
                        type="checkbox"
                        className="seats"
                        id={`${row}${column}`}
                        value={`${row}${column}`}
                        disabled={
                          getSeatObject(`${row}${column}`)
                            ? getSeatObject(`${row}${column}`).disabled
                            : false
                        }
                      />
                    </td>
                  );
                })}
              </tr>
            )
          )}
        </tbody>
      </table>
    );
  };
  return (
    <div style={{ backgroundColor: "rgb(14 13 26 / 99%)" }}>
      <div>
        <h1 className="h1">Movie Seat Selection</h1>
        <div className="container">
          <div className="w3ls-reg" style={{ paddingTop: "0px" }}>
            <Legenda />
            <div
              className="seatStructure txt-center"
              style={{ overflowX: "auto" }}
            >
              {seatsGenerator()}
              <div className="screen">
                <h2 className="wthree">Screen this way</h2>
              </div>
              <button
                className="button1"
                onClick={() => {
                  selectSeats();
                }}
              >
                Confirm Selection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
