

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log(`Guest list for ${this.name}`); // If this were an arrow function, this.name would be undefined here (since this is an object method)

        this.guestList.forEach((guest) => console.log(`${guest} is attending ${this.name}`)); // However, this.name is defined here in this arrow function
    },
    /* The function syntax is equivalent to the following:
    printGuestList: function() { blah() },
     */
}

event.printGuestList();