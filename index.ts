// interface Product {
//   name: string;
//   price: number;
//   inStock: boolean;
// }

// const laptop: Product = {
//   name: "MacBook Pro",
//   price: 2500,
//   inStock: true,
// };

// console.log(laptop);

//Task 1 — Interfaces & Types
// User must have: name (string), age (number), email (string), and isActive (boolean)

// interface User {
//   name: string;
//   age: number;
//   email: string;
//   isActive: boolean;
//   phone?: string;
// }

// const dima: User = {
//   name: "Dima",
//   age: 34,
//   email: "dima@email.com",
//   isActive: true
// };

// console.log(dima);

// //task 2 Typed Functions

// function calculateTotal(price: number, quantity: number): number {
//   return price * quantity;
// }
// function formatPrice(n: number): string {
//   return "$" + n.toFixed(2);
// }

// console.log(calculateTotal(10, 5)); // → 50
// console.log(calculateTotal(25, 3)); // → 75
// console.log(formatPrice(50));

// Typing Arrays & Functions Together
//task 1

// interface Product {
//   name: string;
//   price: number;
//   inStock: boolean;
// }

// const products: Product[] = [
//   { name: "iPhone", price: 1600, inStock: true },
//   { name: "Motorola", price: 1000, inStock: false },
//   { name: "Nokia", price: 850, inStock: false },
// ];

// function getInStock(products: Product[]): Product[] {
//   return products.filter((product) => product.inStock);
// }
// console.log(getInStock(products));

//Type Aliases & Union Types
//task 1

// type OrderStatus = "pending" | "shipped" | "delivered";
// interface Order {
//   id: number;
//   customer: string;
//   status: OrderStatus;
// }
// const orders: Order[] = [
//   { id: 1, customer: "John Doe", status: "pending" },
//   { id: 2, customer: "Suzan Harris", status: "shipped" },
//   { id: 3, customer: "Jay Rollinson", status: "delivered" },
// ];

// function getOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
//   return orders.filter((order) => order.status === status);
// }

// console.log(getOrdersByStatus(orders, "shipped"));

//Generics
//task 1
// 1. Write a generic function "getLast" that returns
//    the LAST item of any array
// function getLast<T>(arr: T[]): T | undefined {
//   return arr[arr.length - 1];
// }

// // Test with different types:
// console.log(getLast([1, 2, 3])); // → 3
// console.log(getLast(["a", "b", "c"])); // → "c"
// console.log(getLast([true, false])); // → false

// 2. Write a generic function "wrapInArray" that takes
//    a single item and returns it wrapped in an array

// function wrapInArray<T>(item: T): T[] {
//   return [item];
// }
// console.log(wrapInArray(5)); // → [5]
// console.log(wrapInArray("hello")); // → ["hello"]

//Typing API Responses
//task 1

// 1. Interface for company
interface Company {
  name: string;
}
// 2. Interface for ApiUser (include company)
interface ApiUser {
  id: number;
  name: string;
  email: string;
  phone: number;
  company: Company;
}

// 3. Typed async function
async function fetchUser(id: number): Promise<ApiUser> {
  // fetch, convert to json, return
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    const data: ApiUser = await response.json();
    return data;
  } catch (error) {
    console.log("Something went wrong", error);
    throw error;
  }
}

// 4. Test it
fetchUser(1).then((user) =>
  console.log(`Name: ${user.name}, Company: ${user.company.name}`),
);
