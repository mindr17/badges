import { API_TOKEN_PRIVATE, API_URL } from '@/config';

// const getCount = async () => {
//   const response = await fetch(
//     `${API_URL}/items/badges_stats?access_token=${API_TOKEN_PRIVATE}`
//   );

//   const countData = await response.json();

//   return Response.json({ countData });
// };

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  if (type === 'get_count') {
    // await getCount();
    const response = await fetch(
      `${API_URL}/items/badges_stats?access_token=${API_TOKEN_PRIVATE}`
    );

    const countData = await response.json();

    return Response.json({ countData });
  }

  if (type === 'add_count') {
    const oldResponse = await fetch(
      `${API_URL}/items/badges_stats?access_token=${API_TOKEN_PRIVATE}`
    );

    const oldCountData = await oldResponse.json();
    const oldCount = oldCountData.data.copied_count;

    const count = searchParams.get('count');

    const body = { copied_count: oldCount + Number(count) };

    const response = await fetch(`${API_URL}/items/badges_stats`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN_PRIVATE}`,
      },
      body: JSON.stringify(body),
    });

    const countData = await response.json();

    return Response.json({ countData });
  }

  if (type === 'db') {
    const response = await fetch('../../badjes-db.json');
    const countData = await response.json();

    return Response.json({ countData });
  }

  return Response.json('error');
}
