import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import PrivateRoute from 'routes/PrivateRoute';

// Pages
import Login from 'pages/Login';
import Homepage from 'pages/Homepage';

import { GlobalStyle } from 'styles/global-styles';

import * as S from './App.style';

export default function App() {
    return (
        <S.Main>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/homepage"
                    element={
                        <PrivateRoute>
                            <Homepage />
                        </PrivateRoute>
                    }
                />
            </Routes>
            <GlobalStyle />
        </S.Main>
    );
}