function getKiller(suspectInfo, deadPeople) {
  let nameKiller = ''
  Object.entries(suspectInfo).forEach(([suspectedName, peopleSeen]) => {
    const foundKiller = deadPeople.every((dead) => {
      return peopleSeen.includes(dead)
    })

    if (foundKiller) nameKiller = suspectedName
  })

  return nameKiller
}

console.log(
  getKiller(
    {
      James: ['Jacob', 'Bill', 'Lucas'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
  )
)

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ['Ben', 'Kevin'],
      Finn: [],
    },
    ['Ben']
  )
)
