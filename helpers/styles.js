import classNames from "classnames";
import { object } from "prop-types";
import cssModules from "../config/cssModules";


// For STRINGS
const getModuleClasses = (cssModules, classKey) =>{
    return (cssModules && cssModules[classKey]) || classKey
};

// For OBJECTS
const getObjectClasses = (cssModules, object) => {
    return Object.keys(object).reduce((classes, classKey) => {
        const className = cssModules[classKey]
        return className ? {...classes, [className]: object[classKey] } : classes;
    }, {});
    
};

// For ARRAYS
const geyDynamicClasses = (cssModules, props, classes) => {
    return classes.reduce((classesObject, classKey) => {
        const propValue = props[classKey]
        const className = cssModules[`${classKey}-${propValue}`]

        return className && propValue ? {...classesObject, [className] : propValue } : classesObject;
    }, {}); 
};

export const getClasses = (cssModule) => (props) => (...args) => {
    return classNames(
        args.map((arg) =>{
            if(Array.isArray(arg)) {
                return geyDynamicClasses(cssModule, props, arg)
            } else if (typeof arg === 'string') {
                return getModuleClasses(cssModule, arg)
            } else if (typeof arg === 'object') {
                return getObjectClasses(cssModule, arg)
            }
        })
    )
}