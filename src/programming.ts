{
    // Task 1: Array filtering and mapping

    interface TPerson {
        name: string;
        age: number;
        gender: string;
    }

    const people: TPerson[] = [
        {
            name: "Rupkotha",
            age: 28,
            gender: "Female"
        },
        {
            name: "Asif",
            age: 34,
            gender: "Male"
        },
        {
            name: "Smith",
            age: 22,
            gender: "Non-binary"
        },
        {
            name: "Salma",
            age: 40,
            gender: "Female"
        }
    ];
    

    function filteringFemale(people: TPerson[]): TPerson[] {
        const peopleWithoutFemale: TPerson[] = [];
        people.map((person: TPerson) => {
            if (person.gender != 'Female') {
                peopleWithoutFemale.push(person)
            }
        })
        return peopleWithoutFemale;
    }
    const peopleWithoutFemale = filteringFemale(people);

    function printNames(peopleWithoutFemale: TPerson[]): void {
        peopleWithoutFemale.forEach(person => {
            console.log(person.name)
        })
    }

    // uncomment next line to check task-1
    // printNames(peopleWithoutFemale);


}
