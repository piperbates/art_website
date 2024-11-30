interface zineProjectData {
  title: string,
  image: string,
  imageDescription: string,
  description: string,
  link?: { href: string, linkText: string }
}

const zineProjectData: zineProjectData[] = [
  {
    title: '',
    image: '',
    imageDescription: '',
    description: '',
    link: { href: '', linkText: '' },
  },
];

export default zineProjectData;
