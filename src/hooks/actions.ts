import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { favoritesActions } from "../store/testSlice";

const actions = {
  ...favoritesActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};