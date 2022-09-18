import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";

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
            <Divider />
            <SmallTitle>Решение</SmallTitle>

            <ComponentsList>
                <Component />
                <Component />
                <Component />
            </ComponentsList>
        </CollapseWrapper>
    );
};
const ComponentsList = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);
    console.log(arrayOfChildren);
    return React.Children.map(arrayOfChildren, (child) =>
        React.cloneElement(child, {
            ...child.props,
            num: +child.key.replace(".", "") + 1
        })
    );
};
ComponentsList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const Component = ({ num }) => {
    console.log(num);
    return <div>{num} Компонент списка</div>;
};
Component.propTypes = {
    num: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
export default ChildrenExercise;

// import React from "react";
// import CollapseWrapper from "../common/collapse";
// import PropTypes from "prop-types";

// // const BlockComponents = ({ children }) => {
// //     return React.Children.map(children, (child, index) => {
// //         const config = {
// //             ...child.props,
// //             id: index
// //         };
// //         return <li>{React.cloneElement(child, config)}</li>;
// //     });
// // };

// class BlockComponents extends React.Component {
//     render() {
//         const children = React.Children.toArray(this.props.children);
//         console.log(children);
//         return children.map((child) => {
//             return <li key={child.key}>{child}</li>;
//         });
//     }
// }

// console.log(BlockComponents);

// BlockComponents.propTypes = {
//     children: PropTypes.oneOfType([
//         PropTypes.arrayOf(PropTypes.node),
//         PropTypes.node
//     ])
// };
// const ChildrenExercise = () => {
//     return (
//         <CollapseWrapper title="Упражнение">
//             <p className="mt-3">
//                 У вас есть компоненты Списка. Вам необходимо к каждому из них
//                 добавить порядковый номер, относительно того, как они
//                 располагаются на странице. Вы можете использовать как{" "}
//                 <code>React.Children.map</code> так и{" "}
//                 <code>React.Children.toArray</code>
//             </p>
//             <ol>
//                 <BlockComponents>
//                     <Component />
//                     <Component />
//                     <Component />
//                 </BlockComponents>
//             </ol>
//         </CollapseWrapper>
//     );
// };

// const Component = () => {
//     return <div>Компонент списка</div>;
// };

// export default ChildrenExercise;
