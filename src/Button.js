import {createElement} from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.css";

function Button({type, children}) {
    return createElement(
        "button",
        {className: classNames(styles.superBtn , {
                [styles.superBtnPrimary] : type === "primary",
                [styles.superBtnDefault] : type === "default",
                [styles.superBtnDashed] : type === "dashed",
                [styles.superBtnText] : type === "text",
                [styles.superBtnLink] : type === "link"
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