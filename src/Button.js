import {createElement} from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.css";

function Button({type, children}) {
    return createElement(
        "button",
        {className: classNames("opti-btn" , {
                "opti-btn-primary" : type === "primary",
                "opti-btn-default" : type === "default",
                "opti-btn-dashed" : type === "dashed",
                "opti-btn-text": type === "text",
                "opti-btn-link": type === "link"
            })},
        children
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(["primary", "dashed", "text", "link", "default"]),
    children: PropTypes.node.isRequired,
}

Button.defaultProps = {
    type: "default"
}

export default Button;