import {Router} from 'express'

import {getPersons, 
        getPerson, 
        createPerson,
        updatePerson, 
        deletePerson, 
    } from '../../models/persons'

const router = Router()

router.get('/', (req,res) => {
    const persons = getPersons()
    res.send(persons)
})

router.get('/:id', (req,res) => {
    const person = getPerson(id: req.params.id)
    if(person)
    {
      res.send(person)
    }
    res.status(code: 404).send({msg: 'Person not found'})
})

router.post('/',(req,res) => {
    const newPerson = createPerson(person: req.body)
    if(newPerson){
      res.status(code: 201).send(newPerson)
    }
   res.status(code: 400).send({msg: 'Bad Request'})
})

router.put('/:id',(req,res) => {
 const updatePerson = updatePerson( id: req.params.id, person: req.body)
 if(updatePerson){
  res.send(updatedPerson)
 }
 res.status(code: 404).send({ msg: 'Person not found'})
})

router.delete('/:id', (req, res) => {
    const deleted = deletePerson(id: req.params.id)
    if(deleted){
     res.send({msg: `Person ${req.params.id} Deleted`})
   }
   res.status(code: 404).send({ msg: 'Person not found'})
})


export default router 