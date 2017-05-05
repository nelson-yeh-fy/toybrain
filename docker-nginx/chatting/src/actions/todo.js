export const addToTodo = (item) => {
  console.log('adding todo:', item);
  return {
      type: 'ADD_TODO',
      item
  };
}