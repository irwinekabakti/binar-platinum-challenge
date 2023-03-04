import React, { useState, useEffect } from "react";
import axios from "axios";
import useTable from "./useTable";
import TableFooter from "./TableFooter";
import classes from "./TableStyle.module.css";

const CarsTable = ({ rowsPerPage }) => {
  const [carsData, setCarsData] = useState([]);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(carsData, page, rowsPerPage);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://bootcamp-rent-cars.herokuapp.com/admin/v2/order",
        {
          headers: {
            access_token: localStorage.getItem("token_Admin"),
          },
        }
      );
      setCarsData(
        response.data.orders.map((order) => {
          const modifyStartRentDate = new Intl.DateTimeFormat("id-ID", {
            dateStyle: "full",
            timeStyle: "long",
            timeZone: "Asia/Jakarta",
          }).format(new Date(order.start_rent_at));
          const modifyFinishRentDate = new Intl.DateTimeFormat("id-ID", {
            dateStyle: "full",
            timeStyle: "long",
            timeZone: "Asia/Jakarta",
          }).format(new Date(order.finish_rent_at));
          return {
            ...order,
            start_rent_at: modifyStartRentDate,
            finish_rent_at: modifyFinishRentDate,
          };
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <table className={classes.tableDataChart}>
        <thead className={classes.tableRowHeaderDataChart}>
          <tr>
            <th className={classes.tableHeaderDataChart}>No</th>
            <th className={classes.tableHeaderDataChart}>User Email</th>
            <th className={classes.tableHeaderDataChart}>Car</th>
            <th className={classes.tableHeaderDataChart}>Start Rent</th>
            <th className={classes.tableHeaderDataChart}>Finish Rent</th>
            <th className={classes.tableHeaderDataChart}>Price</th>
            <th className={classes.tableHeaderDataChart}>Category</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((carData) => (
            <tr className={classes.tableRowItemsDataChart} key={carData.id}>
              <td className={classes.tableCellDataChart}>{carData.id}</td>
              <td className={classes.tableCellDataChart}>
                {carData.User.email}
              </td>
              <td className={classes.tableCellDataChart}>{carData.Car}</td>
              <td className={classes.tableCellDataChart}>
                {carData.start_rent_at}
              </td>
              <td className={classes.tableCellDataChart}>
                {carData.finish_rent_at}
              </td>
              <td className={classes.tableCellDataChart}>
                {carData.total_price}
              </td>
              <td className={classes.tableCellDataChart}>{carData.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default CarsTable;
