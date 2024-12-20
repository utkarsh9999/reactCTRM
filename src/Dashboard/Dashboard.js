import React from "react";
import {Navbar} from "./components/Navbar";
import {Sidebar} from "./components/Sidebar";

export const Dashboard=()=>{
    return(
        <>
            <Navbar/>
            <div style={{ marginTop: 54, height: 70 }}>
                <Sidebar/>
                 <div id="content"></div>
            </div>

        </>
    )
}