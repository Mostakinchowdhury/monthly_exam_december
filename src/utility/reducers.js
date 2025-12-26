export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: Math.max(0, state.count - 1) };
    case 'incrementBy5':
      return { count: state.count + 5 };
    case 'reset':
      return { count: (state.count = 0) };
    default:
      return state;
  }
};
