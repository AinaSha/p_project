// 3.1 У нас уже есть рабочее приложение, состоящее из отдельных функции. Представьте что  перед Вами стоит
//  задача переписать его так, чтобы все функции стали меьтодами обьекта personalMovieDB

//3.2 Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat.
//Если оно false - он перкключаектся в true, или наоборот. Протестировать вместе с showMyDB

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many movies have you seen?",'');
        
        while (personalMovieDB.count =='' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies have you seen?",'');  
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if( personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        }else if(personalMovieDB.count >= 10  && personalMovieDB.count < 30) {
            alert("Вы классический зритель!"); 
        }else if( personalMovieDB.count >= 30) {
            alert("Вы киноман!"); 
        }else {
            alert("Произошла ошибка!");
        }
    },
    showMyDB: function(hidden) {
        //оператор отрицания not hidden в обьекте значение privat: false превратиться в true и выводииться обьект
       //  если будет true то оператор отрицания превращает в false и ничего не будет выводитться
           if(!hidden){              
               console.log(personalMovieDB);
           }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        //для пользователей выводим номерацию и начинаем i = 1;
        
          for (let i = 1; i <= 3; i++){     
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null){
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            }else {
                personalMovieDB.genres[i-1] = genre;   
                //но когда наичнаем записывать в массив должны начинать с нуля i-1
            }
          }

          personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр № ${i+1} - это ${item}`);
          });
      }
    
};


// 3.3 В методе writeYourGenres запретить пользователю нажать на кнопку "отмена" или
// оставлять пустую строку. Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде: 
// "Любимый жанр №(номер по паорядку, начиная с 1) - это (название из массива)"


