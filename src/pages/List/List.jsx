import React, { useEffect, useState } from "react";
import "./List.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  });

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={index}>
                <th>
                  <img
                    src={`${url}/images/` + item.image}
                    alt="image"
                    srcset=""
                    className="food-img col-margin"
                  />
                </th>
                <th scope="row">{item.name}</th>
                <td>{item.category}</td>
                <td>${item.price}</td>
                <td className="cross-icon" onClick={() => removeFood(item._id)}>
                  x
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
