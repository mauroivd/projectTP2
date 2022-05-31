const chai = require('chai')
const chaiHttp = require('chai-http')
const { describe } = require('mocha')
// const axios = require('axios')
const app = require('../app')
// import app from '../app'
const { expect } = chai

chai.use(chaiHttp)

describe("Bar API", () => {
    describe("GET /bares", () => {
        it("GET list bares", async () => {
            // const response = await axios.get('http://localhost:5000/aviones')
            chai.request(app)
                .get('/bares')
                .end((_, res) => {
                    expect(res).to.have.status(200)
                    expect(res).to.be.json
                    expect(JSON.parse(res.text))
                        .to.eql([
                            {
                                id: 1,
                                nombreBar: "Vikingos",
                                direccion: "Calle Falsa 123",
                            },
                            {
                                id: 2,
                                nombreBar: "Odin",
                                direccion: "Kill 123456",
                            }
                        ])
                })
        })
    })
})

