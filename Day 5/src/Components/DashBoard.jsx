import React, { useEffect, useState } from "react";
import '../Asserts/Css/DashBoard.css';
import { useNavigate } from "react-router-dom";
import { logout } from "./Redux/UserSlice";
import { useDispatch } from "react-redux";
import { selectUser } from "./Redux/UserSlice";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Panel=()=>{
    const nav = useNavigate();
    const user = useSelector(selectUser);
    const [id, setId] = useState('');
    useEffect(()=>{
        if(user){
            setId(user.name);
        }else{
            if(!id){
                setId("Guest");
            }
        }
    
    },[user,id]);
    const dispatch = useDispatch();
    const handleLogout=()=>{
        dispatch(logout()); 
        nav('/login');       
    }

    return(
        <div className="dash-body">
        <div className="app">
            <div className="sidebar">
                 <ul>
                    <li>Dashboard</li>
                    <li>Menu</li>
                    <li>Track</li>
                 </ul>
            </div>
            <div className="content">
            <div className="navbar">
                    <div className="logo">Dashboard </div>
                    <div className="logout" onClick={handleLogout}>Logout</div>
            </div>
            <h1>Welcome {id}</h1>
            <h2>DashBoard</h2>
             <div className="main-content">
                <div className="grid">
                    <h2>Orders Taken:</h2>
                    <p>200</p>
                </div>
                <div className="grid">
                    <h2>Customers:</h2>
                   <p>132</p>
                </div>
                <div className="grid">
                    <h2>Tokens:</h2>
                    <p>230</p>
                </div>
                <div className="grid">
                    <h2>Sales:INR</h2>
                   <p>34000</p>
                 </div>
            </div>
            <div className="rem-grid">
                <h1>Categories</h1>
                    <table>
                         <tr>
                             <th>Cuisine</th>
                             <th>No. of Orders</th>
                                 <th>Sales INR</th>
                         </tr>
                         <tr>
                            <td>South Indian</td>
                            <td>450</td>
                            <td>1500</td>
                         </tr>
                        <tr>
                            <td>North Indian</td>
                            <td>340</td>
                            <td>3090</td>
                        </tr>
                        <tr>
                            <td>Chinese</td>
                            <td>528</td>
                            <td>2300</td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
        </div>
    );
}
export default Panel;