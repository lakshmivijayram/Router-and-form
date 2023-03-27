import React, { Component } from 'react';
import {Link,Outlet} from 'react-router-dom'

class Details extends Component{
    render(){
        return(
            <>
            
            <div className="detailsforms">
            <h1>Details Form</h1>
            <Link to='/details/content1' className="detailsstyle">Content1</Link>
            <Link to='/details/content2' className="detailsstyle">Content2</Link>
            <Link to='/details/content3' className="detailsstyle">Content3</Link>
            </div>
            <Outlet/>
            </>
        )
    }
} 
export default Details;