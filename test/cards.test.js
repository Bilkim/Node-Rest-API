const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

chai.use(chaiHttp);
chai.should();


// Tests for Cards
describe("/POST cards", () => {
  it("Creates a card", (done) => {
    let card = {
      cardAlias: "CardCreated",
      accountId: 1,
      cardType: "virtual",
    };

    chai
      .request(app)
      .post("/api/cards/")
      .send(card)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        done();
      });
  });
});



describe("/GET cards", () => {
  it("GET all the cards", (done) => {
    chai
      .request(app)
      .get("/api/cards/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  // it("GET a card by id", (done) => {
  //   const id = 1;
  //   chai
  //     .request(app)
  //     .get(`/api/cards/${id}`)
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.body.should.be.a("object");
  //       done();
  //     });
  // });
});

// describe("/PATCH/:id cards", () => {
  // it("UPDATE a card by id", (done) => {
  //   const id = 1;
  //   let card = {
  //     cardAlias: "UpdatedCardAlias",
  //   };
  
  //   chai
  //     .request(app)
  //     .patch("/api/cards/" + id)
  //     .send(card)
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.body.should.be.a("object");
  //       done();
  //     });
  // });
  // });

// describe("/DELETE/:id cards", () => {
//   it("DELETE a card by id", (done) => {
//     const id = 1;
//     chai
//       .request(app)
//       .delete("/api/cards/" + id)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("object");
//         done();
//       });
//   });
// });
