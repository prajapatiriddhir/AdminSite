import "./userlist.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { rows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";




const UserList = () => {
  const [data, setData] = useState(rows);

  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    console.log("hcasjdya")
  };



  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'user', headerName: 'User', width: 200, renderCell: (parms) => {
        return (
          <div className="userRow">
            <img className="userImg" src={parms.row.avatar} alt="" />
            {parms.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userBtn">Edit</button>
            </Link>
            <DeleteOutline className="btnDel"  onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    },

  ];



  return (
    <div className="users">
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={6} checkboxSelection
       
      />
    </div>
  )
}


export default UserList;