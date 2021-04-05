import React from "react";
import uniqid from "uniqid";

const Preview = (props) => {
    const { intro } = props;

    return (
        <ul>
            {intro.map((candidate_name) => {
                return <li key={uniqid()}>{candidate_name}</li>;
            })}
        </ul>
    );
};

export default Preview;