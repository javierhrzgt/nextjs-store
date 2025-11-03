interface CategoryPageProps {
  params: Promise<{ categories: string }>;
  searchParams?: Promise<Record<string, string>>;
}

export default async function CategoryPage({ params,searchParams}:CategoryPageProps) {
  const {categories} = await params;
  const search = await searchParams;

  console.log('Params:',categories);
  console.log('SearchParams:',search)
  return (
    <div>
      <h1>Category: {categories}</h1>
    </div>
  );
}