

// import { useState, useEffect } from 'react';

// const Timer = () => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (count < 300) {
//                 setCount((prevCount) => prevCount + 1);
//             } else {
//                 clearInterval(interval);
//             }
//         }, 5);

//         return () => {
//             clearInterval(interval);
//         };
//     }, [count]);

//     return <div>{count}</div>;
// };

// export default Timer;


import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Timer2 = () => {
    const [count, setCount] = useState(0);
    const [shouldStartCounting, setShouldStartCounting] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const countRef = useRef(count);

    useEffect(() => {
        countRef.current = count;
    }, [count]);

    useEffect(() => {
        if (inView) {
            setShouldStartCounting(true);
        }
    }, [inView]);

    useEffect(() => {
        let intervalId;
        if (shouldStartCounting) {
            intervalId = setInterval(() => {
                if (countRef.current < 300) {
                    setCount((prevCount) => prevCount + 1);
                } else {
                    clearInterval(intervalId);
                }
            }, 10);
        }
        return () => clearInterval(intervalId);
    }, [shouldStartCounting]);

    return (
        <div ref={ref}>
            <div>{count}</div>
        </div>
    );
};

export default Timer2;
