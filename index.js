// масив об'єктів з інформацією про користувачів
const users = [
    { name: 'John', phone: '555-1234', balance: 1500 },
    { name: 'Mary', phone: '555-5678', balance: 2500 },
    { name: 'Bob', phone: '555-9012', balance: 3500 },
    { name: 'Alice', phone: '555-3456', balance: 500 },
    { name: 'Tom', phone: '555-7890', balance: 2200 }
  ];
  
  // фільтруємо користувачів, у яких баланс більше 2000
  const richUsers = users.filter(user => user.balance > 2000);
  
  // витягуємо телефонні номери цих користувачів
  const phoneNumbers = richUsers.map(user => user.phone);
  
  // виводимо масив телефонних номерів
  console.log(phoneNumbers);
  
  // знаходимо суму всіх балансів
  const totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
  
  // виводимо суму всіх балансів
  console.log(totalBalance);