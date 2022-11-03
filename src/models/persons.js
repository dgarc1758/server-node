import { v4 as uuid } from 'uuid'

const persons = []

export const getPersons = () => persons 

export const getPerson = (id) => {
    return persons.find(person => person.id === id)
}

export const createPerson = (person) => {
    const id = uuid()
   persons.push({id, ...person})
   return getPerson(id)
}

export const updatePerson = (id, person) => {
    const databasePerson = getPerson(id)
    if(databasePerson){
        const personIndex = persons.findIndex((p) => p.id === id)
        person[personIndex]={id, ...person}
    }
    return getPerson(id)
}

export const deletePerson = (id, person) => {
    const personIndex = persons.findIndex((p) => p.id === id)
    if(personIndex -= -1){
        persons.splice(personIndex, 1)
        return true
    }
    return false
}
