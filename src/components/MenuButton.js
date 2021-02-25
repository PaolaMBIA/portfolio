
import React from "react";
import { motion } from "framer-motion";

let __rest = (this && this.__rest) || function (s, e) {
    let t = {};
    for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (let i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

const MenuButton = (_a) => {
    var { isOpen = false, width = 24, height = 24, strokeWidth = 1, color = "#000", transition = null, lineProps = null } = _a, props = __rest(_a, ["isOpen", "width", "height", "strokeWidth", "color", "transition", "lineProps"]);
    const variant = isOpen ? "opened" : "closed";
    const top = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: 45,
            translateY: 2
        }
    };
    const center = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    };
    const bottom = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: -45,
            translateY: -2
        }
    };
    lineProps = Object.assign({ stroke: color, strokeWidth: strokeWidth, vectorEffect: "non-scaling-stroke", initial: "closed", animate: variant, transition }, lineProps);
    const unitHeight = 4;
    const unitWidth = (unitHeight * width) / height;
    return (React.createElement(motion.svg, Object.assign({ viewBox: `0 0 ${unitWidth} ${unitHeight}`, overflow: "visible", preserveAspectRatio: "none", width: width, height: height }, props),
        React.createElement(motion.line, Object.assign({ x1: "0", x2: unitWidth, y1: "0", y2: "0", variants: top }, lineProps)),
        React.createElement(motion.line, Object.assign({ x1: "0", x2: unitWidth, y1: "2", y2: "2", variants: center }, lineProps)),
        React.createElement(motion.line, Object.assign({ x1: "0", x2: unitWidth, y1: "4", y2: "4", variants: bottom }, lineProps))));
};
export { MenuButton };