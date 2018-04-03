const chai = require("chai");
const expect = require("chai").expect;
const assert = require("chai").assert;
const fs = require("fs");
const jsdom = require("mocha-jsdom");
const path = require("path");

const should = chai.should();

const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);
const script = fs.readFileSync(path.resolve(__dirname, "..", "index.js"));
jsdom({ html, script });

describe("index.html", () => {
  it("has inputs and an output", () => {
    assert.exists(document.getElementsByTagName("input")[0]);
    assert.exists(document.getElementsByTagName("input")[1]);
    assert.exists(document.getElementsByTagName("output")[0]);
  });

  it("has a working submit button", () => {
    document.getElementsByTagName("output")[0].innerHTML = "";
    document.getElementsByTagName("input")[0].innerHTML = "10";
    document.getElementsByTagName("input")[1].click();

    assert.include(
      document.getElementsByTagName("output")[0].innerHTML,
      "",
      "lowercase"
    );
  });
});
