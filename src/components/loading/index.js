import React from 'react';

const Loading = () => {
    return (
        <div className='c-loading'>
            <div className='c-loading_inner'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ margin: "auto"}}
                    width="200"
                    height="200"
                    display="block"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 100 100"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="32"
                        fill="none"
                        stroke="#fe718d"
                        strokeDasharray="50.26548245743669 50.26548245743669"
                        strokeLinecap="round"
                        strokeWidth="8"
                    >
                        <animateTransform
                            attributeName="transform"
                            dur="1s"
                            keyTimes="0;1"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 50 50;360 50 50"
                        ></animateTransform>
                    </circle>
                </svg>
            </div>
        </div>
    );
};

export default Loading;