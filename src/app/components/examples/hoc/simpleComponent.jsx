import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <button onClick={!isAuth ? onLogin : onLogOut}>
            {!isAuth ? "Войти" : "Выйти из системы"}
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogOut: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
};
export default SimpleComponent;
