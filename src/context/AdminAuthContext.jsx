import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AdminAuthContext = createContext();

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}

export function AdminAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      // debug: log auth state changes
      // eslint-disable-next-line no-console
      console.log("onAuthStateChanged -> user:", u);
      setUser(u);

      if (u) {
        try {
          // Check admins collection in Firestore for admin status
          const adminDoc = await getDoc(doc(db, "admins", u.uid));
          // eslint-disable-next-line no-console
          console.log("adminDoc exists:", adminDoc.exists(), "isAdmin:", adminDoc.exists() && adminDoc.data()?.isAdmin === true);
          setIsAdmin(adminDoc.exists() && adminDoc.data()?.isAdmin === true);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error("Error fetching admin doc:", err);
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }

      setLoading(false);
    });

    return () => unsub();
  }, []);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth);

  return (
    <AdminAuthContext.Provider value={{ user, isAdmin, loading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}
