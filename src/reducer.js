export const initialButtonState = {
  env: 'sandbox',
  publicToken: 'sandboxtoken01875617264',
  timeout: 600,
  theme: 'btn',
  lang: 'en',
  total: 1.0,
  tax: 1.0,
  subtotal: 1.0,
  metadata1: null,
  metadata2: null,
  items: [],
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'SUBMIT_FORM':
      return { ...state, showButton: true, buttonSettings: action.payload };
    case 'RESET_FORM':
      return { showButton: false, buttonSettings: initialButtonState };
    default:
      throw new Error();
  }
}
