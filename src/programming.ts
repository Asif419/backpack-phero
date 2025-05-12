{
    // Task 1: Array filtering and mapping

    interface IPerson {
        name: string;
        age: number;
        gender: string;
    }
    const people: IPerson[] = [
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

    function filteringFemale(people: IPerson[]): IPerson[] {
        const peopleWithoutFemale: IPerson[] = [];
        people.map((person: IPerson) => {
            if (person.gender != 'Female') {
                peopleWithoutFemale.push(person)
            }
        })
        return peopleWithoutFemale;
    }
    const peopleWithoutFemale = filteringFemale(people);

    function makeArrayWithNameWithoutFemale(peopleWithoutFemale: IPerson[]): string[] {
        const nameWithoutFemale: string[] = [];
        peopleWithoutFemale.forEach(person => {
            nameWithoutFemale.push(person.name)
        })
        return nameWithoutFemale;
    }

    const finalNames = makeArrayWithNameWithoutFemale(peopleWithoutFemale);
    // console.log(finalNames)


    // ---------------------------
    // Task 2: Object Manipulation
    interface IBook {
        title: string;
        author: string;
        year: number;
    }

    const books: IBook[] = [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            year: 1813
        }
    ];
    function findOutBooksName(allBooks: IBook[]): string[] {
        const booksName: string[] = [];
        allBooks.forEach((book: IBook) => {
            booksName.push(book.title);
        })
        return booksName;
    }
    const booksName = findOutBooksName(books)
    // console.log(booksName);


    // ------------------------------
    // Task - 3: Function Composition
    const squre = (x: number): number => x * x
    const double = (x: number): number => x * 2
    const addFive = (x: number): number => x + 5

    const getFinalNumber = (x: number): number => addFive(double(squre(x)));
    // console.log(getFinalNumber(5));


    // ----------------------------
    // Task 4: Sorting Ojects

    interface ICar {
        make: string;
        model: string;
        year: number;
    }

    const cars: ICar[] = [
        {
            make: "Toyota",
            model: "Corolla",
            year: 2020
        },
        {
            make: "Honda",
            model: "Civic",
            year: 2018
        },
        {
            make: "Ford",
            model: "Mustang",
            year: 2022
        },
        {
            make: "Tesla",
            model: "Model 3",
            year: 2023
        }
    ];

    function sortCars(cars: ICar[]): ICar[] {
        cars.sort((a, b) => a.year - b.year)
        return cars;
    }
    const yearlySortedCars = sortCars(cars);
    // console.log(yearlySortedCars);


    // ----------------------------
    // Task 5: Array Reduction
    const numbers = [1, 2, 3, 4];
    const totalNumber = numbers.reduce((acc, num) => acc + num, 0)

    // console.log(totalNumber);
}
