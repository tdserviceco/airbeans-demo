const HeaderDisplayReducer = (state = false, action) => {
  switch (action.type) {
    case 'DISPLAYMENU':
      return action.display
    default:
      return state;
  }
}

export default HeaderDisplayReducer;