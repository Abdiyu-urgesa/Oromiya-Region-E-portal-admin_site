import React from "react";
import { Avatar, Box, Button, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import { useState } from "react";
import Header from "../../componenets/header/Header";
const AppUsers = (props) => {
  // variable definations
  const [users, setUsers] = useState([]);

  const columns = [
    {
      field: "userId",
      headerName: "user Id",
      type: "number",
      headerAlign: "left",
      align: "left",
    },

    {
      field: "code_name",
      headerName: "User Name",
      cellClassName: "name-column--cell",
    },
    {
      field: "phone_number",
      headerName: "Phone",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "user_type", headerName: "Type" },

    {
      field: "is_active",
      headerName: "Is Active",
    },
    {
      field: "is_verified",
      headerName: "Verified",
      flex: 0.65,
      renderCell: (params) => {
        return (
          <Box display="flex" justifyContent="center" alignItems="center">
            {params.row.is_verified === true && <CheckBoxRoundedIcon />}
            {params.row.is_verified === false && <DangerousOutlinedIcon />}
          </Box>
        );
      },
    },

    { field: "updatedAt", headerName: "Updated At" },
    { field: "createdAt", headerName: "Created At" },
    {
      field: "_id",
      headerName: "Manage",
      flex: 2,
      renderCell: (params) => {
        return (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <Button
              color={params.row.is_active ? "warning" : "secondary"}
              variant="outlined"
            >
              {params.row.is_active ? "Suspend" : "activate"}
            </Button>
            <Button color="error" variant="outlined">
              Delete
            </Button>
            <Button color="success" variant="outlined">
              More
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Users" subtitle="Managing the App Users" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        // sx={{
        //   "& .MuiDataGrid-root": {
        //     border: "none",
        //   },
        //   "& .MuiDataGrid-cell": {
        //     borderBottom: "none",
        //   },
        //   "& .name-column--cell": {
        //     color: colors.greenAccent[300],
        //   },
        //   "& .MuiDataGrid-columnHeaders": {
        //     backgroundColor: colors.blueAccent[700],
        //     borderBottom: "none",
        //   },
        //   "& .MuiDataGrid-virtualScroller": {
        //     backgroundColor: colors.primary[400],
        //   },
        //   "& .MuiDataGrid-footerContainer": {
        //     borderTop: "none",
        //     backgroundColor: colors.blueAccent[700],
        //   },
        //   "& .MuiCheckbox-root": {
        //     color: `${colors.greenAccent[200]} !important`,
        //   },
        //   "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
        //     color: `${colors.grey[100]} !important`,
        //   },
        // }}
      >
        <DataGrid
          rows={users}
          getRowId={(row) => row._id}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default AppUsers;
