export default class MeetUp {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
  constructor(
    title: string,
    image: string,
    address: string,
    description: string
  ) {
    (this.id = new Date().toISOString()),
      (this.title = title),
      (this.image = image),
      (this.address = address);
    this.description = description;
  }
}
