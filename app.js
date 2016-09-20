let app = angular.module('LibraryBookApp', []);

app.factory('BookService', function () {
    let books = [
        {
            title: "The Life of St. Anthony of Egypt",
            author: "St. Athanasius",
            borrower: "none",
        },
        {
            title: "The Count of Monte Cristo",
            author: "Alexandre Dumas",
            borrower: "none",
        },
        {
            title: "The Discarded Image",
            author: "C.S. Lewis",
            borrower: "none",
        },
        {
            title: "The Hawk and the Dove Trilogy",
            author: "Penelope Wilcox",
            borrower: "none",
        },
        {
            title: "In Defense of Sanity",
            author: "G.K. Chesterton",
            borrower: "none",
        },
        {
            title: "Martin the Warrior",
            author: "Brian Jacques",
            borrower: "none",
        },
        {
            title: "The Princess and the Goblin",
            author: "George MacDonald",
            borrower: "none",
        },
        {
            title: "An Exact Exposition of the Orthodox Faith",
            author: "St. John of Damascus",
            borrower: "none",
        }
    ];

    return {
        borrow: function(bookTitle, name){
            for (let i = 0; i < books.length; i++) {
                if (books[i].title === bookTitle) {
                    books[i].borrower = name;
                }
            }
        },
        
        getBooks: function() {
            return books;
        },

        listBorrowed: function(user) {
            let newArray = [];
            for (let i = 0; i < books.length; i++) {
                if (user === books[i].borrower) {
                    newArray.push(books[i]);
                }
            }
            return newArray;
        },
    }
});

app.controller("BookListener", function($scope, BookService) {
    $scope.books = BookService.getBooks();
    $scope.borrowTheBook = function(currentTitle) {
        BookService.borrow(currentTitle, $scope.user);
    }
});

app.controller("UserSearch", function($scope, BookService) {
    $scope.books = [];
    $scope.getTheBooks = function() {
        $scope.books = BookService.listBorrowed($scope.person);
    }
});