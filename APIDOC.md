# *jokebook* API Documentation

## Endpoint 1 - Get Jokebook Categories

**Request Format:**
- Method: GET
- Endpoint: '/jokebook/categories'

**Request Type:** JSON

**Returned Data Format:**
- Type: JSON
- Description: Returns list of joke categories

**Description:**
The endpoint gets avaialble categories of jokes.

**Example Request:**
GET /jokebook/categories

**Example Response:**
["funnyJoke", "lameJoke"]

**Error Handling:**
Error Message is sent and application doesn't run.


## Endpoint 2 - Get Jokes from Category

**Request Format:**
- Method: GET
- Endpoint: '/jokebook/joke/:category'
- Query Parameter: limit (optional)

**Request Type:** JSON

**Returned Data Format:**
- Type: JSON
- Description: Returns jokes from category

**Description:**
The endpoint gets jokes from a category

**Example Request:**
GET /jokebook/joke/funnyJoke

**Example Response:**
[
  {
    "joke": "Why did the student eat his homework?",
    "response": "Because the teacher told him it was a piece of cake!"
  },
  {
    "joke": "What kind of tree fits in your hand?",
    "response": "A palm tree"
  }
]

**Error Handling:**
Error Message if category sent doesn't exist.


## Endpoint 3 - Post new joke

**Request Format:**
- Method: POST
- Endpoint: '/jokebook/joke/new'
- Parameters: category, joke, response

**Request Type:** JSON

**Returned Data Format:**
- Type: JSON
- Description: Returns updated joke array

**Description:**
The endpoint adds a joke to the category specified in the jokebook.

**Example Request:**
POST /jokebook/joke/new
{
    "category" : "funnyJoke",
    "joke" : "Knock Knock",
    "response" : "Who's There?"
}

**Example Response:**
[
  {
    "joke": "Why did the student eat his homework?",
    "response": "Because the teacher told him it was a piece of cake!"
  },
  {
    "joke": "What kind of tree fits in your hand?",
    "response": "A palm tree"
  }
  {
    "joke": "Knock Knock",
    "response": "Who's There?"
  }
]

**Error Handling:**
Error message is sent if any parameter is missing or if any category isn't in the jokebook.

