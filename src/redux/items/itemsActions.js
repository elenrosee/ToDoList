import { createAction } from "@reduxjs/toolkit";

export const addItem = createAction("addItem");

export const removeItem = createAction("removeItem");

export const changeItem = createAction("patchItem");
