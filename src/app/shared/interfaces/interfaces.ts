export interface fact {
  link: string,
  info: string
}

export interface skill {
  href: string,
  src: string,
  desc: string
}

export interface photo {
  appName: string,
  thumbnail: string,
  full: string,
  github: string,
  desc: string
}

export interface Comment {
  comment: string,
  comment_id: number,
  timestamp: string
}