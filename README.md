## SIMPLE ARRAY TO OBJECT MAPPER



## Installation

- Using [npm](https://www.npmjs.com/#getting-started): `npm install react-native-gifted-chat --save`
- Using [Yarn](https://yarnpkg.com/): `yarn add react-native-gifted-chat`


## Example
The first argument is the key array and the second argument is the values

```jsx
const arrayToObject = require("array-to-object");


arrayToObject(["name", "height"], ["Benny", "1.7m"])

result // { name: 'Benny', height: '1.7m' }



arrayToObject(["fruits", "expenses"], [["apples","bananas"], ["rent","transport"]])

result // { fruits: [ 'apples', 'bananas' ], expenses: [ 'rent', 'transport' ] }


```


## License

- [MIT](LICENSE)

## Author

Feel free to ask me questions on Twitter [@CodeManyatta](https://twitter.com/CodeManyatta)! 


## Contributors

Feel free to add more features or raise PR's for improvemts. I welcome collaborations.