import {v4 as uuid} from 'uuid'

const Teammates = [
    {
        id: uuid(),
        person: "Connie",
        email: "connie@dorksquad.com",
        role: "Warlock"
    },
    {
        id: uuid(),
        person: "Weston",
        email: "weston@dorksquad.com",
        role: "Dungeon Master"
    },
    {
        id: uuid(),
        person: "Jonathan",
        email: "jonathan@dorksquad.com",
        role: "Ranger"
    },
    {
        id: uuid(),
        person: "James",
        email: "james@dorksquad.com",
        role: "Druid"
    },
    {
        id: uuid(),
        person: "Vince",
        email: "vince@dorksquad.com",
        role: "Cleric"
    },
    {
        id: uuid(),
        person: "Ismael",
        email: "ismael@dorksquad.com",
        role: "Bard"
    },
    {
        id: uuid(),
        person: "Chad",
        email: "chad@dorksquad.com",
        role: "Monk"
    },
    {
        id: uuid(),
        person: "Mike",
        email: "mike@dorksquad.com",
        role: "Dungeon Master"
    },
]

export default {
    get() {
      return Promise.resolve({ status: 200, success: true, data: Teammates })
    },
    post(url, { person, email, role }) {
      const newTeammate = { id: uuid(), person, email, role }
      return Promise.resolve({ status: 200, success: true, data: newTeammate })
    }
  }