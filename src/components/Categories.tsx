import Category from "./Category";

interface CategoryData {
  title: string;
  image: string;
  total: number;
}

function Categories() {
  const addedCategories: CategoryData[] = [
    {
      title: 'Apartments',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      total: 254
    },
    {
      title: 'Houses',
      image: 'https://images.unsplash.com/photo-1503627381655-17cf0637efc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
      total: 550
    },
    {
      title: 'Offices',
      image: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      total: 120
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