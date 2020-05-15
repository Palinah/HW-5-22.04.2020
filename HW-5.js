let arr = [
    { article:'Почему язык С++ такой недружелюбный к программистам', author:'Максим Комисаренко', status:'not banned'},
    { article:'Одному из учеников — 91 год. Как людей старшего возраста обучают компьютерной грамотности в Харькове', author:'Анна Соха', status:'not banned'},
    { article:'Порівнюємо два формати серіалізації даних: Protobuf vs JSON', author:'Ярослав Характерник', status:'not banned'},
    { article:'Аби щось отримати, треба докласти зусиль — цей принцип справедливий і в IT, і в жонглюванні». Досвід циркового артиста, який став програмістом', author:'Artem Halai', status:'not banned'},
    { article:'User Acceptance Testing: как менеджеру организовать процесс', author:'Alexander Kryuchkov', status:'not banned'},
    { article:'Створення відеогри на асемблері, модуль для обробки зображень, вірус із кодом, що мутує. Як ІТ-спеціалісти розв’язують складні завдання', author:'Редакція DOU', status:'banned'},
    { article:'Як і навіщо IT-фахівці розвивають українськомовний YouTube', author:'Anna Belovolchenko', status:'not banned'},
    { article:'Scala 3: як зміниться синтаксис, система типів і застосування мови', author:'Ruslan Shevchenko', status:'not banned'},
    { article:'C++ дайджест #27: Continuous Integration', author:'Наталья Ковалёва', status:'not banned'},
];
console.log(arr);

let str = ''; // пустая строка перед списком статей

for (let item of arr) { // Предписываем переменной item повторяться пока незакончится массив arr 
    
    let objName = item;
    
    if ( objName.status !== 'not banned') { // Если это условие не выполняется,то приналичии в цикле оператора continue, цикл 
        continue;              // переходит к другой итеррации. 
    }  
                       
    str = `${str}<li><b style='color:blue'>${objName.article}</b><br>${'Автор: ' + objName.author}</li><br>`; // Пустая строка, маркерованный список, первое значение переменной item 
     //из массива c индексом 0 (ноль)
     
}

let dd = document.querySelector('.list'); // найден элемент html-кода с классом .list
dd.innerHTML = str; // Ему присвоено содержимое переменной dd


