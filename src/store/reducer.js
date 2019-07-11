const initialState = {
  persons: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.payload.name,
        age: action.payload.age
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case "DELETE_PERSON":
      const updatedArray = state.persons.filter(
        person => person.id !== action.personId
      );
      return {
        persons: updatedArray
      };
  }
  return state;
};

export default reducer;
