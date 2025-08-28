
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  type User,
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { useToast } from "./use-toast";

// --- QUAN TRỌNG: Đây là danh sách email admin được mô phỏng ---
const ADMIN_EMAILS = ['admin.vnjobshub@example.com', 'khanhnnvn@gmail.com'];

interface AppUser extends User {
    role?: 'admin' | 'recruiter' | 'user';
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userRef = doc(db, "users", firebaseUser.uid);
        
        // Listen for real-time updates to the user's document
        const unsubSnapshot = onSnapshot(userRef, async (docSnap) => {
            if (docSnap.exists()) {
                const userData = docSnap.data();
                setUser({ ...firebaseUser, role: userData.role });
            } else {
                // Document doesn't exist, create it
                const isUserAdmin = ADMIN_EMAILS.includes(firebaseUser.email ?? '');
                const initialRole = isUserAdmin ? 'admin' : 'user';
                try {
                    await setDoc(userRef, {
                        email: firebaseUser.email,
                        displayName: firebaseUser.displayName,
                        photoURL: firebaseUser.photoURL,
                        role: initialRole
                    });
                    setUser({ ...firebaseUser, role: initialRole });
                } catch (error) {
                    console.error("Error creating user document:", error);
                }
            }
        });

        setLoading(false);
        // Return a function to cleanup the snapshot listener
        return () => unsubSnapshot();

      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast({
        title: "Đăng nhập thành công",
        description: "Chào mừng bạn trở lại!",
      });
    } catch (error) {
      console.error("Lỗi đăng nhập bằng Google:", error);
      toast({
        title: "Đăng nhập thất bại",
        description: "Không thể đăng nhập bằng Google. Vui lòng thử lại.",
        variant: "destructive",
      });
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Đã đăng xuất",
        description: "Bạn đã đăng xuất thành công.",
      });
    } catch (error) {
      console.error("Lỗi đăng xuất:", error);
      toast({
        title: "Đăng xuất thất bại",
        description: "Không thể đăng xuất. Vui lòng thử lại.",
        variant: "destructive",
      });
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signOutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth phải được sử dụng trong một AuthProvider");
  }
  return context;
};
