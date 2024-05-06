import React from "react";
function Child(props,refs){
    return (
        <div>
            <input type="text" ref={refs} />
        </div>
    )
}
export default React.forwardRef(Child)