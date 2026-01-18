import items from "../../../data/items.json";

export async function GET() {
  return Response.json(items);
}
