"use strict";

// 1. АВтоматизировать вопросы пользавателю про фильмы при помощи цикла
// 2. Сделать так чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длиннее, чем 50 символов. Если это происходит
//  возращаем пользователя к вопросам опять. 


// 2.1. Создаем функцию start с инициализирующим вопросом и при этом добавляем проверку на:
// для того чтобы пользователь не мог отменить вопрос/ ввести пустую строку / или ввести не число

let  numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies have you seen?",'');
    
    while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you seen?",'');  
    }
}

start();

let i  = 0;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//2.1 создаем функцию rememberMyFilms которая будет вызывать цикл только по требованию и которая будет оборачивать 

function rememberMyFilms() {
    //1.
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of your last movies you saw?','').trim(),
            b = prompt('How much do you rate it?','');
            
        if ( a !== null  &&  b !== null  && a !== ''  &&  b !=='' &&  a.length < 50)   {
            personalMovieDB.movies[a] = b;
            console.log("Done!");
        }else {
            console.log("Error!");
            i--;
        }     
    }  
}

rememberMyFilms();


//создаем функцию  и оборачиваем нижнюю проверку

function detectPersonalLevel() {
    if( personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    }else if(personalMovieDB.count >= 10  && personalMovieDB.count < 30) {
        alert("Вы классический зритель!"); 
    }else if( personalMovieDB.count >= 30) {
        alert("Вы киноман!"); 
    }else {
        alert("Произошла ошибка!");
    }
}

detectPersonalLevel();


//2.
// while (i < 2) {
//     const a = prompt('One of your last movies you saw?',''),
//           b = prompt('How much do you rate it?','');
//           i++; 
//         if ( a !== null  &&  b !== null  && a !== ''  &&  b !=='' &&  a.length < 50)   {
//             personalMovieDB.movies[a] = b;
//             console.log("Done!");
//         }else {
//             console.log("Error!");
//             i--;
//         }        
// }

//3.
// do {
//     const a = prompt('One of your last movies you saw?',''),
//           b = prompt('How much do you rate it?','');
//           i++; 
//         if ( a !== null  &&  b !== null  && a !== ''  &&  b !=='' &&  a.length < 50)   {
//             personalMovieDB.movies[a] = b;
//             console.log("Done!");
//         }else {
//             console.log("Error!");
//             i--;
//         }         
// }

// while (i < 2);


//2.2 Создать функ showMyD, которая будет проверять свойство privat. Если стоит в позиции false - выводит 
// в консоль главный обьект программы

function showMyDB(hidden) {
 //оператор отрицания not hidden в обьекте значение privat: false превратиться в true и выводииться обьект
//  если будет true то оператор отрицания превращает в false и ничего не будет выводитться
    if(!hidden){              
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);




// 2.3 Создать функ writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос .
// Каждый ответ записываться в массив данных genres

function writeYourGenres() {
  //для пользователей выводим номерацию и начинаем i = 1;
  
    for (let i = 1; i <= 3; i++){     
      personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);   
      //но когда наичнаем записывать в массив должны начинать с нуля i-1
    }
}

writeYourGenres();