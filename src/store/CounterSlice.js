export const count = 10;

export const Counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

// export function counting() {
//   return {
//     type: "INCREMENT",
//   };
// }

export const counting=()=>(
    {
        type: "INCREMENT",
    }
)