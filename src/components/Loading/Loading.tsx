import React from 'react';
import './Loading.css';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const Loading = () => {
    const { loading } = useSelector((state: RootState) => state.todoList) || [];

    if (!loading) {
        return null;
    }

    return <div className="loading">
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>;
}

export default Loading;
