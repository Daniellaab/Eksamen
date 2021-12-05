const {expert, request, expect} = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server")

chai.use(chaiHttp);

describe("reg", () => {
    describe("POST /opret", () => {
       it("skal ikke videresende brugeren til hovedsiden uden at være oprettet", (done) => {
           chai
           .request(app)
           .post("/opret")
           .send({email:"",kode:""})
           .end((err, res) => {
               expect(res.status).to.equal(404);
               done();
           });
       });
    });
});