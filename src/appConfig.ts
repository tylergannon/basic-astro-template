import { getEntry } from 'astro:content';

type ApplicationId = Parameters<typeof getEntry>[1];

export const application: ApplicationId = 'astroship';

export async function getAppData() {
  const app = await getEntry('app', application);
  if (!app) {
    throw new Error(`App ${application} was not found.`);
  }

  return app.data;
}
