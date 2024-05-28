export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("seats");
    if (serializedState === null) {
      return undefined;
    }
    console.log("serialized state :", serializedState)
    console.log("daf : ", JSON.parse(serializedState))

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("seats", serializedState);
  } catch (err) {}
};
