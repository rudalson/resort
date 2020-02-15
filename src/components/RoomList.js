import React from "react";
import Room from "./Room";

export default function RoomList({rooms}) {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>해당 검색 조건에 맞는 방이 없습니다</h3>
            </div>
        );
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map(item => {
                    return <Room key={item.id} room={item}/>;
                })}
            </div>
        </section>
    );
}
