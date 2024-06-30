
**project scturcture**

- Controller: This is the outermost layer that defines the endpoints and specifies the structure of request bodies.

- DTO: Data Transfer Object (DTO) is a class validator for input and defines the output structure.
    - Usecase: This layer represents the business logic flow.

- Service: This contains the business logic that serves as an intermediary to communicate with the requestor or the data-access-layer.

- Data-access-layer (DAL) This layer serves as the gateway to communicate with the database.
  - Entity: Represents the database schema.
  - DL (Data Layer): Used for sending data outside of DAL.

- Requestor: This layer serves as the gateway to communicate with external systems.

** neversitup-test **
- run ```node ./neversitup-test/count-the-smiley-faces.js ```
- run ```node ./neversitup-test/find-the-odd-int.js ```
- run ```node ./neversitup-test/shufflings.js ```
