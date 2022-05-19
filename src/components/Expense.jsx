import React from "react";

import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteExpense,
  startEditMode,
} from "../redux/features/expenses/expenseSlice";

function Expense({ title, detail, amount, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteExpense(id));
  };
  const handleEdit = () => {
    dispatch(startEditMode({ title, detail, amount, id }));
  };

  return (
    <div className="expense flex flow-row justify-between bg-white px-5 py-3 rounded shadow-lg mb-1 cursor-pointer hover:bg-white/80 ">
      <div className="text-lg font-semibold flex items-center">{title}</div>
      <div className="flex flex-row items-center justify-center">
        <div className="text-xl font-bold text-red-500 mr-5">$ {amount}</div>
        <div
          className="text-xl hover:text-red-500 hover:text-2xl mr-2 "
          onClick={handleDelete}
        >
          <BsTrash />
        </div>
        <div
          className="text-xl hover:text-green-500 hover:text-2xl "
          onClick={handleEdit}
        >
          <AiOutlineEdit />
        </div>
      </div>
    </div>
  );
}

export default Expense;
