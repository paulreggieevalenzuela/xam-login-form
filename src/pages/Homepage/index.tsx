/**
 * Notes:
 * 
 * The Table can be reusable
 * The adding of new UserForm can also be separated then adding context/redux to get the set/get new data
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Elements/Input';
import FieldWrapper from 'components/Elements/FieldWrapper';

import * as LoginStyle from '../Login/Login.style';
import * as S from './Homepage.style';

// Data
import { users } from 'data/users_data';

const initialFormData = {
    branchId: 0,
    userName: '',
    password: '',
    firstName: '',
    middleName: '',
    lastName: '',
    position: ''
};

export default function Homepage() {
    const navigate = useNavigate();
    const [listOfUsers, setListofUsers] = useState<any>(users);
    const [isAddingNewUser, setAddingNewUser] = useState<boolean>(false);
    const [formData, setFormData] = useState<any>(initialFormData);
    const token = window.localStorage.getItem('branchId');
    const selectedUser: any = users.find((user: any) => user.branchId.toString() === token);

    const TableKeys = Object.keys(users[0]);

    const onLogout = () => {
        window.localStorage.removeItem('branchId');
        navigate('/');
    };

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        // can improve more validation for each field such as empty and unique values

        setListofUsers([ ...listOfUsers, formData ]);

        // Reset fields
        setFormData(initialFormData);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <S.Homepage id="HomepageScreen">
            <S.Header>
                <S.CurrentUser>
                    <img src="https://place-hold.it/40" alt="Current User" />
                    <S.CurrentUserInfo>
                        <p>{selectedUser.userName}</p>
                        <span>{selectedUser.position}</span>
                    </S.CurrentUserInfo>
                </S.CurrentUser>
                <LoginStyle.CtaContainer margin="0">
                    {!isAddingNewUser && (
                        <LoginStyle.Cta
                            isSecondary
                            onClick={() => setAddingNewUser(!isAddingNewUser)}
                        >
                            Add new user
                        </LoginStyle.Cta>
                    )}
                    <LoginStyle.Cta isOutline onClick={onLogout}>
                        Logout
                    </LoginStyle.Cta>
                </LoginStyle.CtaContainer>
            </S.Header>
            {isAddingNewUser && (
                <LoginStyle.Form onSubmit={onSubmit}>
                    <h6>Add New User</h6>
                    <S.ColumnField>
                        <FieldWrapper className="field-container">
                            <p>Branch ID: </p>
                            <Input
                                fullWidth
                                name="branchId"
                                type="number"
                                value={formData.branchId}
                                onChange={onChange}
                            />
                        </FieldWrapper>
                        <FieldWrapper className="field-container">
                            <p>Position:</p>
                            <Input
                                fullWidth
                                name="position"
                                type="text"
                                value={formData.position}
                                onChange={onChange}
                            />
                        </FieldWrapper>
                    </S.ColumnField>
                    <S.ColumnField>
                        <FieldWrapper className="field-container">
                            <p>Username: </p>
                            <Input
                                fullWidth
                                name="userName"
                                type="text"
                                value={formData.userName}
                                onChange={onChange}
                            />
                        </FieldWrapper>
                        <FieldWrapper className="field-container">
                            <p>Password:</p>
                            <Input
                                fullWidth
                                name="password"
                                type="text"
                                value={formData.password}
                                onChange={onChange}
                            />
                        </FieldWrapper>
                    </S.ColumnField>
                    <S.ColumnField>
                        <FieldWrapper className="field-container">
                            <p>First Name:</p>
                            <Input
                                fullWidth
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={onChange}
                            />
                        </FieldWrapper>
                        <FieldWrapper className="field-container">
                            <p>Last Name:</p>
                            <Input
                                fullWidth
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={onChange}
                            />
                        </FieldWrapper>
                        <FieldWrapper className="field-container">
                            <p>Middle Name:</p>
                            <Input
                                fullWidth
                                name="middleName"
                                type="text"
                                value={formData.middleName}
                                onChange={onChange}
                            />
                        </FieldWrapper>
                    </S.ColumnField>
                    <LoginStyle.CtaContainer>
                        <LoginStyle.Cta>
                            Submit
                        </LoginStyle.Cta>
                        <LoginStyle.Cta
                            isSecondary
                            onClick={() => setFormData(initialFormData)}
                        >
                            Reset
                        </LoginStyle.Cta>
                        <LoginStyle.Cta isOutline onClick={() => setAddingNewUser(false)}>
                            Cancel
                    </LoginStyle.Cta>
                    </LoginStyle.CtaContainer>
                </LoginStyle.Form>
            )}
            <S.HomepageContent>
                <S.Table>
                    <S.TableHeader>
                        {TableKeys.map(header =>
                            <S.TableHeaderItem key={header}>
                                {header}
                            </S.TableHeaderItem>
                        )}
                    </S.TableHeader>
                    <S.TableBody>
                        {listOfUsers.map((user, i) =>
                            <S.TableBodyItems key={i}>
                                {TableKeys.map(key =>
                                    <div key={key}>{user[key]}</div>
                                )}
                            </S.TableBodyItems>
                        )}
                    </S.TableBody>
                </S.Table>
            </S.HomepageContent>
        </S.Homepage>
    )
}