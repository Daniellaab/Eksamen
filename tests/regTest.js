const {expert, request, expect} = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server")

chai.use(chaiHttp);

describe("reg", () => {
    describe("POST brugere/opret", () => {
       it("oprette en ny bruger", (done) => {
           chai
           .request(app)
           .post("/brugere/opret")
           .send({email:"test@mail.dk",kode:"1234"})
           .end((err, res) => {
               expect(res.status).to.equal(200);
               done();
           });
       });
    });
});