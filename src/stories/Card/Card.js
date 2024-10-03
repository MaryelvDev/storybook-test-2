import React from "react"
import PropTypes from "prop-types"
import { options } from "./constants"
import styles from "./Card.module.css"
import classNames from "classnames"
import { getClasses } from "../../../helpers/styles"

export const Card = ({
    children = "I'm card",
    color = "primary",
    size = "sm",
    isClickable,
    isDragable,
}) => {
    const getStyles = getClasses(styles)({
        color,
        size
    })

    /* getStyles("card", ["color", "size"], {
        "is-clickable": isClickable,
        "is-dragable": isDragable,
    })*/

    return <div className={getStyles("card", ["color", "size"], {
        "is-clickable": isClickable,
        "is-dragable": isDragable,
    })}>
        {children}
    </div>
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes),
    isClickable: PropTypes.bool,
    isDragable: PropTypes.bool
}

export default Card