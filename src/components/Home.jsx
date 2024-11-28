import React from "react";
import { IoStorefront } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbCalendarEvent } from "react-icons/tb";
import { RiFocus3Line } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { PiHamburger } from "react-icons/pi";
import { GiChickenOven } from "react-icons/gi";

import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import "../Styles/home.css"
import Leftbar from "./Leftbar"


const Home = () => {
    const orders = [
        {
            customer: 'Wade Warren',
            orderNo: '15478256',
            amount: '$124.00',
            status: 'Delivered',
            profileImage: 'https://i.pravatar.cc/150?img=1',
        },
        {
            customer: 'Jane Cooper',
            orderNo: '48965786',
            amount: '$365.02',
            status: 'Delivered',
            profileImage: 'https://i.pravatar.cc/150?img=2',
        },
        {
            customer: 'Guy Hawkins',
            orderNo: '78958215',
            amount: '$45.88',
            status: 'Cancelled',
            profileImage: 'https://i.pravatar.cc/150?img=3',
        },

    ];
    const feedbacks = [
        {
            user: {
                name: "Wade Warren",
                img: "https://i.pravatar.cc/150?img=1"
            },
            rating: 4.5,
            content: "This product is amazing! I loved it and will definitely recommend it to my friends."
        },
        {
            user: {
                name: "Jane Cooper",
                img: "https://i.pravatar.cc/150?img=2"
            },
            rating: 5,
            content: "Excellent quality and fast shipping! Highly satisfied with my purchase."
        },
        
    ];
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };
    return (
        <>
            <Leftbar />
            <div className="container">
                <h1>Dashboard</h1>
                <div className="cards">
                    <div className="card">
                        <div className="icon" style={{ padding: "2px 7px", color: "#470473", borderRadius: "10px", backgroundColor: "#9d4edd75", margin: "8px 0px" }}>
                            <IoStorefront />
                        </div>
                        <div className="data">
                            <h3>Total Orders</h3>
                            <div className="perc">
                                <h2>75</h2>
                                <span className="change">▲3%</span>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="icon" style={{ padding: "2px 7px", color: "green", borderRadius: "10px", backgroundColor: "#0080005c", margin: "8px 0px" }}>
                            <IoBagHandleOutline />
                        </div>
                        <div className="data">
                            <h3>Total Delivered</h3>
                            <div className="perc">
                                <h2>91</h2>
                                <span className="change">▲8%</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon" style={{ padding: "2px 7px", color: "red", borderRadius: "10px", backgroundColor: "#ff000047", margin: "8px 0px" }}>
                            <IoBagHandleOutline />
                        </div>
                        <div className="data">
                            <h3>Total Cancelled</h3>
                            <div className="perc">
                                <h2>41</h2>
                                <span className="change" style={{ color: "red" }}>▼9%</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon" style={{ padding: "2px 7px", color: "pink", borderRadius: "10px", backgroundColor: "#ffc0cb87", margin: "8px 0px" }}>
                            <TbCalendarEvent />
                        </div>
                        <div className="data">
                            <h3>Total Revenue</h3>
                            <div className="perc">
                                <h2>80</h2>
                                <span className="change">▲3%</span>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: "301px", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                        <div className="data" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
                            <h3>Net Profit</h3>
                            <h2 style={{ fontSize: "18px" }}>$275</h2>
                            <span className="change" style={{ color: "red" }}>▼5%</span>

                        </div>
                        <div className="data">
                            <div className="circle">
                                <span className="percentage" style={{ padding: "15px", fontSize: "12px" }}>100%</span>
                            </div>
                            <h3>Value here has been round off</h3>
                        </div>
                    </div>

                </div>

                <div className="chart-container" >
                    <div className="bar">
                        <Bar data={data} options={options} color="white" />
                    </div>


                    <div className="goals">
                        <div className="goal1">
                            <div className="gp" style={{ padding: "2px 7px", color: "red", borderRadius: "10px", backgroundColor: "#ff000047", margin: "8px 0px" }}><RiFocus3Line /></div>
                            <h5>Goals</h5>
                            <IoIosArrowDroprightCircle />
                        </div>
                        <div className="goal1">
                            <div className="gp" style={{ padding: "2px 7px", color: "blue", borderRadius: "10px", backgroundColor: "#0000ff5e", margin: "8px 0px" }}><PiHamburger /></div>
                            <h5>popular Dishes</h5>
                            <IoIosArrowDroprightCircle />
                        </div>
                        <div className="goal1">
                            <div className="gp" style={{ padding: "2px 7px", color: "#f55347fc", borderRadius: "10px", backgroundColor: "#f553476b", margin: "8px 0px" }}><GiChickenOven /></div>
                            <h5>Goals</h5>
                            <IoIosArrowDroprightCircle />
                        </div>
                    </div>

                </div>

                <div className="chart-container">
                    <div className="bar" style={{ padding: "10px" }}>
                        <div className="recent-orders">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Order No.</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => (
                                        <tr key={index}>
                                            <td>
                                                <img src={order.profileImage} alt={order.customer} className="profile-image" />
                                                {order.customer}
                                            </td>
                                            <td>{order.orderNo}</td>
                                            <td>{order.amount}</td>
                                            <td className={order.status.toLowerCase()} style={{marginTop:"6px"}}>{order.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="goals" id="feed">
                        <div>
                            {feedbacks.map((feedback, index) => (
                                <div className="feedback-container" key={index}>
                                    <div className="feedback-header">
                                        <div className="feedback-user">
                                            <img src={feedback.user.img} alt="User  Profile" />
                                            <h3>{feedback.user.name}</h3>
                                        </div>
                                        <div className="feedback-rating">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className={`fas fa-star${i < feedback.rating ? '' : (i === Math.floor(feedback.rating) ? '-half-alt' : '-empty')}`}></i>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="feedback-content">
                                        <p>{feedback.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Home;
