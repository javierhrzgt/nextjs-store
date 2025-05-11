interface CategoriesProps {
  params: {
    categories: string[];
  };
}

export default function Category(props: CategoriesProps) {
    const { categories } = props.params;
    console.log(categories);
  return (
    <div>
      <h1>Categoria Dinamica {categories}</h1>
    </div>
  );
}