const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

chai.use(chaiHttp);
chai.should();


// Tests for Accounts
describe("/POST accounts", () => {
  it("Creates an account", (done) => {
    let account = {
      iban: "IBAN3823",
      bicSwift: "SWIFT8392",
      clientId: 1,
    };

    chai
      .request(app)
      .post("/api/accounts/")
      .send(account)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        done();
      });
  });
});


describe("/GET accounts", () => {
  it("GET all the accounts", (done) => {
    chai
      .request(app)
      .get("/api/accounts/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  // it("GET account by id", (done) => {
  //   const id = 1;
  //   chai
  //     .request(app)
  //     .get(`/api/accounts/${id}`)
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.body.should.be.a("object");
  //       done();
  //     });
  // });
});



// describe("/PATCH/:id accounts", () => {
//   it("UPDATE account by id", (done) => {
//     const id = 3;
//     let accounts = {
//       iban: "UpdatedIBAN",
//       bicSwift: "UpdatedBIC",
//       clientId: 3,
//     };

//     chai
//       .request(app)
//       .patch("/api/accounts/" + id + "/")
//       .send(accounts)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("object");
//         done();
//       });
//   });
// });

// describe("/DELETE/:id accounts", () => {
//   it("DELETE account by id", (done) => {
//     const id = 2;
//     chai
//       .request(app)
//       .delete("/api/accounts/" + id)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("object");
//         done();
//       });
//   });
// });

