describe("index.html", () => {
  it("has an input form and an output ", () => {
    expect(document.getElementsByTagName("input")[0]).toExist();
    expect(document.getElementsByTagName("input")[1]).toExist();
    expect(document.querySelector("output")).toExist();
  });

  it("has a working submit button ", () => {
    console.log('waiting 5 seconds before checking for password')
    let password = document.querySelector("output").innerText
    expect(password).toNotExist()


    setTimeout(function() {
      password = document.querySelector("output").innerText

      expect(password).toExist('Test Failed: No text was found in the <output> element');
      expect(password).toMatch(/[a-z]+/, 'Test Failed: No lowercase letters')
      expect(password).toMatch(/[A-Z]+/, 'Test Failed: No uppercase letters')
      expect(password).toMatch(/[0-9]+/, 'Test Failed: No numbers')
      expect(password).toMatch(/[^A-Za-z0-9]+/, 'Test Failed: No special characters')

      console.log('Excellent! You created a secure password!')

      }, 5000)

  });
});
