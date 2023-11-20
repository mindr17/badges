export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  if (type === 'get_count') {
    const response = await fetch(
      'https://api.mafia.game/items/badges_stats?access_token=_3qcIwb2IBVeJ9_GEz12SgfWehuHHoIq'
    );

    const countData = await response.json();

    return Response.json({ countData });
  }

  if (type === 'add_count') {
    const count = searchParams.get('count');

    const body = { copied_count: count };

    const options = {
      body: JSON.stringify(body),
      method: 'PATCH',
    };

    const response = await fetch(
      'https://api.mafia.game/items/badges_stats?access_token=hYdq47WCnLtr_P8sxiYdguRUXT6kQQ4b',
      options
    );

    console.log('response: ', response);

    const countData = await response.json();

    return Response.json({ countData });
  }

  return Response.json('error');
}
