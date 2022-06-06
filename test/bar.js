const chai = require('chai')
const chaiHttp = require('chai-http')
const { describe } = require('mocha')
const app = require('../app')
// import app from '../app'
const { expect } = chai

chai.use(chaiHttp)

describe("Bar API", () => {
    describe("GET /bares", () => {
        it("GET list bares", async () => {
            chai.request(app)
                .get('/bares')
                .end((_, res) => {
                    expect(res).to.have.status(200)
                    expect(res).to.be.json
                    expect(JSON.parse(res.text))
                        .to.eql([
                            {
                                id: 1,
                                nombre: "Bajo Tierra",
                                direccion: "Gral Paz 1234",
                                cantidad: 500
                            },
                            {
                                id: 2,
                                nombre: "Subsuelo",
                                direccion: "Thomas 4567",
                                cantidad: 350
                            }
                        ])
                })
        })
    })

    describe("POST /bares", () => {

        it("crea un bar y muestra lista actualizada", () => {
            chai.request(app)
                .post('/bares')
                .send({
                    id: 3,
                    nombre: "New Bar",
                    direccion: "Address 1234",
                    cantidad: 1000
                })
                .end((_, res) => {
                    expect(res).to.have.status(201) // CREATED
                    expect(res).to.be.json
                    expect(JSON.parse(res.text))
                        .to.eql({
                            id: 3,
                            nombre: "New Bar",
                            direccion: "Address 1234",
                            cantidad: 1000
                        })
                })
            //Mostramos que la creacion fue exitosa y se agrego a la lista de bares gral
            chai.request(app)
                .get('/bares')
                .end((_, res) => {
                    expect(res).to.have.status(200)
                    expect(res).to.be.json
                    expect(JSON.parse(res.text))
                        .to.eql([
                            {
                                id: 1,
                                nombre: "Bajo Tierra",
                                direccion: "Gral Paz 1234",
                                cantidad: 500
                            },
                            {
                                id: 2,
                                nombre: "Subsuelo",
                                direccion: "Thomas 4567",
                                cantidad: 350
                            },
                            {
                                id: 3,
                                nombre: "New Bar",
                                direccion: "Address 1234",
                                cantidad: 1000
                            }
                        ])
                    // console.log(res.body)
                })
        })
    })

    describe("GET /bares/:id", () => {
        it("GET bar by id", async () => {

            chai.request(app)
                .get('/bares/1')
                .end((_, res) => {
                    expect(res).to.have.status(200)
                    expect(res).to.be.json
                    expect(JSON.parse(res.text))
                        .to.eql(
                            {
                                id: 1,
                                nombre: "Bajo Tierra",
                                direccion: "Gral Paz 1234",
                                cantidad: 500
                            }
                        )
                })
        })
    })

    describe("DELETE /bares/:id", () => {
        it("borra un bar especifico, borra el id 2", async () => {

            chai.request(app)
                .delete('/bares/2')
                .end((_, res) => {
                    expect(res).to.have.status(200)
                    expect(res).to.be.json
                    expect(JSON.parse(res.text))
                        .to.eql([
                            {
                                id: 1,
                                nombre: "Bajo Tierra",
                                direccion: "Gral Paz 1234",
                                cantidad: 500
                            },
                            {
                                id: 3,
                                nombre: "New Bar",
                                direccion: "Address 1234",
                                cantidad: 1000
                            }
                        ])
                })
        })
    })

    describe("PUT /bares/", () => {

        it("modificamos un id particular", () => {
            chai.request(app)
                .put('/bares')
                .send({
                    id: 1,
                    nombre: "Bajo Tierra NEW",
                    direccion: "Gral Paz 6500",
                    cantidad: 2300
                })
                .end((_, res) => {
                    expect(res).to.have.status(200) // Edit
                    expect(res).to.be.json
                    expect(JSON.parse(res.text))
                        .to.eql([
                            {
                                id: 3,
                                nombre: "New Bar",
                                direccion: "Address 1234",
                                cantidad: 1000
                            },
                            {
                                id: 1,
                                nombre: "Bajo Tierra NEW",
                                direccion: "Gral Paz 6500",
                                cantidad: 2300
                            },
                        ])
                })
        })
    })


})

