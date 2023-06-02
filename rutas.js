const router = require('express').Router()
const conexion = require('./db')

router.get('/',(req, res)=>{
    let sql = 'select * from cursos'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql = 'select * from cursos where id_curso = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.post('/', (req, res)=>{
    const{nombre,descripcion} = req.body
    let sql= `INSERT INTO cursos(nombre,descripcion) VALUES ('${nombre}','${descripcion}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'curso agregado'})
        }
    })
})

router.delete('/:id',(req, res)=>{
    const{id}=req.params
    let sql = `delete from cursos where id_curso = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'curso eliminado'})
        }
    })
})

router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, descripcion} = req.body

    let sql = `update cursos set nombre = '${nombre}', descripcion = '${descripcion}' where id_curso = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'curso modificado'})
        }
    })
})



module.exports = router;