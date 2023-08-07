import { NextResponse } from 'next/server';
import getRepositories from '../../utils/getRepositories';

export async function GET(request: Request) {
  const { username } = new URL(request.url);
  const repositories = await getRepositories(username as string);
  return NextResponse.json({ repositories });
}
