export const carColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "brand",
    headerName: "Brand",
    width: 230,
  },
  {
    field: "model",
    headerName: "Model",
    width: 230,
  },

  {
    field: "plate",
    headerName: "Plate",
    width: 100,
  },
  {
    field: "year",
    headerName: "Year",
    width: 100,
  },
  {
    field: "color",
    headerName: "Color",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.color}`}>
          {params.row.color}
        </div>
      );
    },
  },
];
