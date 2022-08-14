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

export interface ISupper {
  id: string,
  formData: {
    doc: string
  }
}
