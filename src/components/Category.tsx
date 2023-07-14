interface CategoryProps {
  title: string;
  image: string;
  total: number;
}

const Category: React.FC<CategoryProps> = ({ title, total, image }) => {
  return (
    <div className="text-center col-lg-2 mb-4">
      <div className=" mb-3">
        <img src={image} alt={title} className='img-fluid apartments-img' />
      </div>
      <p className="mb-3">{title} <span className="custom-text-muted">({total})</span></p>
    </div>
  );
};

export default Category; 