"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth, googleProvider } from "../utils/firebase";
import { signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null); // Track the user state

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // Handle Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!", { position: "top-center", autoClose: 1000 });
      setTimeout(() => router.push("/"), 1000);
    } catch (error) {
      toast.error("Failed to log in. Please check your credentials.", { position: "top-center", autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in with Google!", { position: "top-center", autoClose: 1000 });
      setTimeout(() => router.push("/"), 1000);
    } catch (error) {
      toast.error("Google login failed. Please try again.", { position: "top-center", autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };

  // Handle Sign Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Signed out successfully!", { position: "top-center", autoClose: 1000 });
      router.push("/");
    } catch (error) {
      toast.error("Failed to sign out. Please try again.", { position: "top-center", autoClose: 2000 });
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar={false} closeOnClick draggable pauseOnHover theme="light" />
      
      {/* If the user is logged in, show Sign Out button */}
      {user ? (
        <div className="text-center">
          <h2 className="mt-10 text-2xl font-bold leading-9 text-gray-900">Welcome, {user.displayName || user.email}!</h2>
          <button
            onClick={handleSignOut}
            className="w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black-500"
            >
            Sign Out
          </button>
        </div>
      ) : (
        // If not logged in, show the login form
        <div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 text-gray-900">Sign in to your account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleEmailLogin} className="space-y-6" method="POST">
             

           
            </form>

            <div className="mt-6">
              <button
                onClick={handleGoogleLogin}
                className="w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black-500"
                disabled={loading}
              >
                {loading ? "Redirecting to Google..." : "Sign in with Google"}
              </button>
            </div>

           
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
