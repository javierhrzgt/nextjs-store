interface CategoryProps {
  params: Promise<{ category: string }>;
}

export default async function Category({ params }: CategoryProps) {
  const { category } = await params;
  return <h1>Categoría Dinámica: {category}</h1>;
}
