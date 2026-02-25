"use client";

import { useEffect, useState } from "react";
import { User } from "@/types/auth";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is logged in when the app starts
    const savedUser = localStorage.getItem("user");
    
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user data:", error);
        // Clear corrupted data
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = (userData: User) => {
    try {
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error("Failed to save user data:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { 
    user, 
    login, 
    logout,
    isAuthenticated: user !== null 
  };
};