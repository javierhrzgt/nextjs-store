interface CategoryProps {
  params: {
    category: string;
  };
}

export default function Category(props: CategoryProps) {
    const { category } = props.params;
  return (
    <div>
      <h1>Categoria Dinamica {category}</h1>
    </div>
  );
}