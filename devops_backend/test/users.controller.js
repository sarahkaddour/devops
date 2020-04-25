const {expect} = require('chai')
const path = require('path')
const users = require('../devops_backend/src/controllers/users')
const fs = require('fs')

describe('Users', ()=> {

  describe('Create', ()=> {
    // beforeEach((done) => {
    //   config = configure()
    //   fs.writeFile(config.users.db_dir, '', () => {
    //     done()
    //   })
    // })

    it('create user', (done)=> {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov',
        team: 'Green'
      }
      users.create(user, (err, result) => {
        expect(err).to.be.null;
        expect(result).to.equal('sergkudinov');
        done();
      })
    })

    it('passing wrong user parameters', (done)=> {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      users.create(user, (err, result) => {
        expect(err.toString()).to.equal('Error: Wrong user parameter');
        expect(result).to.be.null;
        done();
      })
    })

    it('avoids creating if user already exists', (done)=> {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov',
        team: 'Red'
      }
      users.create(user, (err, result) => {
        expect(err.toString()).to.equal('Error: The username already exists');
        expect(result).to.be.null;
        done();
      })
    })
  })

  describe('Get', ()=> {
    it('gets a user', (done)=> {
      const username = 'sergkudinov';
      users.get(username, (err, result) => {
        expect(err).to.be.null;
        expect(result).to.contain({
          username: 'sergkudinov',
          firstname: 'Sergei',
          lastname: 'Kudinov',
          team: 'Green'
        });
        done();
      })
    })
  })

  describe('Delete', ()=> {
    it('deletes a user', (done)=> {
      const username = 'sergkudinov';
      users.delete(username, (err, result) => {
        expect(err).to.be.null;
        expect(result.deletedCount).to.equal(1);
        done();
      })
    })
  })
})
