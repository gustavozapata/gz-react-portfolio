import { sum, fetchData } from "./tests";

test("adds 1 + 2 equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

//*** when our functions return a callback
// test("the data is: iPhone 11 Pro", (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe("iPhone 11 Pro");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }
//   fetchData(callback);
// });

//*** when our functions return promises
test("the data is: iPhone 11 Pro", () => {
  return fetchData().then((data) => {
    expect(data).toBe("iPhone 11 Pro");
  });
});
