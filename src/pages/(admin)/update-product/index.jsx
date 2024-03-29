import React from "react";
import {
  BackDrop,
  Button,
  Image,
  Input,
  InputUpload,
  MetaData,
  Select,
} from "@components/ui";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { FaBarsProgress } from "react-icons/fa6";
import { BiCategoryAlt } from "react-icons/bi";
import { SiProducthunt } from "react-icons/si";
import inputError from "@utils/inputError";
import { FILTERS } from "@constants/index";
import useUpdateProduct from "./hooks/useUpdateProduct";
import AdminLoading from "../components/AdminLoading";
import { FaCarCrash } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import UploadImage from "../components/UploadImage";
const UpdateProduct = () => {
  const {
    formik,
    updateLoading,
    detialLoading,
    handleFileChange,
    images,
    setImages,
  } = useUpdateProduct();
  const { handleSubmit, getFieldProps } = formik;
  if (detialLoading) {
    return <AdminLoading />;
  }

  return (
    <>
      {updateLoading && <BackDrop isOpen={updateLoading} />}

      <MetaData title={"Update Product - Admin"} />
      <section id="updateProduct">
        <div className="form_container pt-0 px-[0px] ">
          <form
            className="form "
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="form_heading">
              <h1>Update Product</h1>
            </div>
            {/* Name Input  */}
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              name="name"
              leftIcon={SiProducthunt}
              {...getFieldProps("name")}
              error={inputError(formik, "name")}
            />

            {/* Input Description */}
            <Input
              label="Description"
              type="text"
              placeholder="Enter your description"
              name="description"
              leftIcon={TbFileDescription}
              {...getFieldProps("description")}
              error={inputError(formik, "description")}
            />

            <div className="flex gap-x-[10px]">
              {/* Input Price */}
              <Input
                label="Price"
                type="number"
                placeholder="Enter your price"
                name="price"
                leftIcon={MdOutlinePriceChange}
                {...getFieldProps("price")}
                error={inputError(formik, "price")}
              />

              {/* Input stock */}
              <Input
                label="Stock"
                type="number"
                placeholder="Enter your stock"
                name="stock"
                leftIcon={FaBarsProgress}
                {...getFieldProps("stock")}
                error={inputError(formik, "stock")}
              />
            </div>

            <Select
              {...getFieldProps("category")}
              error={inputError(formik, "category")}
              leftIcon={BiCategoryAlt}
            >
              <Select.Button>Select Category</Select.Button>
              {FILTERS.Categories.map((item) => (
                <Select.Option key={item} value={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>

            {/* Input InputUpload */}
            <div className="flex gap-1 w-full flex-col-reverse">
              <UploadImage images={images} setImages={setImages} />
              <InputUpload
                name={"Images"}
                label={"Upload Images"}
                multiple
                onChange={handleFileChange}
              />
            </div>
            <Button type="submit" className="max-w-full mt-2">
              Update
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateProduct;
