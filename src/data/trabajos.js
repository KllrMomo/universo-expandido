export const fakeProjects = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Proyecto ${i + 1}`,
  image: `https://picsum.photos/seed/proyecto${i + 1}/400/400`,
  href: `/works/${i + 1}`,
}));