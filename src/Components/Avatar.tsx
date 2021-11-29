import React from "react";

const Avatar = (prop:any) => {
    return(
        <>
        <img src={prop.imageUrl} className="profile" />
        </>
    )
}

export default Avatar