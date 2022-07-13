import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Card from 'components/Card';
import Input from 'components/Elements/Input';
import FieldWrapper from 'components/Elements/FieldWrapper';
import Loader from 'components/Loader';

import * as S from './Login.style';

// Data
import { users } from 'data/users_data';

interface InitialStateProps {
    value: string;
    isErr?: boolean;
    errMsg?: string;
}

const initialState = {
    value: '',
    isError: false,
    errMsg: '',
}

export default function Login() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [username, setUsername] = useState<InitialStateProps>(initialState);
    const [password, setPassword] = useState<InitialStateProps>(initialState);
    const navigate = useNavigate();

    const login = async () => {
        setLoading(true);
        const credentials = {
            username: username.value,
            password: password.value,
        };

        return new Promise((resolve, reject) => setTimeout(() => {
            const selectedUser = users.find(user => user.userName === credentials.username);

            if (selectedUser?.password === credentials.password) {
                return resolve(selectedUser);
            } else {
                return reject(Error('Invalid credentials.'));
            }
        }, 3000))
    };

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        let hasErrors = false;

        if (username.value === '') {
            hasErrors = true;
            setUsername({ ...username, isErr: true, errMsg: 'Please enter your username' });
        }
        if (password.value === '') {
            hasErrors = true;
            setPassword({ ...password, isErr: true, errMsg: 'Please enter your password' });
        }

        if (hasErrors) return;

        try {
            setLoading(false);
            const response: any = await login();

            // Set temp token === branchID
            window.localStorage.setItem('branchId', response.branchId);
            
            // Set to default state
            setUsername(initialState);
            setPassword(initialState);
            navigate('/homepage');
        } catch (err) {
            console.error('Login err...', err);
            setLoading(false);
            setUsername({ ...username, isErr: true, errMsg: '' });
            setPassword({ ...password, isErr: true, errMsg: 'Invalid credentials...' });
        }
    };

    return (
        <S.LoginScreen id="LoginSection">
            <Card withShadow>
                <S.Form onSubmit={onSubmit}>
                    <FieldWrapper>
                        <p>Username</p>
                        <Input
                            fullWidth
                            name="username"
                            type="text"
                            onChange={e => setUsername({ value: e.currentTarget.value, isErr: false })}
                            error={username.isErr}
                            errorMsg={username.errMsg}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <p>Password</p>
                        <Input
                            fullWidth
                            name="password"
                            type="password"
                            onChange={e => setPassword({ value: e.currentTarget.value, isErr: false })}
                            error={password.isErr}
                            errorMsg={password.errMsg}
                        />
                    </FieldWrapper>
                    <S.Cta disabled={isLoading}>
                        Login {isLoading && <Loader />}
                    </S.Cta>
                </S.Form>
            </Card>
        </S.LoginScreen>
    );
}
