export interface Fact {
  link: string,
  info: string
}

export interface Skill {
  href: string,
  src: string,
  desc: string
}

export interface Photo {
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
