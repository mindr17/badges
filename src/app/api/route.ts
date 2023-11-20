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
    const oldResponse = await fetch(
      'https://api.mafia.game/items/badges_stats?access_token=_3qcIwb2IBVeJ9_GEz12SgfWehuHHoIq'
    );

    const oldCountData = await oldResponse.json();
    const oldCount = oldCountData.data.copied_count;

    const count = searchParams.get('count');

    const body = { copied_count: oldCount + Number(count) };

    // const response = await fetch(
    //   'https://api.mafia.game/items/badges_stats?access_token=hYdq47WCnLtr_P8sxiYdguRUXT6kQQ4b',
    //   options
    // );

    const response = await fetch(
      `https://api.mafia.game/items/badges_stats`,
      {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer hYdq47WCnLtr_P8sxiYdguRUXT6kQQ4b`,
        },
        body: JSON.stringify(body),
      }
    );

    const countData = await response.json();

    return Response.json({ countData });
  }

  return Response.json('error');
}
