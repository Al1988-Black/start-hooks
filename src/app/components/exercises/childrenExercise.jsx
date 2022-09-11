import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const BlockComponents = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        const config = {
            ...child.props,
            id: index
        };
        return <li>{React.cloneElement(child, config)}</li>;
    });
};

BlockComponents.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ol>
                <BlockComponents>
                    <Component />
                    <Component />
                    <Component />
                </BlockComponents>
            </ol>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
