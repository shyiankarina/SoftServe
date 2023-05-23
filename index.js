//До застосування duplicate code
//У цьому прикладі цикл, який обчислює підсумок списку, дублюється в обох функціях. 
//Щоб усунути дублювання, ми можемо витягти цикл у його власну функцію та повторно використовувати його в обох функціях. 
function calculateAverage(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  const average = total / list.length;
  return average;
}

function calculateSum(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}


//Після застосування duplicate code
//Рефакторинг коду для виділення циклу в окрему функцію ми усунули дублювання та зробили код більш модульним і придатним для повторного використання. 
//Тепер ми можемо повторно використовувати функцію calculateTotal() в інших частинах нашої програми, якщо нам потрібно обчислити загальну суму списку.
function calculateTotal(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function calculateAverage(list) {
  const total = calculateTotal(list);
  const average = total / list.length;
  return average;
}

function calculateSum(list) {
  const total = calculateTotal(list);
  return total;
}
