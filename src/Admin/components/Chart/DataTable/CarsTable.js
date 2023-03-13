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
      const selectedOrderedCar = response.data;
      console.log(selectedOrderedCar);
      setCarsData(
        selectedOrderedCar.orders.map((order) => {
          const conversionStartRentDate = new Intl.DateTimeFormat("id-ID", {
            dateStyle: "full",
            timeStyle: "long",
            timeZone: "Asia/Jakarta",
          }).format(new Date(order.start_rent_at));
          const conversionFinishRentDate = new Intl.DateTimeFormat("id-ID", {
            dateStyle: "full",
            timeStyle: "long",
            timeZone: "Asia/Jakarta",
          }).format(new Date(order.finish_rent_at));
          return {
            ...order,
            start_rent_at: conversionStartRentDate,
            finish_rent_at: conversionFinishRentDate,
          };
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };

  console.log(carsData);

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
            {/* <th className={classes.tableHeaderDataChart}>Car</th> */}
            <th className={classes.tableHeaderDataChart}>Car ID</th>
            <th className={classes.tableHeaderDataChart}>Start Rent</th>
            <th className={classes.tableHeaderDataChart}>Finish Rent</th>
            <th className={classes.tableHeaderDataChart}>Price</th>
            {/* <th className={classes.tableHeaderDataChart}>Category</th> */}
            <th className={classes.tableHeaderDataChart}>User ID</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((carsData) => (
            <tr className={classes.tableRowItemsDataChart} key={carsData.id}>
              <td className={classes.tableCellDataChart}>{carsData.id}</td>
              <td className={classes.tableCellDataChart}>
                {carsData.User.email}
              </td>
              <td className={classes.tableCellDataChart}>{carsData.CarId}</td>
              <td className={classes.tableCellDataChart}>
                {carsData.start_rent_at}
              </td>
              <td className={classes.tableCellDataChart}>
                {carsData.finish_rent_at}
              </td>
              <td className={classes.tableCellDataChart}>
                Rp {carsData.total_price.toLocaleString("id-ID")}
              </td>
              <td className={classes.tableCellDataChart}>{carsData.UserId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default CarsTable;
