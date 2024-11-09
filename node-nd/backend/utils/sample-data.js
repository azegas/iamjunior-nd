const categories = [
  {
    id: 1,
    name: 'cleaning',
    color: 'blue',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    icon: 'https://img.icons8.com/?size=100&id=8088&format=png&color=800080',
  },
  {
    id: 2,
    name: 'repair',
    color: 'pink',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    icon: 'https://img.icons8.com/?size=100&id=92378&format=png&color=ebdf34',
  },
  {
    id: 3,
    name: 'painting',
    color: 'green',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    icon: 'https://img.icons8.com/?size=100&id=8141&format=png&color=34ebdb',
  },
  {
    id: 4,
    name: 'shifting',
    color: 'orange',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    icon: 'https://img.icons8.com/?size=100&id=9341&format=png&color=FF0000',
  },
  {
    id: 5,
    name: 'plumbing',
    color: 'yellow',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    icon: 'https://img.icons8.com/?size=100&id=67287&format=png&color=FFA500',
  },
  {
    id: 6,
    name: 'electric',
    color: 'yellow',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    icon: 'https://img.icons8.com/?size=100&id=77278&format=png&color=0000FF',
  },
];

const businesses = [
  {
    id: 1,
    name: 'cleaning',
    description: 'House cleaning services',
    address: 'Vilnius, Lithuania',
    worker: 'John Doe',
    contactPerson: 'Jane Smith',
    email: 'jane.smith@fashionista.com',
    category: 'cleaning',
    images: [
      'https://media.istockphoto.com/id/609608134/photo/woman-with-basket-and-cleaning-equipment.jpg?s=612x612&w=0&k=20&c=9a6DIVAdZnS8tRQ9UA5wWsvIvexqq8jyGq2woKzUyWE=',
    ],
  },
  {
    id: 2,
    name: 'Appliance Repair',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    address: 'Kaunas, Lithuania',
    worker: 'Jane Smith',
    contactPerson: 'Jane Smith',
    email: 'jane.smith@appliance-repair.com',
    category: 'repair',
    images: [
      'https://media.istockphoto.com/id/486913078/photo/repairman-at-customers-front-door.jpg?s=612x612&w=0&k=20&c=7W7AwpwIYq-4Uf6hxKfWM6KanW_Q_Oj6KChM4HxNbMM=',
    ],
  },
  {
    id: 3,
    name: 'Interior Painting',
    description:
      'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    address: 'Klaipeda, Lithuania',
    worker: 'Michael Johnson',
    contactPerson: 'Michael Johnson',
    email: 'michael.johnson@interior-painting.com',
    category: 'painting',
    images: [
      'https://www.homepainterstoronto.com/wp-content/uploads/2023/03/4._Different_Qualities_of_Paint-1024x769.webp',
    ],
  },
  {
    id: 4,
    name: 'Furniture Moving',
    description:
      'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
    address: 'Panevezys, Lithuania',
    worker: 'Emily Brown',
    contactPerson: 'Emily Brown',
    email: 'emily.brown@furniture-moving.com',
    category: 'shifting',
    images: [
      'https://www.move.org/app/uploads/2020/03/The-5-Best-Moving-Companies-of-2020.jpeg',
    ],
  },
  {
    id: 5,
    name: 'Plumbing Services',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    address: 'Siauliai, Lithuania',
    worker: 'Elizabeth Johnson',
    contactPerson: 'Elizabeth Johnson',
    email: 'elizabeth.johnson@plumbing-services.com',
    category: 'plumbing',
    images: [
      'https://www.tradesfortomorrow.ca/wp-content/uploads/2023/08/AdobeStock_618936025-scaled.jpeg',
    ],
  },
  {
    id: 6,
    name: 'Electrical Work',
    description:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    address: 'Taurage, Lithuania',
    worker: 'Sarah Taylor',
    contactPerson: 'Sarah Taylor',
    email: 'sarah.taylor@electrical-work.com',
    category: 'electric',
    images: [
      'https://www.optimistdaily.com/wp-content/uploads/shutterstock_668450440.jpg',
    ],
  },
  {
    id: 7,
    name: 'House Cleaning 2',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    address: 'Vilnius, Lithuania',
    worker: 'John Doe',
    contactPerson: 'John Doe',
    email: 'john.doe@house-cleaning-2.com',
    category: 'cleaning',
    images: [
      'https://media.istockphoto.com/id/609608134/photo/woman-with-basket-and-cleaning-equipment.jpg?s=612x612&w=0&k=20&c=9a6DIVAdZnS8tRQ9UA5wWsvIvexqq8jyGq2woKzUyWE=',
    ],
  },
  {
    id: 8,
    name: 'Appliance Repair 2',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    address: 'Kaunas, Lithuania',
    worker: 'Jane Smith',
    contactPerson: 'Jane Smith',
    email: 'jane.smith@appliance-repair-2.com',
    category: 'repair',
    images: [
      'https://media.istockphoto.com/id/486913078/photo/repairman-at-customers-front-door.jpg?s=612x612&w=0&k=20&c=7W7AwpwIYq-4Uf6hxKfWM6KanW_Q_Oj6KChM4HxNbMM=',
    ],
  },
  {
    id: 9,
    name: 'Interior Painting 2',
    description:
      'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    address: 'Klaipeda, Lithuania',
    worker: 'Michael Johnson',
    contactPerson: 'Michael Johnson',
    email: 'michael.johnson@interior-painting-2.com',
    category: 'painting',
    images: [
      'https://www.homepainterstoronto.com/wp-content/uploads/2023/03/4._Different_Qualities_of_Paint-1024x769.webp',
    ],
  },
  {
    id: 10,
    name: 'Furniture Moving 2',
    description:
      'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
    address: 'Panevezys, Lithuania',
    worker: 'Emily Brown',
    contactPerson: 'Emily Brown',
    email: 'emily.brown@furniture-moving-2.com',
    category: 'shifting',
    images: [
      'https://www.move.org/app/uploads/2020/03/The-5-Best-Moving-Companies-of-2020.jpeg',
    ],
  },
  {
    id: 11,
    name: 'House Cleaning 3',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    address: 'Vilnius, Lithuania',
    worker: 'John Doe',
    contactPerson: 'John Doe',
    email: 'john.doe@house-cleaning-3.com',
    category: 'cleaning',
    images: [
      'https://media.istockphoto.com/id/609608134/photo/woman-with-basket-and-cleaning-equipment.jpg?s=612x612&w=0&k=20&c=9a6DIVAdZnS8tRQ9UA5wWsvIvexqq8jyGq2woKzUyWE=',
    ],
  },
  {
    id: 12,
    name: 'Plumbing Services 3',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    address: 'Siauliai, Lithuania',
    worker: 'Elizabeth Johnson',
    contactPerson: 'Elizabeth Johnson',
    email: 'elizabeth.johnson@plumbing-services-3.com',
    category: 'plumbing',
    images: [
      'https://www.tradesfortomorrow.ca/wp-content/uploads/2023/08/AdobeStock_618936025-scaled.jpeg',
    ],
  },
];

const bookings = [
  {
    id: 1,
    businessId: 1,
    date: '2023-10-01',
    time: '14:30',
    userEmail: 'user@example.com',
    userName: 'User One',
    status: 'Pending',
  },
  {
    id: 2,
    businessId: 1,
    date: '2023-10-02',
    time: '15:00',
    userEmail: 'user@example.com',
    userName: 'User Two',
    status: 'Completed',
  },
  {
    id: 3,
    businessId: 3,
    date: '2023-10-03',
    time: '16:00',
    userEmail: 'user3@example.com',
    userName: 'User Three',
    status: 'Pending',
  },
  {
    id: 4,
    businessId: 4,
    date: '2023-10-04',
    time: '17:00',
    userEmail: 'user4@example.com',
    userName: 'User Four',
    status: 'Completed',
  },
  {
    id: 5,
    businessId: 5,
    date: '2023-10-05',
    time: '18:00',
    userEmail: 'user5@example.com',
    userName: 'User Five',
    status: 'Pending',
  },
  {
    id: 6,
    businessId: 6,
    date: '2023-10-06',
    time: '19:00',
    userEmail: 'user6@example.com',
    userName: 'User Six',
    status: 'Completed',
  },
];

const users = [
  {
    username: 'dev',
    email: 'dev@gmail.com',
    password: 'hello',
  },
  {
    username: 'user',
    email: 'user@gmail.com',
    password: 'hello',
  },
];

module.exports = {
  categories,
  businesses,
  bookings,
  users,
};
