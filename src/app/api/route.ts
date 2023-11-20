export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get('id');
  // const res = await fetch(
  //   `https://data.mongodb-api.com/product/${id}`,
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'API-Key': process.env.DATA_API_KEY,
  //     },
  //   }
  // );
  // const product = await res.json();

  const response = await fetch(
    'https://api.mafia.game/items/badges_stats?access_token=_3qcIwb2IBVeJ9_GEz12SgfWehuHHoIq'
  );

  const countData = await response.json();

  return Response.json({ countData });
}
