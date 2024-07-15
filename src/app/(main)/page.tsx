import { redirect } from 'next/navigation';

import { getUserData } from '@/actions/get-user-data';

export default async function Home() {
  const userData = await getUserData();

  if (!userData) return redirect('/auth');

  const userWorkspaceId = userData.workplaces?.[0];

  if (!userWorkspaceId) return redirect('/create-workspace');

  if (userWorkspaceId) return redirect(`/workspace/${userWorkspaceId}`);
}