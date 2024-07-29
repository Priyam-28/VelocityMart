/* eslint-disable no-unused-vars */
import { ChatEngine } from 'react-chat-engine';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function ChatModal() {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    const fullName = userInfo ? userInfo.fullName : '';
    const email = userInfo ? userInfo.email : '';

    useEffect(() => {
        const fetchData = async () => {
            if (!userInfo) {
                console.log('User info not found');
                return;
            }

            try {
                const response = await fetch('https://api.chatengine.io/users/me', {
                    method: 'GET',
                    headers: {
                        'Project-ID': 'ef771113-6d28-4e14-8f79-fe772dddeb99',
                        'User-Name': fullName,
                        'User-Secret': email
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const existingUser = await response.json();

                if (!existingUser) {
                    const formData = new FormData();
                    formData.append('email', email);
                    formData.append('username', fullName);
                    formData.append('secret', email);

                    const avatar = await getFile(userInfo.photoURL);
                    formData.append('avatar', avatar, avatar.name);

                    await axios.post('https://api.chatengine.io/users/',
                        formData,
                        { headers: { "private-key": "8d4e4d17-291d-462c-ac7e-93c22a566711" } }
                    );
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [userInfo, fullName, email]);

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' });
    }

    return (
        <ChatEngine
            height="100vh"
            projectID="ef771113-6d28-4e14-8f79-fe772dddeb99"
            userName={fullName}
            userSecret={email}
        />
    );
}

export default ChatModal;
