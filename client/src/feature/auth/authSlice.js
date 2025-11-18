import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser,
  signUpUser,
  getMe,
  forgotPassword,
  resetPassword,
  confirmEmail,
} from "../../services/apiAuth";

// ---------------------------
// Async Thunks
// ---------------------------

// Login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginUser(credentials);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// Sign Up
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signUpUser(credentials);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// Get current user
export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMe();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// Forgot password
export const forgotPass = createAsyncThunk(
  "auth/forgotPass",
  async (email, { rejectWithValue }) => {
    try {
      const data = await forgotPassword(email);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// Reset password
export const resetPass = createAsyncThunk(
  "auth/resetPass",
  async ({ token, id, newPassword }, { rejectWithValue }) => {
    try {
      const data = await resetPassword(token, id, newPassword);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// Confirm Email
export const confirmEmailToken = createAsyncThunk(
  "auth/confirmEmail",
  async ({ token, id }, { rejectWithValue }) => {
    try {
      const data = await confirmEmail(token, id);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// ---------------------------
// Slice
// ---------------------------
const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  error: null,
  message: null, // for success messages like password reset
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.message = null;
      localStorage.removeItem("token");
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
      })

      // Sign Up
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.message =
          action.payload?.message ||
          "Sign up successful. Check email to confirm.";
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Sign up failed";
      })

      // Load User
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to load user";
      })

      // Forgot Password
      .addCase(forgotPass.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(forgotPass.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload?.message || "Check email for reset link";
      })
      .addCase(forgotPass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Forgot password failed";
      })

      // Reset Password
      .addCase(resetPass.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(resetPass.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload?.message || "Password reset successful";
      })
      .addCase(resetPass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Reset password failed";
      })

      // Confirm Email
      .addCase(confirmEmailToken.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(confirmEmailToken.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload?.message || "Email confirmed";
      })
      .addCase(confirmEmailToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Email confirmation failed";
      });
  },
});

export const { logout, clearError, clearMessage } = authSlice.actions;
export default authSlice.reducer;
