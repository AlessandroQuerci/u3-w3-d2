export const removeFromFavouriteAction = (value) => {
  return {
    type: "REMOVE_FROM_FAVOURITE",
    payload: value,
  };
};

export const addToFavouriteAction = (value) => {
  return {
    type: "ADD_TO_FAVOURITE",
    payload: value,
  };
};
