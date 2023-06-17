import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Property from "./components/Property";

interface PropertyData {
  title: string;
  price: number;
  location: string;
  description: string;
  image: string;
  bedrooms: number;
  baths?: number;
  parking?: string;
}

function Properties() {
  const addedProperties: PropertyData[] = [
    {
      "title": "duis aute labore quis",
      "price": 2986498,
      "location": "Mbarara",
      "description": "Mollit magna non reprehenderit amet irure exercitation labore. Duis reprehenderit cillum adipisicing minim sunt culpa aute laborum ex. Proident pariatur ex Lorem esse incididunt magna. Enim in sunt non consequat ullamco sint labore eu. Incididunt aliquip laborum nulla irure.\r\n",
      "image": "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 6,
      "baths": 4,
      "parking": "Available"
    },
    {
      "title": "cillum anim nulla tempor",
      "price": 3076310,
      "location": "Kampala",
      "description": "Pariatur et excepteur irure qui anim veniam nulla esse veniam incididunt dolor dolor magna non. Esse pariatur minim est sunt cillum. Nostrud occaecat excepteur dolore ex.\r\n",
      "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 4,
      "baths": 4,
      "parking": "Available"
    },
    {
      "title": "do aliqua ullamco est",
      "price": 5467357,
      "location": "Njeru",
      "description": "Nulla commodo voluptate consectetur enim consequat ullamco incididunt nisi ipsum ad aliqua tempor. Duis sint duis dolore officia. Minim nisi culpa ullamco ad ut. Qui eu magna velit laboris consequat cillum deserunt sit fugiat irure. Commodo mollit quis ad pariatur culpa deserunt exercitation eiusmod. Qui enim aute ut aute consequat sint incididunt ea incididunt mollit.\r\n",
      "image": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 6,
      "baths": 3,
      "parking": "Not Avaible"
    },
    {
      "title": "voluptate minim velit ex",
      "price": 3230812,
      "location": "Lugazi",
      "description": "Enim Lorem non non non incididunt voluptate officia ipsum mollit pariatur ipsum. Incididunt voluptate duis cupidatat esse voluptate esse pariatur culpa. Proident do amet aliquip qui id minim tempor labore ullamco nulla Lorem cillum voluptate proident.\r\n",
      "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 3,
      "baths": 3,
      "parking": "Not Avaible"
    },
    {
      "title": "magna voluptate ad consequat",
      "price": 520986,
      "location": "Gulu",
      "description": "Dolor fugiat laborum do aliqua sit ipsum deserunt commodo esse officia enim ipsum do aute. Officia ut consequat non labore enim amet amet et. Deserunt dolor commodo quis excepteur mollit.\r\n",
      "image": "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 1,
      "baths": 2,
      "parking": "Available"
    },
    {
      "title": "dolor non amet dolor",
      "price": 5577409,
      "location": "Masaka",
      "description": "Laborum do minim nostrud aliqua ipsum nostrud do proident minim Lorem. Officia laboris sunt dolor officia fugiat eiusmod ipsum sint reprehenderit culpa eu deserunt quis. Aute dolor deserunt eu commodo commodo proident labore nulla tempor minim est minim. Ad magna ullamco incididunt voluptate incididunt labore commodo in consectetur eiusmod officia. Cupidatat dolor ipsum nisi id dolore deserunt in minim do id aute. Laborum tempor quis elit incididunt.\r\n",
      "image": "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 3,
      "baths": 2,
      "parking": "Not Avaible"
    },
    {
      "title": "laboris enim eu sint",
      "price": 4890199,
      "location": "Hoima",
      "description": "Do ut enim duis minim reprehenderit et adipisicing proident sunt elit duis Lorem mollit. Adipisicing aute tempor officia id adipisicing consequat. Reprehenderit eiusmod excepteur pariatur laboris tempor ipsum irure veniam enim commodo ipsum ea reprehenderit laborum. Enim ipsum consequat tempor ad pariatur et. Occaecat eu irure sunt veniam sunt. Excepteur minim consequat fugiat occaecat sint incididunt deserunt tempor pariatur. Irure laboris culpa in cillum do laboris dolore aute occaecat et.\r\n",
      "image": "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 6,
      "baths": 3,
      "parking": "Not Avaible"
    },
    {
      "title": "pariatur commodo sit sit",
      "price": 5633465,
      "location": "Masaka",
      "description": "Ipsum culpa eu nostrud eu aute nostrud laborum eiusmod. Ex aute dolor incididunt laborum deserunt mollit culpa est ex laborum aliqua nostrud deserunt. Lorem esse qui tempor elit ipsum ullamco occaecat. Dolor Lorem qui incididunt pariatur. Deserunt mollit tempor proident quis occaecat ea eiusmod sint. Nisi exercitation nostrud Lorem culpa labore minim sit.\r\n",
      "image": "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 2,
      "baths": 1,
      "parking": "Available"
    },
    {
      "title": "est magna culpa in",
      "price": 4066156,
      "location": "Mukono",
      "description": "Incididunt quis aute qui enim exercitation nulla ipsum commodo proident. Deserunt velit sint sint aute anim aliquip veniam sint sunt amet reprehenderit. Commodo est est id cupidatat exercitation.\r\n",
      "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 3,
      "baths": 2,
      "parking": "Not Avaible"
    },
    {
      "title": "ipsum proident aute occaecat",
      "price": 224892,
      "location": "Lugazi",
      "description": "Cillum culpa est est labore in ut minim anim aliqua duis magna eiusmod mollit. Adipisicing reprehenderit occaecat aliqua in nulla veniam minim. Culpa deserunt sit deserunt culpa nisi do minim enim labore laborum dolore sit ullamco.\r\n",
      "image": "https://images.unsplash.com/photo-1588012886079-baef0ac45fbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 3,
      "baths": 1,
      "parking": "Available"
    },
    {
      "title": "mollit reprehenderit fugiat duis",
      "price": 4314344,
      "location": "Mbarara",
      "description": "Reprehenderit sit laborum dolore enim esse proident laboris eiusmod ex est velit dolore minim. Sint Lorem elit dolore Lorem pariatur irure voluptate cupidatat pariatur sit amet mollit. Mollit nulla eu non eu in ea amet aliquip velit reprehenderit velit ullamco ullamco non. Pariatur tempor id officia minim do ut irure laboris ullamco deserunt.\r\n",
      "image": "https://images.unsplash.com/photo-1543071293-d91175a68672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 1,
      "baths": 2,
      "parking": "Not Avaible"
    },
    {
      "title": "nisi ad enim nisi",
      "price": 5694709,
      "location": "Gulu",
      "description": "Et culpa id velit cupidatat elit eu. Cillum commodo enim laborum in eu minim consequat aute dolore ut cupidatat aute aliqua. Et exercitation nulla qui aute fugiat veniam id non mollit ipsum non velit. Qui fugiat mollit proident sint ullamco excepteur labore excepteur veniam tempor laboris quis esse cupidatat. Dolore pariatur Lorem consequat elit cillum quis laborum.\r\n",
      "image": "https://images.unsplash.com/photo-1605146768851-eda79da39897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 6,
      "baths": 3,
      "parking": "Not Avaible"
    },
    {
      "title": "velit laboris elit eiusmod",
      "price": 1920133,
      "location": "Sabagabo",
      "description": "Et est dolore elit aute dolore. Lorem mollit enim laborum id sunt sint laborum tempor anim ad eu aliqua. Duis veniam consectetur ipsum fugiat ullamco eiusmod sit nulla incididunt ut eiusmod. Incididunt dolor officia anim nisi id adipisicing. Deserunt exercitation minim nisi veniam.\r\n",
      "image": "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 4,
      "baths": 4,
      "parking": "Available"
    },
    {
      "title": "incididunt adipisicing esse magna",
      "price": 5505654,
      "location": "Njeru",
      "description": "Dolor culpa consectetur esse eiusmod laborum consequat magna aute. Ipsum nostrud esse ea voluptate labore elit aute duis. Nulla veniam ex consectetur dolor officia eu ex. Ex duis esse enim fugiat cillum mollit culpa amet non eiusmod et. Culpa amet est aliqua aliqua in proident.\r\n",
      "image": "https://images.unsplash.com/photo-1600047509782-20d39509f26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 5,
      "baths": 1,
      "parking": "Not Avaible"
    },
    {
      "title": "cillum velit excepteur cupidatat",
      "price": 281349,
      "location": "Gulu",
      "description": "Veniam esse consequat id ullamco qui aute anim in anim nostrud. Aliquip duis consectetur veniam velit dolor consectetur incididunt elit eu occaecat dolor. Sint pariatur laborum officia tempor sunt quis incididunt excepteur enim aliquip reprehenderit. Pariatur proident anim culpa commodo in Lorem mollit sunt pariatur est ut in. Eu commodo laborum enim consequat sint.\r\n",
      "image": "https://images.unsplash.com/photo-1547638599-d4bf222cf5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 6,
      "baths": 4,
      "parking": "Available"
    },
    {
      "title": "cupidatat consequat dolore nulla",
      "price": 1530757,
      "location": "Kireka",
      "description": "Pariatur laboris nulla aute aliqua. Duis officia duis eu reprehenderit cillum minim cupidatat nulla excepteur esse incididunt velit voluptate veniam. Ut sit consectetur laborum amet nostrud velit proident. Consequat velit tempor consectetur aliqua id in ea laboris incididunt occaecat dolore.\r\n",
      "image": "https://images.unsplash.com/photo-1615915613497-0ee591aa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 3,
      "baths": 2,
      "parking": "Available"
    },
    {
      "title": "magna Lorem laborum esse",
      "price": 502479,
      "location": "Nansana",
      "description": "Ea nulla consectetur quis enim non sit ullamco enim consectetur labore ipsum. Duis eu voluptate irure cupidatat deserunt enim nostrud ipsum aute. Sunt occaecat eu eiusmod pariatur dolor minim esse sit qui sunt enim minim minim.\r\n",
      "image": "https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 6,
      "baths": 3,
      "parking": "Not Avaible"
    },
    {
      "title": "mollit tempor esse voluptate",
      "price": 5987374,
      "location": "Gulu",
      "description": "Nulla ipsum non laboris ut quis consequat esse aliqua elit cillum anim ea duis ex. Quis do minim est eiusmod nulla ipsum nulla. Eu amet id eu eu quis elit elit deserunt officia laborum sunt duis.\r\n",
      "image": "https://images.unsplash.com/photo-1600607688066-890987f18a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 1,
      "baths": 1,
      "parking": "Available"
    },
    {
      "title": "magna velit velit sint",
      "price": 4438176,
      "location": "Masaka",
      "description": "Id nulla id anim eu deserunt qui magna ad esse laborum ea. Ut duis duis officia dolor reprehenderit cupidatat. Ut pariatur occaecat eiusmod quis mollit ut qui non proident occaecat est adipisicing ea ullamco. In anim ad labore non et laboris proident. Consequat pariatur proident sint aliqua ea cupidatat sunt adipisicing aute do. Adipisicing id aute deserunt est ea ullamco aliqua exercitation officia eu enim. Sunt tempor commodo aute pariatur sunt excepteur occaecat ad in.\r\n",
      "image": "https://images.unsplash.com/photo-1526402971608-a6f6b261402a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 3,
      "baths": 4,
      "parking": "Available"
    },
    {
      "title": "esse esse exercitation et",
      "price": 255261,
      "location": "Lugazi",
      "description": "Ullamco labore exercitation ut duis sint. Labore in voluptate cillum qui consequat enim ullamco pariatur elit velit aliquip labore. Officia quis veniam eu laborum deserunt dolor. Eiusmod mollit minim pariatur cillum minim incididunt Lorem et minim culpa est officia amet cupidatat. Laborum mollit aute ut eu nostrud cillum esse elit veniam officia.\r\n",
      "image": "https://images.unsplash.com/photo-1623005399662-b55f006328c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 6,
      "baths": 2,
      "parking": "Available"
    },
    {
      "title": "sint id velit ipsum",
      "price": 1089182,
      "location": "Masaka",
      "description": "Veniam dolor commodo do irure non irure Lorem sit culpa magna enim. Id do occaecat id do aute qui Lorem sunt mollit proident officia dolor. Aliqua aliqua consequat enim nisi Lorem fugiat elit in.\r\n",
      "image": "https://images.unsplash.com/photo-1578758509716-b9d9aabb85ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 6,
      "baths": 1,
      "parking": "Not Avaible"
    },
    {
      "title": "magna veniam veniam sint",
      "price": 1516279,
      "location": "Kira",
      "description": "Amet pariatur mollit Lorem consectetur culpa mollit sint adipisicing quis enim deserunt commodo veniam. Nulla adipisicing labore nulla aute sunt ea nostrud labore dolore veniam non duis mollit sint. Amet exercitation officia excepteur magna officia deserunt. Officia commodo est ad nostrud cupidatat Lorem. Pariatur amet nostrud deserunt aute eiusmod nulla culpa.\r\n",
      "image": "https://images.unsplash.com/photo-1567117438762-81cf32c54a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc0fHxob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 3,
      "baths": 4,
      "parking": "Available"
    },
    {
      "title": "dolore ipsum exercitation ad",
      "price": 1320545,
      "location": "Masaka",
      "description": "Ullamco voluptate qui nostrud ullamco culpa ullamco laborum ullamco enim ad. Sunt magna eiusmod excepteur incididunt minim laboris officia culpa proident voluptate do. Officia fugiat in exercitation magna eiusmod officia. Occaecat voluptate nostrud aliqua eu Lorem fugiat. Ut pariatur tempor laborum esse consequat ex consectetur deserunt in.\r\n",
      "image": "https://images.unsplash.com/photo-1591014225791-9e30695a0aa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHxob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 5,
      "baths": 3,
      "parking": "Available"
    },
    {
      "title": "adipisicing do tempor proident",
      "price": 1013692,
      "location": "Kireka",
      "description": "Velit dolore sit reprehenderit voluptate officia qui do ex ipsum qui enim. Qui do sunt magna anim voluptate pariatur. Esse exercitation laborum aliqua mollit excepteur tempor dolor laboris. Qui esse ullamco irure cupidatat Lorem sunt dolor deserunt in velit consequat esse commodo laboris. Non amet laborum consequat qui velit veniam eu dolore aute duis esse occaecat.\r\n",
      "image": "https://images.unsplash.com/photo-1599810479221-b408a7a67e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 2,
      "baths": 4,
      "parking": "Available"
    },
    {
      "title": "consectetur culpa Lorem reprehenderit",
      "price": 2149793,
      "location": "Lugazi",
      "description": "Pariatur qui duis officia enim mollit minim aute voluptate magna officia culpa. Deserunt aliqua dolore mollit velit non magna veniam amet amet commodo. Tempor occaecat laboris commodo amet pariatur pariatur dolor pariatur dolore deserunt exercitation commodo ea adipisicing. Eu sit excepteur mollit deserunt velit mollit exercitation id nostrud consectetur Lorem enim qui do. Quis deserunt occaecat commodo laboris commodo nulla ex nisi ad dolor consequat nisi ex nulla. Aute occaecat veniam sunt aliqua cupidatat adipisicing ullamco elit nostrud. Voluptate mollit eu occaecat ea qui cupidatat labore culpa ea et officia amet.\r\n",
      "image": "https://images.unsplash.com/photo-1623005329287-0848374575d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHxob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 5,
      "baths": 3,
      "parking": "Available"
    },
    {
      "title": "tempor sunt quis reprehenderit",
      "price": 544590,
      "location": "Mukono",
      "description": "Esse deserunt qui commodo ex qui. Labore pariatur magna ad duis duis eiusmod do deserunt laborum adipisicing elit. Commodo excepteur dolor veniam dolor exercitation cupidatat proident laboris laborum pariatur veniam aliqua. Elit nostrud est ea fugiat enim tempor ipsum velit do nulla incididunt.\r\n",
      "image": "https://images.unsplash.com/photo-1625878455877-490d9ca17740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU4fHxob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 1,
      "baths": 3,
      "parking": "Available"
    },
    {
      "title": "enim dolore sit excepteur",
      "price": 4036089,
      "location": "Kampala",
      "description": "Aliqua dolore aliqua aliqua incididunt duis dolore ad dolor. Id reprehenderit laboris proident eu voluptate magna veniam incididunt esse exercitation. Laborum eiusmod elit officia commodo tempor pariatur ut sunt voluptate ut irure id minim incididunt.\r\n",
      "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 3,
      "baths": 4,
      "parking": "Not Avaible"
    },
    {
      "title": "excepteur incididunt esse duis",
      "price": 857062,
      "location": "Njeru",
      "description": "Ex veniam Lorem sint officia laborum ipsum mollit consequat. Nulla dolore voluptate enim laboris minim laborum voluptate sunt excepteur deserunt sunt eiusmod nostrud esse. Cupidatat est dolore cupidatat laborum tempor eiusmod in velit cillum nostrud aliqua consectetur. Amet duis id sint fugiat reprehenderit.\r\n",
      "image": "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 6,
      "baths": 2,
      "parking": "Not Avaible"
    },
    {
      "title": "enim eiusmod officia deserunt",
      "price": 4367781,
      "location": "Sabagabo",
      "description": "Sunt officia nisi sunt id est sunt eu ipsum sint exercitation laborum. Occaecat ex sunt anim anim deserunt ex consequat culpa voluptate minim nisi elit dolor. Lorem excepteur eiusmod nostrud dolore veniam do commodo mollit. Ad dolor ex voluptate enim officia labore culpa. Enim dolore reprehenderit reprehenderit tempor labore quis excepteur magna do cupidatat reprehenderit nostrud nulla in. Enim labore voluptate excepteur aliquip minim ea proident incididunt eiusmod minim aliqua elit pariatur Lorem.\r\n",
      "image": "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 5,
      "baths": 3,
      "parking": "Available"
    },
    {
      "title": "velit minim Lorem consequat",
      "price": 3001161,
      "location": "Hoima",
      "description": "Non culpa mollit eiusmod veniam voluptate anim deserunt labore nostrud ut nisi incididunt labore tempor. Ut sint in consequat occaecat sit qui cillum deserunt culpa adipisicing nulla id aute sunt. Reprehenderit aliqua Lorem deserunt nostrud ut. Esse cillum qui ipsum anim sit amet. Reprehenderit nisi aliquip reprehenderit eu. Laboris aliquip reprehenderit quis aute nulla ullamco ad sunt nostrud.\r\n",
      "image": "https://images.unsplash.com/photo-1630699144867-37acec97df5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 6,
      "baths": 1,
      "parking": "Not Avaible"
    },
    {
      "title": "cupidatat pariatur ad ea",
      "price": 2151173,
      "location": "Kira",
      "description": "Ad velit deserunt nulla cupidatat elit proident in deserunt. Adipisicing aliquip laborum ullamco veniam voluptate mollit ea consectetur minim laboris sunt. Dolore laboris incididunt fugiat sit nostrud enim quis nisi consectetur. Excepteur ut ut pariatur labore eu ut. Duis qui duis nisi mollit cupidatat nostrud tempor amet veniam laborum velit qui eu aute.\r\n",
      "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 5,
      "baths": 2,
      "parking": "Available"
    },
    {
      "title": "fugiat aute aute mollit",
      "price": 5062620,
      "location": "Namugongo",
      "description": "Cupidatat commodo ullamco dolore ex id culpa. Ipsum laboris et occaecat deserunt. Occaecat enim enim laborum id. Culpa est eiusmod incididunt consectetur ipsum sit duis laborum quis pariatur amet culpa eiusmod consequat. Magna ut ad tempor laboris reprehenderit duis aute irure reprehenderit. Dolor eu ipsum tempor voluptate aliqua nulla elit. Dolor sint voluptate laborum ex non tempor culpa.\r\n",
      "image": "https://images.unsplash.com/photo-1619989652700-9984844cb0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      "bedrooms": 1,
      "baths": 4,
      "parking": "Not Avaible"
    }
  ];
   
  return (
    <>
      <div className="custom-light-green py-5">
        <div className="container">
          <div className="row">
            {addedProperties.map((property, index) => (
              <Property key={index} {...property} />
            ))}
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Properties;
