import { createSelector } from '@reduxjs/toolkit';

export const getRooms = state => state.order.rooms;
export const getDateOrders = state => state.order.dateOrders;

export const getRoomsWithStatus = createSelector(
    getRooms, getDateOrders, (rooms, orders) => {
        let newRooms;

        if(orders?.length > 0) {
            newRooms = rooms?.map(room => {
                const isRoomOrdered = orders?.find(order => order.roomId === room.id);

                return isRoomOrdered ? { ...room, orderId: isRoomOrdered.id } : room;
            })
        }

    return newRooms ? newRooms : rooms;
}
)