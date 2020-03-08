const fs = require ('fs')
const {parse, stringify} = require('flatted/cjs')

module.exports = {
    save: async function(data){
        return new Promise((resolve, reject) => {
            let path = `movie-${data.name}.json`
            fs.writeFile(`${path}`,stringify(data),(err) => {
                if (err) throw err
              })
        })        
    },
    load: async function(file){
            return new Promise((resolve,reject) => {
                fs.readFile(`./movie-${file}.json`, 'utf8' , (err,file) => {
                    if (err) throw err
                    const data = parse(file)
                    resolve (data)
                })
            })
        }   
    }
