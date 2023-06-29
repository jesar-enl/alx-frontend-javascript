import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const roomSizes = [19, 20, 34]; // declare the array of sizes
  const rooms = []; // declare the array to contain each element in initial array

  for (const size of roomSizes) {
    const room = new ClassRoom(size); // declare an new ClassRoom object
    rooms.push(room); // push each object in the room[] array
  }

  return rooms; //return the final result
}
