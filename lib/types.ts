export interface INews {
  id: string,
  title: string,
  content: string,
  link?: string,
  video?: string
}

export interface INewsletter {
  id: string,
  date: string,
  formData: {
    title: string,
    doc: string
  }
}

export interface ICalendar {
  id: string,
  title: string,
  content: string,
  link?: string,
  video?: string
}

export interface IImage {
  id: string,
  formData: {
    doc: string
  }
}

export interface IBlog {
  id: string,
  date: string,
  title: string,
  content: string,
  link?: string,
  img?: string
}

export interface INeeds {
  id: string,
  item0?: string,
  item1?: string,
  item2?: string,
  item3?: string,
  item4?: string,
  item5?: string,
  item6?: string,
  item7?: string,
  item8?: string,
  item9?: string,
}

export interface ITestimonies {
  id: string,
  formData: {
    doc: string,
    content: string
  }
}
