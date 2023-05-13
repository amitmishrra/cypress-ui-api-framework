import { randomString } from '../../utils/helper'

const userName = randomString();
const password = "Qwerty@1234";
let userid;
let token
describe('Perform Tasks in https://demoqa.com/ ', () => {
    it('Create a User', () => {
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/User',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                "userName": userName,
                "password": password
            },
        }).then((response) => {
            userid = response.body.userID;
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('username', userName);

        });
    });


    it('Authonticate a User', () => {
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                "userName": userName,
                "password": password
            },
        }).then((response) => {
            token = response.body.token;
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('token');
            expect(response.body).to.have.property("result", "User authorized successfully.");
        });
    }
    );

    const authString = `${userName}:${password}`;
    const authHeader = 'Basic ' + window.btoa(authString).replace(/=+$/, '');
    it('Add a Book', () => {
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/BookStore/v1/Books',
            headers: {
                'Content-Type': 'application/json',
                'authorization': authHeader,
            },

            body: {
                "userId": userid,
                "collectionOfIsbns": [
                    {
                        "isbn": "9781449325862"
                    }
                ]
            },
        }).then((response) => {
            expect(response.status).to.equal(201);
        });
    }
    );

    it('Delete a book', () => {
        console.log("userid: " + userid);
        cy.request({
            method: 'DELETE',
            url: 'https://demoqa.com/BookStore/v1/Books?UserId=' + userid,
            headers: {
                'Content-Type': 'application/json',
                'authorization': authHeader,
            },
        }).then((response) => {
            expect(response.status).to.equal(204);
        });
    }
    );

}
);