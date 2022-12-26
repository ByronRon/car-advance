export const maintenancesColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "date",
    headerName: "Date",
    width: 100,
    renderCell: (params) => {
      return <div>{params.row.date ? params.row.date.substr(0, 10) : ""}</div>;
    },
  },

  {
    field: "total_price",
    headerName: "Price",
    width: 100,
    renderCell: (params) => {
      return (
        <div>
          {params.row.total_price
            ? `$` + params.row.total_price.toFixed(2)
            : "$0.00"}
        </div>
      );
    },
  },
  {
    field: "mileage",
    headerName: "Mileage",
    width: 100,
  },
  {
    field: "notes",
    headerName: "Notes",
    width: 300,
  },
];
