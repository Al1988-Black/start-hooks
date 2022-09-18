import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();

    const handleClick = () => {
        blockRef.current.children[0].innerText = "text";
        blockRef.current.style.width = "150px";
        blockRef.current.style.height = "80px";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-secondary my-4" onClick={handleClick}>
                Trigger action
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;

// import React, { useRef, useState } from "react";
// import CollapseWrapper from "../common/collapse";
// const UseRefExercise = () => {
//     const [state, setState] = useState(false);
//     const data = useRef({ height: 40, width: 60, content: "Блок" });

//     const handleUpdate = () => {
//         setState((prevState) => !prevState);
//         data.current = state
//             ? { height: 150, width: 80, content: "Text" }
//             : { height: 40, width: 60, content: "Блок" };
//         console.log(data.current, state);
//     };

//     return (
//         <CollapseWrapper title="Упражнение">
//             <p className="mt-3">
//                 У вас есть блок, у которого заданы ширина и высота. Добавьте
//                 кнопку, при нажатии которой изменятся следующие свойства:
//             </p>
//             <ul>
//                 <li>Изменится содержимое блока на &quot;text&quot;</li>
//                 <li>высота и ширина станут равны 150 и 80 соответственно</li>
//             </ul>
//             <div
//                 className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
//                 style={{
//                     height: data.current.height,
//                     width: data.current.width,
//                     color: "white"
//                 }}
//                 onClick={handleUpdate}
//                 role="button"
//             >
//                 <small>{data.current.content}</small>
//             </div>
//         </CollapseWrapper>
//     );
// };

// export default UseRefExercise;
