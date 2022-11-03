
export const reducer = (state, action) => {
  switch (action.type) {
    case "setValue":
      return { count: action.payload };
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return {
        count: state.count !== 0 ? state.count - 1 : (state.count = 0),
      };
    case "reset":
      return { count: (state.count = 0) };
    default:
      throw new Error("Error: Invalid");
  }
};
