
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
import { auth } from "@/lib/firebase";
import { useToast } from "./use-toast";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      // Optional: If you want the "request submitted" status to clear when a different user logs in
      // you could add logic here to check if the user ID has changed and clear localStorage.
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
      // Note: We are not clearing localStorage here, so the 'request sent' status
      // will persist even after logging out and back in with the same account.
      // This is usually the desired behavior.
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
