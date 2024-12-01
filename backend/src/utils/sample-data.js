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
    name: 'Sparkling Clean',
    description:
      "Sparkling Clean is a professional cleaning company dedicated to providing top-notch cleaning solutions to residential and commercial clients. Our team of highly trained and experienced cleaning professionals uses eco-friendly products and state-of-the-art equipment to ensure a sparkling clean environment. We understand the importance of a clean space and strive to deliver exceptional results that exceed our clients' expectations. With a focus on attention to detail and customer satisfaction, we aim to be the go-to cleaning service provider in the region.",
    address: 'Vilnius, Lithuania',
    worker: 'Jone Zydrune',
    contactPerson: 'Jone Zydrune',
    email: 'jone.zydrune@sparkling-clean.com',
    category: 'cleaning',
    images: [
      'https://img.freepik.com/free-photo/young-gardener-woman-with-short-hair-apron-hat-holding-shovel-with-serious-confident-expression_141793-102332.jpg?t=st=1733031129~exp=1733034729~hmac=130f288bc4bedc08d693c67055f5a72e0e0127a8e86574c4aa0eea4825d23f93&w=996',
      'https://img.freepik.com/free-photo/young-gardener-woman-with-short-hair-apron-hat-wearing-rubber-gloves-looking-camera-smiling-with-happy-face-showing-ok-sign-standing-light-background_141793-45529.jpg?t=st=1733031205~exp=1733034805~hmac=c4e25be310d536ad32b30be3ddd1b17444a6090a673af272f49f9d31281f388d&w=996',
      'https://img.freepik.com/free-photo/young-gardener-woman-with-short-hair-apron-hat-holding-shovel-looking-it-smiling-going-kiss-it_141793-102452.jpg?t=st=1733031243~exp=1733034843~hmac=22b5b6dff6033794ffa16dabf79d57d0ad52e0458e149ba4d4908349700526d5&w=996',
    ],
  },
  {
    id: 2,
    name: 'Repair Pros',
    description:
      'Appliance Repair Pros is a leading appliance repair service provider, offering expert solutions for all types of household appliances. Our team of skilled technicians is trained to diagnose and repair a wide range of appliances, from refrigerators and ovens to dishwashers and washing machines. We pride ourselves on our prompt response, competitive pricing, and commitment to customer satisfaction. With a focus on quality and reliability, we aim to be the trusted appliance repair partner for homeowners and businesses alike.',
    address: 'Kaunas, Lithuania',
    worker: 'Kazys Masiulis',
    contactPerson: 'Kazys Masiulis',
    email: 'kazys.masiulis@appliance-repair.com',
    category: 'repair',
    images: [
      'https://img.freepik.com/free-photo/buoyant-successful-handyman-posing-against-white-wall_273609-20080.jpg?t=st=1733031884~exp=1733035484~hmac=b58e485d8ede4eec446d611d4814244535c2772cdcd657d30465f27b6504a62a&w=1060',
      'https://img.freepik.com/free-photo/male-worker-wearing-work-clothes_273609-10812.jpg?t=st=1733031903~exp=1733035503~hmac=4fb3b8ff43d8e127e266bb7919e191fe09ebfe2bae5c1a225e1f9a19208c67b4&w=1060',
    ],
  },
  {
    id: 3,
    name: 'Artistic Painting',
    description:
      'Artistic Painting is a professional painting company specializing in interior and exterior painting services for residential and commercial properties. Our team of skilled painters is dedicated to delivering high-quality workmanship, attention to detail, and exceptional customer service. We use only the finest materials and the latest techniques to ensure a flawless finish that enhances the beauty of your property. With a focus on creativity and precision, we strive to bring your vision to life.',
    address: 'Klaipeda, Lithuania',
    worker: 'Romas Pliomba',
    contactPerson: 'Romas Pliomba',
    email: 'romas.pliomba@interior-painting.com',
    category: 'painting',
    images: [
      'https://img.freepik.com/free-photo/bearded-builder-man-construction-uniform-safety-helmet-wearing-rubber-gloves-holding-paint-brush-looking-camera-being-confused-spreading-arms-sides-standing-purple-background_141793-110997.jpg?t=st=1733060641~exp=1733064241~hmac=a288c22ecb7634537add8ff8ee034215fb1e6a92dc562867bb1bc373b7d2ec11&w=1060',
      'https://img.freepik.com/free-photo/bearded-builder-man-construction-uniform-safety-helmet-wearing-rubber-gloves-looking-aside-being-displeased-showing-thumbs-down_141793-111439.jpg?t=st=1733060667~exp=1733064267~hmac=98a1df80286be740a37e69dfa974ec16b71daf126b7428d2856f511410f15231&w=1060',
    ],
  },
  {
    id: 4,
    name: 'Easy Move',
    description:
      'Easy Move is a reliable moving company offering a wide range of relocation services for residential and commercial clients. Our team of experienced movers is trained to handle all aspects of your move, from packing and loading to transporting and unloading. We understand the stress associated with moving and strive to make the process as smooth and hassle-free as possible. With a focus on safety, efficiency, and customer satisfaction, we aim to be the go-to moving service provider in the region.',
    address: 'Panevezys, Lithuania',
    worker: 'Sigitas Bukenas',
    contactPerson: 'Sigitas Bukenas',
    email: 'sigitas.bukenas@furniture-moving.com',
    category: 'shifting',
    images: [
      'https://img.freepik.com/free-photo/delivery-person-getting-parcel-out-delivery_23-2149371949.jpg?t=st=1733060741~exp=1733064341~hmac=639b8fd4b1f69ce1c7eddd8ce3ca862a63694bd485b9e4958aa43a722f820dbf&w=1060',
      'https://img.freepik.com/free-photo/delivery-person-getting-parcel-out-delivery_23-2149371924.jpg',
    ],
  },
  {
    id: 5,
    name: 'Reliable Plumbing',
    description:
      'Reliable Plumbing is a professional plumbing service provider, offering a comprehensive range of plumbing solutions for residential and commercial clients. Our team of licensed plumbers is trained to diagnose and repair all types of plumbing issues, from leaky faucets and clogged drains to water heater installations and pipe replacements. We pride ourselves on our prompt response, competitive pricing, and commitment to customer satisfaction. With a focus on quality and reliability, we aim to be the trusted plumbing partner for homeowners and businesses alike.',
    address: 'Siauliai, Lithuania',
    worker: 'Rasa Petrauskiene',
    contactPerson: 'Rasa Petrauskiene',
    email: 'rasa.petrauskiene@plumbing-services.com',
    category: 'plumbing',
    images: [
      'https://img.freepik.com/free-photo/young-woman-builder-worker-construction-uniform-safety-helmet-swing-standing-orange-wall_141793-29136.jpg?t=st=1733060903~exp=1733064503~hmac=6305864937e80883501816a1d22d94e87292ba6ae95b2c75b2c0dfca8a98ed71&w=1060',
      'https://img.freepik.com/free-photo/young-woman-builder-worker-construction-uniform-safety-helmet-holding-measure-tape-looking-it-with-serious-face-standing-orange-wall_141793-29027.jpg?t=st=1733060922~exp=1733064522~hmac=389f41d11c1c66c050c18163a40a7d97de978a18b5b0c5bdf5a0f91327ff2199&w=1060',
    ],
  },
  {
    id: 6,
    name: 'Electrical Solutions',
    description:
      'Electrical Solutions Inc. is a leading electrical service provider, offering a wide range of electrical solutions for residential and commercial clients. Our team of licensed electricians is trained to handle all aspects of electrical work, from electrical installations and repairs to maintenance and upgrades. We understand the importance of electrical safety and strive to deliver high-quality workmanship, attention to detail, and exceptional customer service. With a focus on innovation and precision, we aim to be the trusted electrical partner for homeowners and businesses alike.',
    address: 'Taurage, Lithuania',
    worker: 'Viktorija Kavaliauskiene',
    contactPerson: 'Viktorija Kavaliauskiene',
    email: 'viktorija.kavaliauskiene@electrical-work.com',
    category: 'electric',
    images: ['https://www.optimistdaily.com/wp-content/uploads/shutterstock_668450440.jpg'],
  },
  {
    id: 7,
    name: 'Clean Services',
    description:
      "Sparkling Clean Services is a professional cleaning company dedicated to providing top-notch cleaning solutions to residential and commercial clients. Our team of highly trained and experienced cleaning professionals uses eco-friendly products and state-of-the-art equipment to ensure a sparkling clean environment. We understand the importance of a clean space and strive to deliver exceptional results that exceed our clients' expectations. With a focus on attention to detail and customer satisfaction, we aim to be the go-to cleaning service provider in the region.",
    address: 'Vilnius, Lithuania',
    worker: 'Nijole Krunyte',
    contactPerson: 'Nijole Krunyte',
    email: 'nijole.krunyte@house-cleaning-2.com',
    category: 'cleaning',
    images: [
      'https://img.freepik.com/premium-photo/middle-age-pretty-woman-feeling-happy-astonished-something-unbelievable-household-broom-concept_1194-362927.jpg?w=1380',
      'https://img.freepik.com/premium-photo/middle-age-pretty-woman-looking-arrogant-successful-positive-proud-household-broom-concept_1194-314213.jpg?w=1380',
      'https://img.freepik.com/premium-photo/middle-age-pretty-woman-feeling-angry-annoyed-rebellious-aggressive-household-broom-concept_1194-299989.jpg?w=1380',
    ],
  },
  {
    id: 8,
    name: 'Repair Guy',
    description:
      'Appliance Repair Guy is a leading appliance repair service provider, offering expert solutions for all types of household appliances. Our team of skilled technicians is trained to diagnose and repair a wide range of appliances, from refrigerators and ovens to dishwashers and washing machines. We pride ourselves on our prompt response, competitive pricing, and commitment to customer satisfaction. With a focus on quality and reliability, we aim to be the trusted appliance repair partner for homeowners and businesses alike.',
    address: 'Kaunas, Lithuania',
    worker: 'Mikis Petrauskas',
    contactPerson: 'Mikis Petrauskas',
    email: 'mikis.petrauskas@appliance-repair-2.com',
    category: 'repair',
    images: [
      'https://img.freepik.com/free-photo/mechanic-doing-joke_1368-4009.jpg?t=st=1733031962~exp=1733035562~hmac=107e38d5442acf30d0080b70eff28c79c52c8e6c8ef8ca1043b165acf126935c&w=740',
      'https://img.freepik.com/free-photo/mechanic-holding-something-white-background_1368-4043.jpg?t=st=1733031963~exp=1733035563~hmac=6e367720b741e39ebed80546765d8f287ffe1e3f6cef3d3ff68afd8044e15602&w=360',
      'https://img.freepik.com/free-photo/mechanic-holding-something-white-background_1368-4043.jpg?t=st=1733031963~exp=1733035563~hmac=6e367720b741e39ebed80546765d8f287ffe1e3f6cef3d3ff68afd8044e15602&w=360',
    ],
  },
  {
    id: 9,
    name: 'Painting Solutions',
    description:
      'Artistic Painting Solutions is a professional painting company specializing in interior and exterior painting services for residential and commercial properties. Our team of skilled painters is dedicated to delivering high-quality workmanship, attention to detail, and exceptional customer service. We use only the finest materials and the latest techniques to ensure a flawless finish that enhances the beauty of your property. With a focus on creativity and precision, we strive to bring your vision to life.',
    address: 'Klaipeda, Lithuania',
    worker: 'Mindaugas Kavaliauskas',
    contactPerson: 'Mindaugas Kavaliauskas',
    email: 'mindaugas.kavaliauskas@interior-painting-2.com',
    category: 'painting',
    images: [
      'https://img.freepik.com/free-photo/young-bearded-builder-man-construction-uniform-safety-helmet-holding-paint-roller-looking-camera-happy-positive-smiling-2_141793-30095.jpg?t=st=1733060599~exp=1733064199~hmac=234f632bcde8598cfae02b5df4c22b7956b9ef83b3ae32d3d27d1b86d00028ee&w=1060',
      'https://img.freepik.com/free-photo/young-bearded-builder-man-construction-uniform-safety-helmet-holding-paint-roller-pointing-index-finger-up-shouting_141793-30101.jpg?t=st=1733060624~exp=1733064224~hmac=2621224c0f4c1843225d70cb4bd7836ba5d6a8cf19f2ef4a38fbec58ba1f68cb&w=1060',
    ],
  },
  {
    id: 10,
    name: 'Move Services',
    description:
      'Easy Move Services is a reliable moving company offering a wide range of relocation services for residential and commercial clients. Our team of experienced movers is trained to handle all aspects of your move, from packing and loading to transporting and unloading. We understand the stress associated with moving and strive to make the process as smooth and hassle-free as possible. With a focus on safety, efficiency, and customer satisfaction, we aim to be the go-to moving service provider in the region.',
    address: 'Panevezys, Lithuania',
    worker: 'Jonas Jankauskas',
    contactPerson: 'Jonas Jankauskas',
    email: 'jonas.jankauskas@furniture-moving-2.com',
    category: 'shifting',
    images: [
      'https://img.freepik.com/free-photo/front-view-delivery-men-job-concept_23-2148684715.jpg?t=st=1733061108~exp=1733064708~hmac=35d1765b4442c022953e5d8cd13451696c0f115ce273f06abd86d704de7082eb&w=740',
      'https://img.freepik.com/free-photo/front-view-delivery-man-with-package_23-2148684720.jpg?t=st=1733061121~exp=1733064721~hmac=271705b842de57fb16afefcf2128cc05b2b16d084bb1360f68844a3a6ada7f72&w=740',
    ],
  },
  {
    id: 11,
    name: 'Cleaning',
    description:
      "Sparkling Clean Services is a professional cleaning company dedicated to providing top-notch cleaning solutions to residential and commercial clients. Our team of highly trained and experienced cleaning professionals uses eco-friendly products and state-of-the-art equipment to ensure a sparkling clean environment. We understand the importance of a clean space and strive to deliver exceptional results that exceed our clients' expectations. With a focus on attention to detail and customer satisfaction, we aim to be the go-to cleaning service provider in the region.",
    address: 'Vilnius, Lithuania',
    worker: 'Aurelija Jankauskiene',
    contactPerson: 'Aurelija Jankauskiene',
    email: 'aurelija.jankauskiene@house-cleaning-3.com',
    category: 'cleaning',
    images: [
      'https://img.freepik.com/premium-photo/fun-housewife-yellow-gloves-striped-apron-cleaning-rag-pocket-white-background-woman-holding-hands-head-bottles-with-cleaner-liquid-washing-dishes-copy-space-advertisement_365776-11637.jpg?w=1060',
      'https://img.freepik.com/premium-photo/young-fun-housewife-yellow-gloves-striped-apron-cleaning-rag-squeegee-pocket-isolated-white-background-housekeeper-woman-shoots-from-spray-bottle-with-cleaner-liquid-bottle-copy-space_365776-11585.jpg?w=1060',
    ],
  },
  {
    id: 12,
    name: 'Plumbing Solutions',
    description:
      'Reliable Plumbing Solutions is a professional plumbing service provider, offering a comprehensive range of plumbing solutions for residential and commercial clients. Our team of licensed plumbers is trained to diagnose and repair all types of plumbing issues, from leaky faucets and clogged drains to water heater installations and pipe replacements. We pride ourselves on our prompt response, competitive pricing, and commitment to customer satisfaction. With a focus on quality and reliability, we aim to be the trusted plumbing partner for homeowners and businesses alike.',
    address: 'Siauliai, Lithuania',
    worker: 'Rasa Petrauskiene',
    contactPerson: 'Rasa Petrauskiene',
    email: 'rasa.petrauskiene@plumbing-services-3.com',
    category: 'plumbing',
    images: [
      'https://img.freepik.com/free-photo/annoyed-young-builder-girl-holds-pipe-wrench-workshop-key-isolated-white-background-with-copy-space_141793-34172.jpg?t=st=1733061025~exp=1733064625~hmac=ae60710770674addb7e3912c65004c37f1249db4db52239d1fd889798a5f3146&w=1060',
      'https://img.freepik.com/free-photo/young-builder-girl-holds-pipe-wrench-tape-measure-isolated-white-background-with-copy-space_141793-34871.jpg?t=st=1733060988~exp=1733064588~hmac=0b47a3745c8c9c7a6e875c3cbb752cc8a5b75caf60258b15ae290b2127f1588d&w=1060',
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
    status: 'Pending',
  },
  {
    id: 2,
    businessId: 1,
    date: '2023-10-02',
    time: '15:00',
    userEmail: 'user@example.com',
    status: 'Completed',
  },
  {
    id: 3,
    businessId: 3,
    date: '2023-10-03',
    time: '16:00',
    userEmail: 'user3@example.com',
    status: 'Pending',
  },
  {
    id: 4,
    businessId: 4,
    date: '2023-10-04',
    time: '17:00',
    userEmail: 'user4@example.com',
    status: 'Completed',
  },
  {
    id: 5,
    businessId: 5,
    date: '2023-10-05',
    time: '18:00',
    userEmail: 'user5@example.com',
    status: 'Pending',
  },
  {
    id: 6,
    businessId: 6,
    date: '2023-10-06',
    time: '19:00',
    userEmail: 'user6@example.com',
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
