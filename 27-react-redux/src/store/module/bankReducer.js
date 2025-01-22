export const depositAction = (money) => {
  return { type: 'bank/DEPOSIT', payload: money };
};

export const withdrawAction = (money) => {
  return {
    type: 'bank/WITHDRAW',
    payload: money,
  };
};

export const bankReducer = (
  state = { balance: 0, isLowZero: false },
  action
) => {
  if (action.type === 'bank/DEPOSIT') {
    return {
      balance: state.balance + Number(action.payload),
      isLowZero: false,
    };
  } else if (action.type === 'bank/WITHDRAW') {
    const balance = state.balance - Number(action.payload);
    if (balance < 0) {
      return { ...state, isLowZero: true };
    }
    return { balance: balance, isLowZero: false };
  }
  return state;
};
