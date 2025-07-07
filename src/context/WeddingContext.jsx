import { createContext, useContext, useReducer } from 'react';

const WeddingContext = createContext();

const initialState = {
  rsvpData: {
    attending: null,
    guestCount: 1,
    dietaryRestrictions: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  },
  theme: {
    darkMode: false
  },
  loading: false,
  error: null
};

function weddingReducer(state, action) {
  switch (action.type) {
    case 'SET_RSVP_DATA':
      return {
        ...state,
        rsvpData: { ...state.rsvpData, ...action.payload }
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: { ...state.theme, darkMode: !state.theme.darkMode }
      };
    case 'RESET_RSVP':
      return {
        ...state,
        rsvpData: initialState.rsvpData
      };
    default:
      return state;
  }
}

export function WeddingProvider({ children }) {
  const [state, dispatch] = useReducer(weddingReducer, initialState);

  const updateRSVP = (data) => {
    dispatch({ type: 'SET_RSVP_DATA', payload: data });
  };

  const setLoading = (loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const resetRSVP = () => {
    dispatch({ type: 'RESET_RSVP' });
  };

  const value = {
    ...state,
    updateRSVP,
    setLoading,
    setError,
    toggleTheme,
    resetRSVP
  };

  return (
    <WeddingContext.Provider value={value}>
      {children}
    </WeddingContext.Provider>
  );
}

export function useWedding() {
  const context = useContext(WeddingContext);
  if (!context) {
    throw new Error('useWedding must be used within a WeddingProvider');
  }
  return context;
}