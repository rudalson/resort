import React, {Component} from "react";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "무료 칵테일",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaHiking/>,
                title: "가까운 관광코스",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaShuttleVan/>,
                title: "무료 셔틀",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaBeer/>,
                title: "수제 맥주",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            }
        ]
    };

    render() {
        return (
            <section className={"services"}>
                <Title title={"services"}/>
                <div className={"services-center"}>
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className={"service"}>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
