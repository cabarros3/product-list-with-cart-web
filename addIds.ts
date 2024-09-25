import * as fs from "fs";
import { v4 as uuidv4 } from "uuid";

interface ProductData {
  name: string;
  category: string;
  price: number;
  image: {
    desktop: string;
    thumbnail: string;
    mobile: string;
    tablet: string;
  };
}

const data: ProductData[] = JSON.parse(fs.readFileSync("data.json", "utf8"));

const updatedData = data.map((item, index) => ({
  id: uuidv4(), // Gera um ID único
  ...item,
}));

fs.writeFileSync("data_with_ids.json", JSON.stringify(updatedData, null, 2));
