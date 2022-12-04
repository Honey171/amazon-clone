import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utilites/firebase';
import { createContext, useState, useEffect, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  signInWithGoogle: async () => {},
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  user: null,
  error: '',
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate('/home');
      } else {
        setUser(null);
        navigate('/signUp');
      }
    });
  }, [auth, user]);

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          setUser(userCredential.user);
          navigate('/home');
          setError('');
        },
      );
    } catch (err) {
      setError(
        'Something went wrong! Might be your email address or password is wrong',
      );
    }
  };

  const signUp = async (email, password, name) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password, name).then(
        (userCredential) => {
          setUser(userCredential.user);
          updateProfile(userCredential.user, {
            displayName: name,
          });
          navigate('/home');
          setError('');
        },
      );
    } catch (err) {
      setError(
        'Something went wrong! Might be someone is using your email address',
      );
    }
  };

  const logout = async () => {
    signOut(auth).then(() => setUser(null));
  };

  const memoedValue = useMemo(
    () => ({ user, logout, signIn, signUp, error }),
    [user, error],
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
