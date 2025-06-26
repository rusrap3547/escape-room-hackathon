function addDoorEventListener(doorId) {
    const door = document.getElementById(doorId);

    if (door) {
        door.addEventListener("click", () => {
            door.classList.add("openMyDoor");
        });
    } else {
       // do nothing
    }
}