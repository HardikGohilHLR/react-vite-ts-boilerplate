// Reducer - Common
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { USER_ROLE } from '@core/constants';
import { IUser } from '@core/interfaces';

export type RCommonSlice = {
    common: CommonSliceState
}

export interface CommonSliceState {
    user: IUser;
    isAuthenticated: boolean;
    permissions: string[];
}

const initialState: CommonSliceState = {
    user: {
        firstName: 'Hardik',
        lastName: 'Gohil',
        email: 'hardik.gohil@yopmail.com',
        phoneNumber: 12346568
    },
    isAuthenticated: false,
    permissions: [USER_ROLE.ADMIN]
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            return { ...state, user: action.payload }
        },
    }
});

export const { setUser } = commonSlice?.actions;

export default commonSlice.reducer;