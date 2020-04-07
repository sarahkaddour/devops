var chai = require('chai')
var chaiHttp = require('chai-http')
const app = require('../devops_backend/src/index')

chai.use(chaiHttp)

describe('Users REST API', ()=> {

  describe('POST /user/', ()=> {
    it('creates a new user', (done)=> {
      const user = {
        username: 'sergkudino',
        firstname: 'Sergei',
        lastname: 'Kudinov',
        team: 'Green',
      }
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(201);
          chai.expect(res.body.username).to.equal('sergkudino');
          chai.expect(res).to.be.json;
          done();
        })
        .catch((err) => {
          throw err
        })
    })
  })

  describe('GET /user/:username', ()=> {
    it('gets a user', (done)=> {
      const username = 'sergkudino';
      chai.request(app)
        .get(`/user/${username}`)
        .then((res) => {
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.contain({
            username: 'sergkudino',
            firstname: 'Sergei',
            lastname: 'Kudinov',
            team: 'Green'
          });
          chai.expect(res).to.be.json;
          done();
        })
        .catch((err) => {
          throw err
        })
    })
  })

  describe('DELETE /user/:username', ()=> {
    it('deletes a user', (done)=> {
      const username = 'sergkudino';
      chai.request(app)
        .delete(`/user/${username}`)
        .then((res) => {
          chai.expect(res).to.have.status(204);
          done();
        })
        .catch((err) => {
          throw err
        })
    })
  })
})
