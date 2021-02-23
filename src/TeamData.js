import {v4 as uuid} from 'uuid'

const Teammates = [
    {
        id: uuid(),
        person: "Connie",
        email: "bukit3point0@gmail.com",
        role: "Over this shit"
    },
    {
        id: uuid(),
        person: "Cody",
        email: "codyethanjordan@gmail.com",
        role: "Dungeon Master"
    },
    {
        id: uuid(),
        person: "Adam",
        email: "adamdadi@gmail.com",
        role: "Future Weeb"
    },
    {
        id: uuid(),
        person: "Bryan",
        email: "bdiaz12345@gmail.com",
        role: "Sage Mage"
    }
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