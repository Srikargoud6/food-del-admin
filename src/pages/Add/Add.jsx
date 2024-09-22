import React, { useEffect, useState } from "react";
import "./Add.css";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/admin_assets/assets";
import { assets } from "../../assets/admin_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        category: "Salad",
        price: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="add-page">
      <form className="d-flex flex-column gap-2" onSubmit={onSubmitHandler}>
        <div className="d-flex flex-column">
          <p>Upload image</p>
          <label htmlFor="upload">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload"
              className="upload-img"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name="upload"
            id="upload"
            required
          />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="name">Product name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="type here"
            value={data.name}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="d-flex flex-column desc">
          <label htmlFor="description">Product description</label>
          <textarea
            name="description"
            id="description"
            placeholder="write content here"
            rows={5}
            value={data.description}
            onChange={onChangeHandler}
            required
          />
        </div>
        <section className="d-flex gap-4">
          <div className="d-flex flex-column">
            <label htmlFor="category">Product category</label>
            <select
              name="category"
              id="category"
              value={data.category}
              onChange={onChangeHandler}
              required
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="price">Product price</label>
            <input
              type="text"
              name="price"
              id="price"
              value={data.price}
              onChange={onChangeHandler}
              required
            />
          </div>
        </section>
        <div>
          <button className="btn btn-dark">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
