console.log("Завдання: 9 ==============================");

function task9() {
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  let fetchWithError=function (){
	let errorMessage="Помилка при з'єднанні з сервером";
	return Promise.reject(errorMessage);
  };
 
  
  // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
  // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
  // Викликаємо функцію fetchWithError
  
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
  fetchWithError().then((value)=>{console.log (value)}).catch((error)=>{console.error(error)});
}

// Викликаємо функцію task10
task9();
