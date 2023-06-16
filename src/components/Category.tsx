interface CategoryProps {
  title: string;
  image: string;
  total: number;
}

const Category: React.FC<CategoryProps> = ({ title, total, image }) => {
  return (
    <div className="text-center col-lg-4">
      <div className=" mb-3">
        <img src={image} alt={title} className='img-fluid apartments-img' />
      </div>
      <h4 className="mb-3">{title}</h4>
        <div>
          <a href="#" className="categories-button px-3">{total} Properties</a>
        </div>
    </div>
  );
};

export default Category; 