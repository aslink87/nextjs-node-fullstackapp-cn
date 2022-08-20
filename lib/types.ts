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

export interface IPdf {
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
