// actions.js
const addData = (payload) => {
  return {
    type: "ADD_DATA",
    payload,
  };
};

const addCategory = (payload) => {
  return {
    type: "ADD_CATEGORY",
    payload,
  };
};

export { addData, addCategory };
