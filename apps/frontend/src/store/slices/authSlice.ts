import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Role = 'admin' | 'advisor' | 'client';

export interface AuthState {
  tenantId: string;
  actorId: string;
  role: Role;
  tenantName: string;
  actorName: string;
}

const initialState: AuthState = {
  tenantId: 'tenant-001',
  actorId: 'actor-001',
  role: 'admin',
  tenantName: 'Acme Wealth Management',
  actorName: 'System Administrator',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthContext: (state, action: PayloadAction<Partial<AuthState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setAuthContext } = authSlice.actions;
export default authSlice.reducer;

