interface CategoriesProps {
  params: {
    categories: string[]
    searchParams?: string
  }
}

export default function Category(props: CategoriesProps) {
  
  console.log(props)
  const { categories } = props.params
  console.log(categories)
  return (
    <div>
      <h1>Categoria Dinamica {categories}</h1>
    </div>
  );
}