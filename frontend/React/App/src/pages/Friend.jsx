import { Toaster } from "react-hot-toast";
import Card from "../component/Card.jsx";

function Friend() {
  const Person = [
  {
    "id": 1,
    "name": "Classic Denim Jacket",
    "address": "Men · Casual Wear",
    "imageUrl": "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 2,
    "name": "Summer Floral Dress",
    "address": "Women · Casual Dress",
    "imageUrl": "https://images.unsplash.com/photo-1520975693410-001a6b5c4e45?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 3,
    "name": "Slim Fit T-Shirt",
    "address": "Men · Everyday Essentials",
    "imageUrl": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 4,
    "name": "Elegant Blazer",
    "address": "Women · Formal Wear",
    "imageUrl": "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 5,
    "name": "Hooded Sweatshirt",
    "address": "Unisex · Winter Wear",
    "imageUrl": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 6,
    "name": "Athletic Joggers",
    "address": "Men · Sportswear",
    "imageUrl": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 7,
    "name": "Leather Jacket",
    "address": "Men · Premium Fashion",
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 8,
    "name": "Knitted Sweater",
    "address": "Women · Winter Collection",
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 9,
    "name": "Formal Shirt",
    "address": "Men · Office Wear",
    "imageUrl": "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 10,
    "name": "Casual Summer Top",
    "address": "Women · Trendy Wear",
    "imageUrl": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80"
  }
]



  return (
    <>
      <Toaster />

      <div className="flex flex-wrap gap-4">
        {Person.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            address={user.address}
            image={user.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

export default Friend;
