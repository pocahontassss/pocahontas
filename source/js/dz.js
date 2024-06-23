// исходник НЕЛЬЗЯ ИЗМЕНЯТЬ

const flats = [
    {
      floor: 3,
      rooms: 2,
      project: {
        id: 1,
        name: 'Foriver',
      },
    },
    {
      floor: 1,
      rooms: 3,
      project: {
        id: 2,
        name: 'Riversky',
      },
    },
    {
      floor: 5,
      rooms: 4,
      project: {
        id: 1,
        name: 'Foriver',
      },
    },
    {
      floor: 2,
      rooms: 2,
      project: {
        id: 2,
        name: 'Riversky',
      },
    },
  ];
  
  
  
  // чего нужно добиться
  const projects = [
    {
      id: 1,
      name: 'Foriver',
      flats: [
        {
          floor: 3,
          rooms: 2,
        },
        {
          floor: 5,
          rooms: 4,
        },
      ],
    },
    {
      id: 2,
      name: 'Riversky',
      flats: [
        {
          floor: 2,
          rooms: 2,
        },
        {
          floor: 1,
          rooms: 3,
        },
      ],
    }
  ];
  
const Project = {}
const result = []

flats.forEach(flat => {
  if (!Project[flat.project.id]) {
    Project[flat.project.id] = {
      id : flat.project.id,
      name : flat.project.name,
      flats : []
    }
    result.push(Project[flat.project.id])
  }
    
  Project[flat.project.id].flats.push({ floor : flat.floor, rooms : flat.rooms});
})

// Сложность On