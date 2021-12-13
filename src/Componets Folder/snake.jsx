import React, { Component } from 'react';

// we are going through each dot like a loop in an array
export default (props) => {
    return (
        <div>
            {props.snakeDots.map((dot, i) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return (
                    <div
                     className="snake-dot"
                     key={i}
                     style={style}
                    >
                    </div>
                )
            })}
        </div>
    )
}
