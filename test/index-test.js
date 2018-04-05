describe("index.html", () => {
  it("has an input form and an valid output area ", () => {
    expect(document.getElementsByTagName("input")[0]).toExist('No input field for password length found');
    expect(document.getElementsByTagName("input")[1]).toExist('No submit button found');
    expect(document.querySelector("output").innerText).toNotExist('The <output> element should start off empty');
    expect(document.querySelector("output")).toExist('No <output> element found');
  });

  it("open the browser console to see 2nd test ", () => {
    console.log('waiting 5 seconds before checking for password')

    let password = document.querySelector("output").innerText
    expect(password).toNotExist()

    setTimeout(function() {
      password = document.querySelector("output").innerText

      expect(password).toExist('Test Failed: No text was found in the <output> element');
      expect(password).toMatch(/[a-z]+/)
      expect(password).toMatch(/[0-9]+/)
      expect(password).toMatch(/[A-Z]+/)
      expect(password).toMatch(/[^A-Za-z0-9]+/)

      console.log('Excellent! You passed the test!')
     }, 5000)

  });
});
// describe("Tests for secure password generation:", () => {
//   it("index.html has an input form and an valid output area", () => {
//     expect(document.getElementsByTagName("input")[0]).toExist();
//     expect(document.getElementsByTagName("input")[1]).toExist();
//     expect(document.querySelector("output").innerText).toNotExist();
//     expect(document.querySelector("output")).toExist();
//   });
//
//   it("open the browser console to see test results ", () => {
//     console.log('waiting 5 seconds before checking for password')
//
//     let password = document.querySelector("output").innerText
//     expect(password).toNotExist()
//
//     setTimeout(function() {
//       password = document.querySelector("output").innerText
//
//       expect(password).toExist('Test Failed: No text was found in the <output> element');
//       expect(password).toMatch(/[a-z]+/, 'Test Failed: No lowercase letters')
//       expect(password).toMatch(/[A-Z]+/, 'Test Failed: No uppercase letters')
//       expect(password).toMatch(/[0-9]+/, 'Test Failed: No numbers')
//       expect(password).toMatch(/[^A-Za-z0-9]+/, 'Test Failed: No special characters')
//
//       console.log('Excellent! You created a secure password!')
//
//       }, 5000)
//
//   });
// });
