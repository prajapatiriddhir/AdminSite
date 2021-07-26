import React from 'react';
import "./productlist.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Productrows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductList() {
    const [data,setData] = useState(Productrows);


    
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    console.log("hcasjdya")
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'product', headerName: 'Product', width: 200, renderCell: (parms) => {
        return (
          <div className="productRow">
            <img className="productImg" src={parms.row.img} alt="" />
            {parms.row.name}
          </div>
        )
      }
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productBtn">Edit</button>
            </Link>
            <DeleteOutline className="proDel"  onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    },

  ];


    return (
        <div className="productList">
          <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={6} checkboxSelection
       
       />
        </div>
    )
}

export default ProductList
