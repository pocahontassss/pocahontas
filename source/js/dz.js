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
  
const projectMap = new Map();

flats.forEach(flat => {
  const projectId = flat.project.id;
  if (!projectMap.has(projectId)) {
    projectMap.set(projectId, { project: flat.project, flats: [] });
  }

  const { project, ...flatWithoutProject } = flat;
  projectMap.get(projectId).flats.push(flatWithoutProject);
});

const groupedFlatsMap = Array.from(projectMap.values());

// Сложность On


const grouped = flats.reduce((acc, flat) => {
  const projectId = flat.project.id;
  
  if (!acc[projectId]) {
    acc[projectId] = { project: flat.project, flats: [] };
  }
  
  const { project, ...flatWithoutProject } = flat;
  acc[projectId].flats.push(flatWithoutProject);
  
  return acc;
}, {});

const groupedFlats = Object.values(grouped);

console.log(groupedFlats);

// Сложность On
