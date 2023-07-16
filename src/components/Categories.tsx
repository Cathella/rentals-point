import Category from "./Category";

interface CategoryData {
  title: string;
  image: string;
  total: number;
}

function Categories() {
  const addedCategories: CategoryData[] = [
    {
      title: 'All',
      image: 'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60',
      total: 1000
    },
    {
      title: 'Apartments',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      total: 254
    },
    {
      title: 'Houses',
      image: 'https://images.unsplash.com/photo-1588012886079-baef0ac45fbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60',
      total: 550
    },
    {
      title: 'Offices',
      image: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      total: 120
    },
    {
      title: 'Rentals',
      image: 'https://images.unsplash.com/photo-1565625443865-2c41cdb647d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlbnRhbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60',
      total: 100
    },
    {
      title: 'Shops',
      image: 'https://images.unsplash.com/photo-1626002860244-0907b3be82ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob3BzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60',
      total: 50
    },
  ];

  return (
    <div className="py-5 bg-white">
      <div className="container">
        <h3 className="text-center pb-5">Move to what Comforts you</h3>
        <div className="row">
          {addedCategories.map((category, index) => (
            <Category key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories;