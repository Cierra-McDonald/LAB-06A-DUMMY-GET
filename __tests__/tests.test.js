const { app } = require('../app.js')
const supertest = require('supertest')
const request = supertest(app)

it('should respond with plants', async done => {

  const plants = [
    {
        "id": 1,
        "image": "silver-evergreen.png",
        "genus": "Aglaonema",
        "size": "Medium",
        "light": "Low Light",
        "price": "60",
        "name": "Silver Evergreen"
        },
        {
        "id": 2,
        "image": "dragon-tree.png",
        "genus": "Dracaena marginata",
        "size": "Medium",
        "light": "Medium Light",
        "price": "25",
        "name": "Dragon Tree"
        },
        {
        "id": 3,
        "image": "mother-tongue.png",
        "genus": "Sansevieria trifasciata",
        "size": "Medium",
        "light": "Medium Light",
        "price": "40",
        "name": "Mother-in-laws Tongue"
        },
        {
        "id": 4,
        "image": "peace-lily.png",
        "genus": "Spathiphyllum",
        "size": "Large",
        "light": "High Light",
        "price": "30",
        "name": "Peace - Lily"
        },
        {
        "id": 5,
        "image": "rubber-tree.png",
        "genus": "Ficus elastica",
        "size": "Medium",
        "light": "Low Light",
        "price": "35",
        "name": "Rubber Tree"
        },
        {
        "id": 6,
        "image": "aloe-vera.png",
        "genus": "Aloe barbadenis Miller",
        "size": "Medium",
        "light": "High Light",
        "price": "15",
        "name": "Aloe Vera"
        }
  ];
  const response = await request.get('/plants')

  expect(response.status).toBe(200)

  expect(response.body).toEqual({ results: plants});
  done()
})

it('should return a single plant object', async done => {
    const expectation = {
         
            results: {
                "id": 5,
                "image": "rubber-tree.png",
                "genus": "Ficus elastica",
                "size": "Medium",
                "light": "Low Light",
                "price": "35",
                "name": "Rubber Tree"
            }
        
    };
    const response = await request.get('/plants/5')
  
    expect(response.status).toBe(200)
    expect(response.body).toEqual(expectation)
    done()
  })
  