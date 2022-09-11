import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);

    // withOutCallback
    const validateWithOutCallBack = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallBack]);

    // withCallback
    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallBack]);

    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>WithOutCallBack: {withOutCallBack.current}</p>
            <p>WithCallBack: {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                name="email"
                id="email"
                value={data.email || ""}
                className="form-control"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
