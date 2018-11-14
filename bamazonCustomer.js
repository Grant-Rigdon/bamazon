const inquirer = require('inquirer')
const mysql = require('mysql')

//Connect to database
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon_db'
})

let products = []

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    products = []
    connection.query('SELECT * FROM bamazon_db.products', function (error, res, fields) {
        if (error) throw error
        res.forEach(element => {
           products.push( element.product_name+"  "+element.price) 
        })
        displayProducts()     
    })
    
}

function displayProducts(){
    inquirer
        .prompt([{
            type: 'rawlist',
            name: 'rawlist',
            message: 'What would you like to purchase?',
            choices: products
        },
        {
            type: 'input',
            name: 'input',
            message: 'How many would you like to purchase?',
            default: 1,
            validate: validateInput

        }
        ]).then(answer => {
            var item = answer.rawlist.replace(/\d+./g, '').trim()
            var quantity = answer.input            
            console.log(item)
            connection.query(`SELECT * FROM bamazon_db.products WHERE product_name = "${item}"`, function(err, res) {
                if (err) throw err;
                
                if (quantity > res[0].stock_quantity){
                    console.log(`\r\nInsufficient quantity!\r\n`)
                    cont()
                }else{
                    updateDb(item,quantity)
                    console.log(`\r\nYou purchased ${quantity} ${item}(s) for a total of $${(res[0].price * quantity)}\r\n`)
                    cont()
                }
            })   
        })
}

function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}

function updateDb(item,quantity){
    // connection.query(`UPDATE bamazon_db.products SET stock_quantity = ${quantity} WHERE product_name = ${item} `)
}

function cont(){
    inquirer
        .prompt([{
            type: 'confirm',
            name: 'confirm',
            message: 'Would you like to continue shopping?'
        }]).then(answer =>{
            
            if (answer.confirm){
                console.log('\r\n')
                displayProducts()
            }else{
                console.log('\r\nHave a nice day')
                process.exit()
                connection.end(); 
            }
        })

}

