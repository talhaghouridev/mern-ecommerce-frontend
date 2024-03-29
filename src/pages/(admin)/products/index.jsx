import React, { memo, useCallback, useMemo } from "react";
import { MetaData } from "@components/ui";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import useFetchProducts from "./hooks/useFetchProducts";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useDeleteProduct from "./hooks/useDeleteProduct";
import TableLoading from "../../../components/TableLoading";

const ActionButton = memo(({ id }) => {
  const editLink = `/admin/product/${id}`;
  const { deleteProduct, isLoading } = useDeleteProduct();
  const handelDeleteProduct = useCallback(
    (productId) => {
      deleteProduct(productId);
    },
    [deleteProduct]
  );
  return (
    <div className="flex items-center justify-center gap-[10px] md:gap-[15px] text-[#222935] text-[22px]">
      <Link to={editLink}>
        <FaEdit />
      </Link>
      <button onClick={() => handelDeleteProduct(id)} disabled={isLoading}>
        <MdDelete cursor={"pointer"} />
      </button>
    </div>
  );
});

const AdminProducts = () => {
  const { products, isLoading } = useFetchProducts();
  const columns = [
    { field: "id", headerName: "Product Id", type: "number" },
    {
      field: "name",
      headerName: "Name",
      type: "number",
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      cellClassName: (params) => {
        return params.id === 3
          ? "order_status_pending"
          : "order_status_delivered";
      },
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
    },
    {
      field: "action",
      headerName: "Action",
      type: "number",
      disableRowSelectionOnClick: true,
      disableReorder: true,
      disableColumnMenu: true,
      sortable: false,
      renderCell: useCallback((params) => <ActionButton id={params.id} />, []),
    },
  ];

  const rows = useMemo(() => {
    if (!products) return [];
    return products?.map((item) => ({
      id: item?._id,
      name: item?.name,
      stock: item?.stock,
      price: item?.price,
    }));
  }, [products]);

  return (
    <>
      <MetaData title={`All Products - Admin`} />
      <section id="adminProducts">
        <div className="adminProducts_container">
          <h1 className="admin_heading">ALl Products</h1>
          {isLoading ? (
            <TableLoading />
          ) : (
            <div className="adminProducts_box">
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 8,
                    },
                  },
                }}
                pageSizeOptions={[8]}
                disableRowSelectionOnClick
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AdminProducts;
