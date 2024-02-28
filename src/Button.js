import {createElement} from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.css";

function Button({type, children}) {
    return createElement(
        "button",
        {className: classNames("super-btn" , {
                "super-btn-primary" : type === "primary",
                "super-btn-default" : type === "default",
                "super-btn-dashed" : type === "dashed",
                "super-btn-text": type === "text",
                "super-btn-link": type === "link"
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