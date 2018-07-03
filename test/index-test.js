describe("index.html", () => {
  it("has valid input and output elements", () => {
    const form = document.querySelector('form')
    const inputs = document.getElementsByTagName("input")
    const output = document.querySelector("output")

    expect(form, "No form element found within index.html").to.exist
    expect(inputs.length, "Index.html needs two input elements, one for password length, and one for form submission").eql(2);
    expect(form.children.length, "Both inputs must be inside the form element").eql(2);

    expect(inputs[0].type, 'The first input should be set to "text" type').eql('text')
    expect(inputs[0].id, 'The first input should have an id of "passwordLength"').to.equal('passwordLength')
    expect(inputs[0].innerText, 'The passwordLength input element should start off empty').to.equal(undefined)
    expect(inputs[1].type, 'The second input should be set to "submit" type').eql('submit');

    expect(output, 'No <output> element found').to.exist
    expect(output.innerText, 'The <output> element should start off empty').to.equal(undefined)
    expect(output.id, 'The first input should have an id of "result"').to.equal('result')

  });
});

describe("password generation", () => {

    it("works without any value entered into the form", () => {

      const submit = document.getElementsByTagName("input")[1]

      submit.click()

      const password = document.querySelector("output").innerText

      expect(password, "Generated password was not appeneded to the output").to.not.equal('')

      expect(password, 'Test Failed: No text was found in the <output> element').to.exist
      expect(password, 'Test Failed: No lowercase letters').to.match(/[a-z]+/)
      expect(password, 'Test Failed: No uppercase letters').to.match(/[A-Z]+/)
      expect(password, 'Test Failed: No numbers').to.match(/[0-9]+/)
      expect(password, 'Test Failed: No special characters').to.match(/[^A-Za-z0-9]+/)

    });

    it('creates multiple passwords on demand, without refresh or clearing the input field', () => {

      document.querySelector("output").innerText = ""
      let submit = document.getElementsByTagName("input")[1]
      submit.click()

      const password = document.querySelector("output").innerText
      expect(password, "Generated password was not appeneded to the output").to.not.equal('')
      expect(password, 'Test Failed: No text was found in the <output> element').to.exist
      expect(password, 'Test Failed: No lowercase letters').to.match(/[a-z]+/)
      expect(password, 'Test Failed: No uppercase letters').to.match(/[A-Z]+/)
      expect(password, 'Test Failed: No numbers').to.match(/[0-9]+/)
      expect(password, 'Test Failed: No special characters').to.match(/[^A-Za-z0-9]+/)

      submit.click()
      const passwordTwo = document.querySelector("output").innerText
      expect(passwordTwo, "Second password request did not change output content").to.not.equal(password)
      expect(password, 'Test Failed: No text was found in the <output> element').to.exist
      expect(password, 'Test Failed: No lowercase letters').to.match(/[a-z]+/)
      expect(password, 'Test Failed: No uppercase letters').to.match(/[A-Z]+/)
      expect(password, 'Test Failed: No numbers').to.match(/[0-9]+/)
      expect(password, 'Test Failed: No special characters').to.match(/[^A-Za-z0-9]+/)
    })

    it("creates passwords of the requested length", () => {

      document.querySelector("output").innerText = ""

      const passwordLength = document.getElementsByTagName("input")[0]

      passwordLength.value = "6"
      document.getElementsByTagName("input")[1].click()
      let outputLength = document.querySelector("output").innerText.length
      expect(outputLength, "Expected a password six characters long. Password is "+ outputLength +" characters long").to.equal(6);

      passwordLength.value = "100"
      document.getElementsByTagName("input")[1].click()
      outputLength = document.querySelector("output").innerText.length
      expect(outputLength, "Expected a password one hundred characters long. Password is "+ outputLength +" characters long").to.equal(100);

    })

    it("creates unique passwords each time it is run", () => {

      //first pass
      document.querySelector("output").innerText = ""

      let submit = document.getElementsByTagName("input")[1]
      submit.click()

      const password = document.querySelector("output").innerText
      expect(password, "Generated password was not appeneded to the output").to.not.equal('')

      //second pass
      document.querySelector("output").innerText = ""

      submit.click()

      const passwordTwo = document.querySelector("output").innerText
      expect(passwordTwo, "The generator created the same password more than once: " + passwordTwo).to.not.equal(password)

      //third pass
      document.querySelector("output").innerText = ""

      submit.click()

      const passwordThree = document.querySelector("output").innerText
      expect(passwordThree, "The generator created the same password more than once: " + passwordThree).to.not.equal(passwordTwo)
      expect(passwordThree, "The generator created the same password more than once: " + passwordThree).to.not.equal(password)

    });


})
